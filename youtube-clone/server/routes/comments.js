import express from 'express'
import { addComment, deleteComment, getComments } from '../controllers/comment.js'
import { verifyToken } from '../middlewares/verifyToken.js'


const router = express.Router()

// add comment
router.post('/', verifyToken, addComment)

// delete comment
router.delete('/:id', verifyToken, deleteComment)

// get comments
router.get('/:videiId', getComments)


export default router