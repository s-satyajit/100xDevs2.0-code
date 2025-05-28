import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

const title = [
  "go to gym",
  "eat breakfast",
  "study DSA",
  "go to class",
  "have lunch",
  "study dev",
];
const description = [
  "go to gym from 7-9",
  "eat breakfast from 9-9:30",
  "study DSA from 9:30-11",
  "go to class from 11-2",
  "have lunch from 2-2:30",
  "study dev from 2:30-6",
];
const todos = title.map((title, idx) => ({
  id: idx + 1,
  title,
  description: description[idx],
  completed: false,
}));

app.get("/todos", (req, res) => {
  const { id } = req.query;
  !id && res.json({ error: `Invalid id parameter` });
  const parsedId = parseInt(id);
  isNaN(parsedId) && res.status(404).json({ error: `Invalid id parameter` });
  const todo = todos.find((x) => x.id == parsedId);
  !todo && res.status(404).json({ error: `No todo with id ${parsedId}` });
  return res.json({ todo });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
