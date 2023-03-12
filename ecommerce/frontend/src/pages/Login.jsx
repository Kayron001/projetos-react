import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url("https://i.imgur.com/9XyE4dB.png") 40% 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ background: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url("https://i.imgur.com/9XyE4dB.png") 18% 8%' })};
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    ${mobile({ width: '75%' })};
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    outline: 0;
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    font-size: 19px;
    border: none;
    padding: 7px 20px;
    background-color: rgb(0, 10, 146);
    color: white;
    cursor: pointer;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Entrar</Title>
                <Form>
                    <Input placeholder='E-mail'></Input>
                    <Input placeholder='Senha'></Input>
                    <Button>Entrar</Button>
                    <Link>Esqueceu a Senha?</Link>
                    <Link>Criar uma nova conta</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
