import express from 'express'
import router from './auth'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KET)

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'brl'
    }, (stripeError, stripeResponse) => {
        if (stripeError) {
            res.status(500).json(error)
        } else {
            res.status(200).json(stripeResponse)
        }
    })
})

export default router