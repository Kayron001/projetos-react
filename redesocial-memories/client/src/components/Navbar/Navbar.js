import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import makeStyles from './styles'
import { Link, useHistory, useLocation } from 'react-router-dom'
import memoriesLogo from '../../images/memoriesLogo.png'
import memoriesText from '../../images/memoriesText.png'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

const Navbar = () => {
    const classes = makeStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(0)
    }

    useEffect(() => {
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))

        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <AppBar className={classes.appBar} position='static' color='inherit' >
            <Link to='/' className={classes.brandContainer}>
                <img className={classes.image} src={memoriesText} alt='Marca memórias' height='35px' />
                <img className={classes.image} src={memoriesLogo} alt='Logo memórias' height='35px' />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Deslogar</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Fazer Login</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar


