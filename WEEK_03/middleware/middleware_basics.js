import express from "express"
const app = express()

app.listen(3000)

const userMiddleware = (req, res, next) => {
    const username = req.headers.username
    const password = req.headers.password

    if(username != "satyajit" || password != "pass") {
        res.status(403).json({
            msg: "Incorrect input!"
        })
    } else
        next()
}

const kidneyMiddleware = (req, res, next) => {
    const kidney = req.query.kidney
    const kidneyNumber = Number(kidney)
    if(kidneyNumber != 1 && kidneyNumber != 2) {
        res.status(403).json({
            msg: "Incorrect input!"
        })
    } else 
        next()
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your kidney is healthy")
})

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("User health is healthy")
})

app.get("/healthy-chekcup", userMiddleware, (req, res) => {
    res.send("Your heart is healthy")
})


let numberOfRequests = 0;

const calculateRequest = (req, res, next) => {
    numberOfRequests++
    console.log(numberOfRequests)
}

app.get("server-requests", calculateRequest, (req, res) => {
    
})
