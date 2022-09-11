import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loginFailure, loginStart, loginSuccess } from '../reducers/userSlice'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`

const Title = styled.h1`
    font-size: 24px;
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`

const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px;
    outline: none;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: ${({ theme }) => theme.text};
`

const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.textSoft};
`

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 10px;
    color: ${({ theme }) => theme.soft};
`

const Links = styled.div`
    display: flex;
    margin-left: 105px;
`

const Link = styled.div`
    margin-left: 30px;
`


const SignIn = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const res = await axios.post('/auth/signin', { name, password })
            dispatch(loginSuccess(res.data))
        } catch (error) {
            dispatch(loginFailure())
        }
    }

    const signinWithGoogle = async () => {
        dispatch(loginStart())
        signInWithPopup(auth, provider)
            .then((result => {
                axios.post('/auth/google', {
                    name: result.user.displayName,
                    email: result.user.email,
                    img: result.user.photoURL,
                })
                    .then((res) => {
                        dispatch(loginSuccess(res.data))
                    })
            }).cath(err => dispatch(loginFailure)))
    }

    return (
        <Container>
            <Wrapper>
                <Title>Entrar</Title>
                <SubTitle>Faça Login para melhor experiência</SubTitle>
                <Input placeholder="Nome de Usuário" onChange={e => setName(e.target.value)} />
                <Input type='password' placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Login</Button>
                <Title>Ainda não tem uma conta?</Title>
                <Button onClick={signinWithGoogle}>Login com conta Google</Button>
                <Title>Ou</Title>
                <Input placeholder="Nome de Usuário" onChange={e => setName(e.target.value)} />
                <Input placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                <Input type='password' placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                <Button>Criar Conta</Button>
            </Wrapper>
            <More>Portugues (BR)
                <Links>
                    <Link>Ajuda</Link>
                    <Link>Privacidade</Link>
                    <Link>Termos de uso</Link>
                </Links>
            </More>
        </Container>
    )
}

export default SignIn
