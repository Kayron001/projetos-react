import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab'
import makeStyles from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts'

const Paginate = ({ page }) => {
  const { numberOfPages } = useSelector((state) => state.posts)
  const classes = makeStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ page])

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant='outlined'
      color='primary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
    />
  )
}

export default Paginate
