import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.get("/notification", (req, res) => {
  const data = {
    network: Math.floor(Math.random() * 1000),
    jobs: Math.floor(Math.random() * 10),
    messaging: Math.floor(Math.random() * 10),
    notification: Math.floor(Math.random() * 10),
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
