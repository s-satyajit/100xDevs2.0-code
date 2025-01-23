const express = require("express");
const app = express();
app.listen(3000);

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys.healthy)
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
    johnKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for(let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys.healthy = true;
  }
  res.json({})
})


// removing all the unhealthy kidneys
app.delete("/", (req, res) => {
  let newKidneys = []
  for(let i = 0; i < users[0].kidneys.length; i++) {
    if(users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({msg: "done"})
})