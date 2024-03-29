import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container =styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({ height: '19vh' })};
`

const Title =styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    ${mobile({ fontSize: '24px', marginBottom: '10px' })};
`

const Desc =styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: 'center', fontSize: '16px', marginBottom: '10px' })};
`

const InputContainer =styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: '80%' })};
`

const Input =styled.input`
    outline: 0;
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button =styled.button`
    flex: 1;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    color: black;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>A moda mais perto de você</Title>
            <Desc>Fique por dentro de todos os lançamentos</Desc>
            <InputContainer>
                <Input placeholder="Seu melhor e-mail" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
