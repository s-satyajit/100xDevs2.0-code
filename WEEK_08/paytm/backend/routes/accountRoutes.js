import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Account, User } from "../models/userModel.js";
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const { userId } = req.body;
  const account = await Account.findOne({
    userId,
  });
  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

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

    await session.commitTransation();
    res.status(200).json({ msg: `Transaction successfult!` });
  } catch (err) {
    await session.abortTransaction();
    console.error("Transaction failed", err);
    res.status(500).json({ msg: `Internal server error` });
  } finally {
    await session.endSession();
  }
});

export default router;
