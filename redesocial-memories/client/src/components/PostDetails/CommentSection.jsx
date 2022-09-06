import React, { useState, useRef } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import makeStyles from './styles'
import { commentPost } from '../../actions/posts'

const CommentSection = ({ post }) => {
    const classes = makeStyles()
    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState('')
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()
    const commentsRef = useRef()

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`
        const newComments = await dispatch(commentPost(finalComment, post._id))
        setComments(newComments)
        setComment('')

        commentsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                {user?.result?.name && (
                    <div style={{ width: '70%' }}>
                        <Typography gutterBottom variant='h6'>Escreva seu Comentário</Typography>
                        <TextField style={{ width: '140%' }} rows={4} variant='outlined' label='Seu Comentário Aqui' multiline value={comment} onChange={(e) => setComment(e.target.value)} />
                        <Button style={{ marginTop: '10px', width: '140%' }} fullWidth disable={!comment} variant='contained' color='primary' onClick={handleClick}>Comentar</Button>
                    </div>)}
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>Comentários:</Typography>
                    {comments?.map((c, i) => (
                        <Typography key={i} gutterBottom variant='subtitle1'>
                            <strong>{c.split(': ')[0]}</strong>:
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={comments.Ref} />
                </div>
            </div>
        </div>
    )
}

export default CommentSection
