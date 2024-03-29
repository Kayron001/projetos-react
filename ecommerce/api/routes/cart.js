import CryptoJS from 'crypto-js'
import express, { request } from 'express'
import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middlewares/verifyToken.js'
import Cart from '../models/Cart.js'

const router = express.Router()

// create
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// update 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// delete
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)

        res.status(200).json('Produto deletado com sucesso!')
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get user cart
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const carts = await Cart.findOne(req.params.id)

        res.status(200).json(carts)
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get all
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        request.statusCode(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

export default router