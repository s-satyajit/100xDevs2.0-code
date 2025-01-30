import express from "express"
const app = express()

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length
    console.log(`Your kidney length is ${kidneyLength}`)
})

app.listen(3000)