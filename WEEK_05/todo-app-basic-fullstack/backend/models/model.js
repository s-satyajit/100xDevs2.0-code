import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  complete: { type: String, required: true },
});

const Todo = model("todos", todoSchema);

export { Todo };
