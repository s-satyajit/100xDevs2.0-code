import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

const value = {
    name: 'Satyajit',
    accountNumber: 123123123,
}

const token = jwt.sign(value, "seccrect")
console.log(token)

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2F0eWFqaXQiLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTc0MzU4MzE1OX0.bRbqTicWi0pf7pcLTZWm8r9FeAmvJyL99JEbh1YEAsk", "seccrect")
console.log(verifiedValue)