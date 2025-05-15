import express from "express";
import { Todo } from "./models/model.js";
import { createTodo, updateTodo } from "./types.js";
const router = express.Router();

router.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  console.log(parsedPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ msg: `You sent the wrong inputs` });
  }

  const { title, description } = parsedPayload.data;

  await Todo.create({
    title,
    description,
    complete: false,
  });
  return res.json({ msg: `Task created` });
});

router.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json({ todos });
});

router.put("/update-todo", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload) {
    return res.status(411).json({ msg: `You sent the wrong inputs` });
  }
  const { id } = parsedPayload.data;
  await Todo.updateOne(
    {
      _id: id,
    },
    {
      complete: true,
    }
  );

  return res.json({ msg: `Task marked as completed!` });
});

export default router;
