import express from "express"
const app = express();

let numberOfRequests = 0;

const calculateRequest = (req, res, next) => {
    numberOfRequests++
    console.log(numberOfRequests)
    next()
}

// app.use(express.json())
app.use(calculateRequest)

app.get("/calculate", (req, res) => {
    // console.log(req.body)
    res.json({
        msg: "hi there"
    })
})

app.listen(3000)