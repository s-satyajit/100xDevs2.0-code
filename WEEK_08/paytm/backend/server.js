import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoutes.js'
import accountRouter from './routes/accountRoutes.js'
import authRouter from './routes/authRoutes.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config({path: "./config/.env"})
const PORT = process.env.PORT

const initialize = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log(`MongoDB connected successfully!`)
    } catch (e) {
        console.error(`Error connected to database, ${e.message}`)
    } finally {
        app.use('/api/v1/user', userRouter)
        app.use('/api/v1/account', accountRouter)
        app.use('/api/v1/auth', authRouter)

        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    }
}
initialize()