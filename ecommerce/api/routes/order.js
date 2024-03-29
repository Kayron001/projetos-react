import express from 'express'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middlewares/verifyToken.js'
import Order from '../models/Order.js'

const router = express.Router()

// create
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// update 
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// delete
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)

        res.status(200).json('Pedido deletado com sucesso!')
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get user orders
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find(req.params.id)

        res.status(200).json(orders)
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get all
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        request.statusCode(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// get monthly income
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            { $project: { month: { $month: '$createdAt' }, sales: '$amount' } },
            { $group: { _id: '$month', total: { $sum: '$sales' } } }
        ])
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

export default router