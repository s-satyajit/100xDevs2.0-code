import express from "express";
import JWT from "jsonwebtoken";
import { Account, User } from "../models/userModel.js";
import {
  signinSchema,
  signupSchema,
  updateSchema,
} from "../schemas/userSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const signupResult = signupSchema.safeParse(req.body);
  if (!signupResult.success) {
    res.status(400).json({
      message: `Validation failed`,
      error: signupResult.error.errors,
    });
  }
  const { username, firstname, lastname, password } = signupResult.data;
  try {
    const existing = await User.findOne({username});
    if (existing) {
      return res.status(409).json({ msg: `Username already taken` });
    }
    const newUser = new User({
      username,
      firstname,
      lastname,
    });
    var hashedPassword = await newUser.createHash(password);
    newUser.password_hash = hashedPassword;
    await newUser.save();

    const account = await Account.create({
      userId: newUser._id,
      balance: Math.floor(1+ Math.random() * 10000),
    });

    const token = JWT.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    return res.status(201).json({
      msg: `User created successfully`,
      token: token,
      user: {
        id: newUser._id,
        username: newUser.username,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
      },
      account: {
        balance: account.balance
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: `Internal server error: ${err.message}`,
    });
  }
});

router.post("/signin", async (req, res) => {
  const signinResult = signinSchema.safeParse(req.body);
  if (!signinResult.success) {
    res.status(400).json({
      msg: `Validation failed`,
      error: signinResult.error.errors,
    });
  }
  const { username, password } = signinResult.data;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: `Invalid username` });
    const isMatch = await user.validatePassword(password);
    if (!isMatch) return res.status(300).json({ msg: `Invalid password` });

    const token = JWT.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );
    return res.status(200).json({
      msg: `Sign-in successful`,
      token,
      user: {
        userId: user._id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `Internal server error` });
  }
});

router.put("update-info", authMiddleware, async (req, res) => {
  const infoResult = updateSchema.safeParse(req.body);
  if (!infoResult.success) {
    res.status(400).json({
      msg: `Validation failed`,
      errors: infoResult.error.errors,
    });
  }
  const { username, firstname, lastname, password } = infoResult.data;

  try {
    const user = await User.findBy(req.userId);
    if (!user) {
      res.status(404).json({ msg: `User not found` });
    }

    username !== undefined && (user.username = username);
    firstname !== undefined && (user.firstname = firstname);
    lastname !== undefined && (user.lastname = lastname);
    password !== undefined &&
      (user.password_hash = await user.createHash(password));
    await user.save();
    return res.status(200).json({ msg: `User updated successfully!` });
  } catch (err) {
    console.error(`Error updating user ${err}`);
    res.status(500).json({ msg: `Internal server error` });
  }
});

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstname: { $regex: filter },
      },
      {
        lastname: { $regex: filter },
      },
    ],
  });

  res.json({
    user: users.map((u) => ({
      id: u._id,
      username: u.username,
      firstname: u.firstname,
      lastname: u.lastname,
    })),
  });
});

export default router;
