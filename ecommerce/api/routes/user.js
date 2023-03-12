import CryptoJS from 'crypto-js'
import express from 'express'
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middlewares/verifyToken.js'
import User from '../models/user.js'

const router = express.Router()

// update
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_HASH_KEY).toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// delete
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)

        res.status(200).json('Usuário deletado com sucesso!')
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get user
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc

        res.status(200).json(others)
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get all users
router.get('/users', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
        res.status(200).json(users)
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

// get user stats
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } }, },
            { $project: { month: { $month: '$createdAt' } } },
            { $group: { _id: '$month', total: { $sum: 1 } } }
        ])
        res.status(200).json(data)
    } catch (error) {
        request.status(500).json(error)
        console.log(error)
    }
})

export default router