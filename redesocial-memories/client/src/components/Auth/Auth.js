import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import React, { useState } from 'react'
import LockoutlinedIcon from '@material-ui/icons/LockOutlined'
// import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import makeStyles from './styles'
import Input from './Input'
// import Icon from './icon'
// import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import { signup, signin } from '../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = makeStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setisSignup] = useState(false)
    const [form, setForm] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleShowPassword = () => setShowPassword(!showPassword)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            dispatch(signup(form, history))
        } else {
            dispatch(signin(form, history))
        }
    }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const switchMode = () => {
        setForm(initialState)
        setisSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    // const googleSuccess = async (res) => {
    //     const result = jwt_decode(res.credential)

    //     try {
    //         dispatch({ type: 'AUTH', data: { result } })
    //         history.push('/')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const googleFailure = () => { }

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockoutlinedIcon />
                </Avatar>
                <Typography component="h1" variant='h5'>{isSignup ? 'Criar Conta' : 'Entrar'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>{isSignup && (<>
                        <Input name='firstName' label='Nome' handleChange={handleChange} autoFocus half />
                        <Input name='lastName' label='Sobrenome' handleChange={handleChange} half />
                    </>)}
                        <Input name='email' label='E-mail' handleChange={handleChange} type='email' />
                        <Input name='password' label='Senha' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name='confirmPassword' label='Confirme a Senha' type='password' handleChange={handleChange} />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignup ? 'Criar Conta' : 'Entrar'}
                    </Button>
                    {/* <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} cookiePolicy='single_host_origin' render={(renderProps) => (
                        <Button onClick={renderProps.onclick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>
                        </Button>
                    )} /> */}
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Tem uma Conta? Entrar' : 'Não tem uma conta? Criar'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
