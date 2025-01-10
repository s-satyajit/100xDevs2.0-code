const express = require('express')
const port = 3000

const app = express()


// create a todo app that let users store todos on the server
// try to create a http server from scratch in c
// create a http server in rust using active-web
// create an http server in golang using the gurrila framework
// spring boot java

app.get('/', (req, res) => {
  res.send(`Hello World!`)
})

app.get('/route-handler', (req, res) => {
  res.json({
    name: "Satyajit",
    age: 23
  })
})

app.post('/conversations', (req, res) => {
  console.log(req.headers)
  res.send({
    msg: "2 + 2 = 4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})

// what is fs?
// fs is a library that gives you high level constructs to do filesystm stuff (read from a file, write to a file...)

// what is express?
// express is a library that gives you a high level constructs to create http servers

class NewClass {
  constructor () {

  }
}

const obj = new NewClass()
console.log(typeof obj)