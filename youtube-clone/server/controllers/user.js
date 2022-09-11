import { createError } from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js"

export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.status(200).json(updatedUser)
        } catch (error) {
            next(err)
        }
        res.status(200).json
    } else {
        next(createError(403, "Você pode atualizar apenas sua própria conta"))
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('Usuário foi deletado com sucesso')
        } catch (error) {
            next(err)
        }
    } else {
        next(createError(403, "Você pode deletar apenas sua própria conta"))
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, { $push: { subscribedUsers: req.params.id } })
        await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: 1 } })
        res.status(200).json('Inscrito com sucesso!')
    } catch (error) {
        next(error)
    }
}

export const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, { $pull: { subscribedUsers: req.params.id } })
        await User.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } })
        res.status(200).json('Desinscrito com sucesso!')
    } catch (error) {
        next(error)
    }
}

export const like = async (req, res, next) => {
    const id = req.user.id
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId, { $addToset: { likes: id }, $pull: { dislikes: id } })
        res.status(200).json('Você curtiu o Vídeo')
    } catch (error) {
        next(error)
    }
}

export const dislike = async (req, res, next) => {
    const id = req.user.id
    const videoId = req.params.videoId
    try {
        await Video.findByIdAndUpdate(videoId, { $addToset: { dislikes: id }, $pull: { likes: id } })
        res.status(200).json('Você descurtiu o Vídeo')
    } catch (error) {
        next(error)
    }
}
