import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 5;
`

const Title = styled.h1`

`

const NewProductForm = styled.form`
    display: flex;
    flex-direction: column;
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

const FormSelect = styled.select`
    margin-bottom: 20px;
    border: none;
    outline: none;
`

const FormOption = styled.option`

`

const NewUser = () => {
    return (
        <Container>
            <Title>Novo Produto</Title>
            <NewProductForm>
                <FormItem>
                    <FormLabel>Imagem:</FormLabel>
                    <FormInput type='file' />
                </FormItem>
                <FormItem>
                    <FormLabel>Nome do Produto:</FormLabel>
                    <FormInput type='text' />
                </FormItem>
                <FormItem>
                    <FormLabel>Estoque:</FormLabel>
                    <FormInput type='number' min='0' />
                </FormItem>
                <FormItem>
                    <FormLabel>Ativo:</FormLabel>
                    <FormSelect name='inActive' id='idActive'>
                        <FormOption value='Sim'>Sim</FormOption>
                        <FormOption value='Não'>Não</FormOption>
                    </FormSelect>
                </FormItem>
                <FormButton>Criar Novo Produto</FormButton>
            </NewProductForm>
        </Container>
    )
}

export default NewUser
