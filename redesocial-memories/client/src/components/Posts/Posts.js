import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts)
    const classes = useStyles()

    if(!posts.length && !isLoading) return 'Não encontrei nenhuma memória, atualize a página' 

    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spancing={3}>
                {posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={3} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
