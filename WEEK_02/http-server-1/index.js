const express = require('express')
const port = 3000

const app = express()

// create a todo app that let users store todos on the server
// try to create a http server from scratch in c
// create a http server in rust using active-web
// create an http server in golang using the gurrila framework
// spring boot java

app.get('/', (req, res) => {
  res(`Hello World`)
})

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})