import express from 'express'
const app = express()

const PORT = 3000;

const ticketChecker = (req, res, next) => {
    const ticket = req.query.ticketquery;

    if(ticket == 'free')
        next()
    res.status(403).send('Access denied')
}

app.use(ticketChecker)

app.get('/ride1', (req, res) => {
    res.send(`You rode the first ride!`)
})

app.get('/ride2', (req, res) => {
    res.send(`You rode the second ride!`)
})

app.get('/ride3', (req, res) => {
    res.send(`You rode the third ride!`)
})

app.listen(PORT || 3000, () => {
    console.log(`Server running on port ${PORT}`)
})