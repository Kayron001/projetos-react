import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { productData } from '../data/data';
import Chart from '../components/Chart'
import { Publish } from '@material-ui/icons';


const Container = styled.div`
    flex: 5;
    padding: 20px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1``

const Create = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal; 
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
`

const TopLeft = styled.div`
    max-width: 40vw;
    flex: 1;
`

const TopRight = styled.div`
    max-width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    padding: 20px;
    margin: 20px;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
`

const TopInfo = styled.div`
    display: flex;
    align-items: center;
`

const BottomInfo = styled.div`
    margin-top: 10px;
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`

const Name = styled.span`
    font-weight: 600;
`

const InfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`

const InfoKey = styled.span``

const InfoValue = styled.span`
    font-weight: 300;
`

const BottomContainer = styled.div`
    flex: 5;
    padding: 20px;
    margin: 20px;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
`

const ProductForm = styled.div`
    display: flex;
    justify-content: space-between;
`

const FormLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const FormLabel = styled.label`
    margin-bottom: 10px;
    color: gray;
`

const FormInput = styled.input`
    margin-bottom: 10px;
    border: none;
    outline: none;
    padding: 5px;
    border-bottom: 1px solid gray;
    border-radius: 5px;
`

const FormSelect = styled.select`
    margin-bottom: 20px;
    border: none;
    outline: none;
`

const FormOption = styled.option``

const Upload = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`

const EditImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
    margin-left: 20px;
`

const Button = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`

const Product = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Produto</Title>
                <Link to='/newProduct'>
                    <Create>Create</Create>
                </Link>
            </TitleContainer>
            <TopContainer>
                <TopLeft>
                    <Chart data={productData} dataKey='Vendas' title='Histórico de vendas' />
                </TopLeft>
                <TopRight>
                    <TopInfo>
                        <Img atl='Apple Watch' src='https://i.pinimg.com/564x/db/4f/19/db4f19d82fbf6cf70749724e9ec9955c.jpg' />
                        <Name>Apple Watch</Name>
                    </TopInfo>
                    <BottomInfo>
                        <InfoItem>
                            <InfoKey>ID:</InfoKey>
                            <InfoValue>123</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoKey>Vendas:</InfoKey>
                            <InfoValue>532</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoKey>Ativo:</InfoKey>
                            <InfoValue>Sim</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoKey>Estoque:</InfoKey>
                            <InfoValue>Não</InfoValue>
                        </InfoItem>
                    </BottomInfo>
                </TopRight>
            </TopContainer>
            <BottomContainer>
            <ProductForm>
                <FormLeft>
                    <FormLabel>Nome do Produto</FormLabel>
                    <FormInput type='text' placeholder='Apple Watch' ></FormInput>
                    <FormLabel>Em Estoque?</FormLabel>
                    <FormSelect name='inStock' id='idStock'>
                        <FormOption value='Sim'>Sim</FormOption>
                        <FormOption value='Não'>Não</FormOption>
                    </FormSelect>
                    <FormLabel>Ativo?</FormLabel>
                    <FormSelect name='inActive' id='idActive'>
                        <FormOption value='Sim'>Sim</FormOption>
                        <FormOption value='Não'>Não</FormOption>
                    </FormSelect>
                </FormLeft>
                <FormRight>
                    <Upload>
                        <EditImg alt='Imagem do Produto' src='https://i.pinimg.com/564x/db/4f/19/db4f19d82fbf6cf70749724e9ec9955c.jpg' />
                        <FormLabel htmlFor='file'>
                            <Publish style={{ cursor: 'pointer' }} />
                            <FormInput type='file' id='file' style={{ display: 'none' }}></FormInput>
                        </FormLabel>
                    </Upload>
                    <Button>Update</Button>
                </FormRight>
            </ProductForm>
        </BottomContainer>
        </Container>
    )
}

export default Product
