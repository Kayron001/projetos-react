import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url("https://i.imgur.com/kc5jycr.png") 40% 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ background: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url("https://i.imgur.com/kc5jycr.png") 60% 8%' })};
`

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
    outline: 0;
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`

const Button = styled.button`
    width: 40%;
    font-size: 19px;
    border: none;
    padding: 15px 20px;
    background-color: rgb(0, 10, 146);
    color: white;
    cursor: pointer;
    ${mobile({ width: '50%', padding: '7px' })};
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Novo Usuário</Title>
        <Form>
            <Input placeholder='Nome'></Input>
            <Input placeholder='Sobrenome'></Input>
            <Input placeholder='Nome de Usuário'></Input>
            <Input placeholder='E-mail'></Input>
            <Input placeholder='Senha'></Input>
            <Input placeholder='Confirme a Senha'></Input>
            <Agreement>Ao criar uma conta, concordo com o uso dos meus dados pessoais
            dados de acordo com a <b>POLÍTICA DE PRIVACIDADE</b></Agreement>
            <Button>Criar Conta</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
