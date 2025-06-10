import express from "express";
import mongoose from "mongoose";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Account } from "../models/userModel.js";
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const { userId } = req.body;
  try {
    const account = await Account.findOne({
      userId,
    });
    if (!account) return res.status(404).json({ msg: `Account not found` });
    res.json({
      balance: account.balance,
    });
  } catch (err) {
    console.log("Error fetching balance", err);
    res.status(500).json({ error: `Internal server error ${err.message}` });
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    const { from, amount, to } = req.body;

    const fromAcc = await Account.findOne({ userId: from }).session(session);
    if (!fromAcc || fromAcc.balance < amount) {
      await session.abortTransaction();
      res.status(400).json({ msg: `Insufficient balance` });
    }

    const toAcc = await Account.findOne({ userId: to }).session(session);
    if (!toAcc) {
      await session.abortTransaction();
      res.status(400).json({ msg: `Invalid recipient account!` });
    }

    await Account.updateOne(
      { userId: from },
      { $inc: { balance: -amount } },
      { session }
    );
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } },
      { session }
    );

    await session.commitTransaction();
    res.status(200).json({ msg: `Transaction successful!` });
  } catch (err) {
    await session.abortTransaction();
    console.error("Transaction failed", err);
    res.status(500).json({ msg: `Internal server error, ${err.message}` });
  } finally {
    await session.endSession();
  }
});

export default router;
