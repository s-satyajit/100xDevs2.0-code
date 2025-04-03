import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = principal * rate * time;
  const total = principal + interest;
//   res.send({
//     interest,
//     total,
//   });
res.send({
    interest: interest,
    total: total
})
});

app.listen(8080, () => {
    console.log(`Server running on port ${8080}`)
});
