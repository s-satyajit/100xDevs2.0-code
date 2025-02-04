import express from "express";
const app = express();
import { z } from "zod";
const mySchema = z.array(z.number());

app.use(express.json());

app.post("/health-check", (req, res) => {
  const kidney = req.body.kidney;
  const response = mySchema.safeParse(kidney);
  if (!response) {
    res.status(411).json({
      msg: "input is invalid",
    });
  } else {
    res.send({ response });
  }
});

app.listen(3000);
