import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a + b
    res.send(sum.toString())
})

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
})