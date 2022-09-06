import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAlt'
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './styles'
import moment from 'moment'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))
    const [likes, setLikes] = useState(post?.likes)
    const userID = user?.result?._id
    const hasLikedPost = post.likes.find((like) => like === userID)

    const handleLike = async () => {
        dispatch(likePost(post._id))
        
        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userID))
        } else {
            setLikes([...post.likes, userID])
        }
    }

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userID)
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `Você e ${likes.length - 1}` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => {
        history.push(`/posts/${post._id}`)
    }

    return (
        <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
                <Typography variant='h6'>{post.name}</Typography>
            </div>
            {(user?.result?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button className={classes.edit} style={{ color: 'white' }} size='small' onClick={(e) => { e.stopPropagation(); setCurrentId(post._id) }}>
                        <BorderColorIcon size="small" />
                    </Button>
                </div>
            )}
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.title.split(' ').splice(0, 4).join(' ')}...</Typography>
            <CardContent className={classes.message}>
                <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 15).join(' ')}...</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?._id === post?.creator) && (
                    <Button size='small' color='primary' onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize='small' />
                        &nbsp; Apagar
                    </Button>
                )}
            </CardActions>
            <Button variant='contained' color='primary' classesName={classes.cardAction} onClick={openPost} >Visualizar</Button>
        </Card>
    )
}

export default Post
