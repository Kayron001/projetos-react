import Comment from "../models/Comment.js"
import Video from "../models/Video.js"
import { createError } from "../error.js"

export const addComment = async (req, res, next) => {
    const newComment = new Comment({ ...req.body, userId: req.user.id })
    try {
        const savedComment = await newComment.save()
        res.status(200).send(savedComment)
    } catch (error) {
        next(error)
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(res.params.id)
        const video = await Video.findById(res.params.id)

        if (req.userId === comment.userId || req.userId === video.userId) {
            await Comment.findOneAndDelete(req.params.id)
            res.status(200).send('Comentário deletado com sucesso!')
        } else {
            next(createError(403, 'Você não pode deletar este comentário'))
        }
    } catch (error) {
        next(error)
    }
}

export const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId })
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
}