import express from 'express'
import User from '../models/user.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

const router = express.Router()

// register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_HASH_KEY).toString(),
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

// login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json('Usuário ou senha invalidos')

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_HASH_KEY)
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        originalPassword !== hashedPassword && res.status(401).json('Usuário ou senha invalidos')

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '3d' })

        const { password, ...others } = user._doc

        res.statusCode(200).json({...others, accessToken})
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

export default router