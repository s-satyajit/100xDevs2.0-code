import express from "express";
import { Account, User } from "../models/userModel.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ msg: `User not found` });
    const account = await Account.findOne({
      userId: req.userId,
    });
    if (!account) return res.status(404).json({ msg: `Account not found` });

    res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        firstname: user.firstname,
      },
      balance: {
        amount: account.balance,
      },
    });
  } catch (err) {
    console.log(`Error in GET /me`, err);
    res.status(500).json({ message: `Internal Server Error` });
  }
});

export default router;
