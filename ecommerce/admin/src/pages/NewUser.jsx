import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 5;
`

const Title = styled.h1`

`

const NewUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const FormItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`

const FormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: gray;
`

const FormInput = styled.input`
    height: 20px;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    border-radius: 5px;
`

const FormButton = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
    margin-left: 200px;
`

const NewUser = () => {
    return (
        <Container>
            <Title>Novo Usuário</Title>
            <NewUserForm>
                <FormItem>
                    <FormLabel>Nome de Usuário:</FormLabel>
                    <FormInput type='text' placeholder='Ex.: jon879' />
                </FormItem>
                <FormItem>
                    <FormLabel>Nome Completo:</FormLabel>
                    <FormInput type='text' placeholder='Ex.: João da silva' />
                </FormItem>
                <FormItem>
                    <FormLabel>E-mail:</FormLabel>
                    <FormInput type='email' placeholder='Ex.: joao@gmail.com' />
                </FormItem>
                <FormItem>
                    <FormLabel>Senha:</FormLabel>
                    <FormInput type='password' placeholder='Sua senha aqui' />
                </FormItem>
                <FormItem>
                    <FormLabel>Telefone:</FormLabel>
                    <FormInput type='password' placeholder='Ex.: +5511911223344' />
                </FormItem>
                <FormItem>
                    <FormLabel>Endereço:</FormLabel>
                    <FormInput type='password' placeholder='Ex.: São Paulo | BR' />
                </FormItem>
                <FormItem>
                    <FormLabel>Endereço:</FormLabel>
                    <FormInput type='password' placeholder='Ex.: São Paulo | BR' />
                </FormItem>
                <FormButton>Criar Novo Usuário</FormButton>
            </NewUserForm>
        </Container>
    )
}

export default NewUser
