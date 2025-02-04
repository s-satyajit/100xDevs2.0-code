import express from "express"
const app = express()

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`You have ${kidneysLength} kidneys.`)
})

app.use((error, req, res, next) => {
    console.error(error) // Log the error for debugging
    res.status(500).send('An internal server error occurred.')
})

app.listen(3000)