import express from 'express'
import { addVideo, deleteVideo, getVideo, updateVideo, updateViews, trendVideos, randomVideos, subscribeVideos, getByTag, search } from '../controllers/video.js'
import { verifyToken } from '../middlewares/verifyToken.js'


const router = express.Router()

// create video
router.post('/', verifyToken, addVideo)

// update video
router.put('/:id', verifyToken, updateVideo)

// delete video
router.delete('/:id', verifyToken, deleteVideo)

// get video
router.get('/find/:id', getVideo)

// views video
router.put('/views/:id', updateViews)

// trend video
router.get('/trends', trendVideos)

// random video
router.get('/random', randomVideos)

// subscribe channels
router.get('/sub', verifyToken, subscribeVideos)

// tags videos
router.get('/tags', getByTag)

// search videos
router.get('/search', search)


export default router