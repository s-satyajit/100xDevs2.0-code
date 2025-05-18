import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const TODOS = [
  { id: 1, title: "Go to gym", description: "Go to gym from 7-9" },
  { id: 2, title: "Study DSA", description: "Study DSA from 9-11" },
  { id: 3, title: "Go to class", description: "Attend class from 11-2" },
  { id: 4, title: "Do remote job", description: "Do remote job from 2-9" },
  { id: 5, title: "Fresh mind", description: "Fresh mind from 9-10" },
];

// app.use("/todo/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const todo = TODOS.find((t) => t.id === id);
//   if (!todo) res.status(404).json({ msg: `Todo not found` });
//   res.json(todo);
// });

app.use("/todo", (req, res) => {
  const id = parseInt(req.query.id)
  const todo = TODOS.find((t) => t.id === id)
  if(!todo) res.status(404).json({msg: `Todo not found`})
  res.json(todo)
})

app.listen(8080, () => {
  console.log(`Server running on 8080`);
});
