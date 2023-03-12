import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import productRouter from './routes/product.js'
import cartRouter from './routes/cart.js'
import orderRouter from './routes/order.js'

const app = express()
dotenv.config()


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

app.use(express.json())

app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', userRouter)
app.use('/api', productRouter)
app.use('/api', cartRouter)
app.use('/api', orderRouter)


const port = process.env.PORT || 5000
app.listen(port, () => console.log('listening on port ' + port))