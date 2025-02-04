import express from "express";
const app = express();

app.use(express.json());

app.post("/health-check", (req, res) => {
  const kidneys = req.body.kidneys;

  if (!kidneys) {
    res.json({
      msg: "Wrong inputs",
    });
  } else {
    const kidneyLength = kidneys.length;
    res.send(`You have ${kidneyLength} kidneys.`);
  }
});

app.listen(3000);
