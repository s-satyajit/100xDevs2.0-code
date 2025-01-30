// User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
// User should send a username and password in headers

import express from "express"
const app = express()

// app.get("/health-checkup", (req, res) => {
    
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username != "satyajit" || password != "pass") {
//         res.status(403).json({
//             "msg": "User not found!"
//         })
//         return
//     }

//     if(kidneyId != 1 && kidneyId != 2) {
//         res.status(411).json({
//             "msg": "Wrong inputs!"
//         })
//         return
//     }

//     res.send("Your heart is healthy!")

// })

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })

// ------------------------------------------  we can also write


const kidneyValidator = (kidney) => {
    if(kidney != 1 && kidney != 2) {
        return false
    }
    return true
}

const userValidator = (username, password) => {
    if(username != "satyajit" && password != "pass") {
        return false;
    }
    return true;
}

app.get("/health-checkup", (req, res) => {

    const {username, password} = req.headers;

    if(!userValidator(username, password)) {
        res.status(403).json({
            "msg": "User doesn't exist"
        })
        return
    }

    if(kidneyValidator(req.query.kidneyId)) {
        res.status(411).json({
            "msg": "Wrong input"
        })
        return
    }

    res.send("Your kidney is healthy!")
})