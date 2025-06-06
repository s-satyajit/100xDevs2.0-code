import express from "express";
import { Account, User } from "../models/userModel";
import JWT from "jsonwebtoken";
const router = express.Router();
import {
  signinSchema,
  signupSchema,
  updateSchema,
} from "../schemas/userSchema";
import { authMiddleware } from "../middlewares/authMiddleware";

router.post("/signup", async (req, res) => {
  const signupResult = signupSchema.safeParse(req.body);
  if (signupResult.success) {
    res.status(400).json({
      message: `Validation failed`,
      error: signupResult.error.errors,
    });
  }
  const { username, firstname, lastname, password } = signupResult.data;
  try {
    const existing = User.findOne(username);
    existing && res.status(409).json({ msg: `Username already taken` });
    const newUser = new User({
      username,
      firstname,
      lastname,
    });
    var hashedPassword = await newUser.createHash(password);
    newUser.password_hash = hashedPassword;
    await newUser.save();

    return res.status(201).json({
      msg: `User created successfully`,
      user: {
        id: newUser._id,
        username: newUser.username,
        firstname: newUser.password,
        lastname: newUser.lastname,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: `Internal server error`,
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

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || ""
    const users = await User.find({
        $or: [{
            firstname: {"$regex": filter}
        }, {
            lastname: {"$regex": filter}
        }]
    })

    res.json({
        user: users.map((u) => ({
            id: u._id,
            username: u.username,
            firstname: u.firstname,
            lastname: u.lastname,
        }))
    })
})
