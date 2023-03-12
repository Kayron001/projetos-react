import React from 'react'
import styled from 'styled-components'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish, } from "@material-ui/icons";
import { Link } from 'react-router-dom'


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

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const UserView = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
`

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`

const UserViewTop = styled.div`
    display: flex;
    align-items: center;
`

const UserViewName = styled.span`
    font-weight: 600;
`

const UserViewJob = styled.span`
    font-weight: 300;
`

const UserViewTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const UserViewBottom = styled.div`
    margin-top: 20px;
`

const UserViewImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const BottomTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175,170,170);
`

const AccountInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #444;
`

const AccountInfo = styled.span`
    margin-left: 10px;
`

const UpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const FormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const FormLeft = styled.div`

`

const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const UpdateLabel = styled.label`
    font-size: 14px;
    margin-top: 10px;
`

const UpdateInput = styled.input`
    margin-top: 5px;
    border: none;
    outline: none;
    width: 250px;
    border-bottom: 1px solid gray;
    height: 20px;
    border-radius: 5px;
`

const UpdateUpdload = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
`

const UpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius:10px;
    object-fit: cover;
    margin-right: 20px;
    margin-left: 20px;
`

const UpdateButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`


const User = () => {
    return (
        <Container>
            <TitleContainer>
                <Title>Editar Usuário</Title>
                <Link to='/newUser'>
                    <Create>Create</Create>
                </Link>
            </TitleContainer>
            <UserContainer>
                <UserView>
                    <UserViewTop>
                        <UserViewImg src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png' />
                        <UserViewTopTitle>
                            <UserViewName>Jon Snow</UserViewName>
                            <UserViewJob>Engenheiro de Software</UserViewJob>
                        </UserViewTopTitle>
                    </UserViewTop>
                    <UserViewBottom>
                        <BottomTitle>Informações de Conta</BottomTitle>
                        <AccountInfoContainer>
                            <PermIdentity style={{ fontSize: '18px' }} />
                            <AccountInfo>jonzinho7864</AccountInfo>
                        </AccountInfoContainer>
                        <AccountInfoContainer>
                            <CalendarToday style={{ fontSize: '18px' }} />
                            <AccountInfo>04.11.1993</AccountInfo>
                        </AccountInfoContainer>
                        <BottomTitle>Informações de Contato</BottomTitle>
                        <AccountInfoContainer>
                            <PhoneAndroid style={{ fontSize: '18px' }} />
                            <AccountInfo>+5511911223344</AccountInfo>
                        </AccountInfoContainer>
                        <AccountInfoContainer>
                            <MailOutline style={{ fontSize: '18px' }} />
                            <AccountInfo>jonsnow@gmail.com</AccountInfo>
                        </AccountInfoContainer>
                        <AccountInfoContainer>
                            <LocationSearching style={{ fontSize: '18px' }} />
                            <AccountInfo>São Paulo | BR</AccountInfo>
                        </AccountInfoContainer>
                    </UserViewBottom>
                </UserView>
                <UserUpdate>
                    <UpdateTitle>Editar</UpdateTitle>
                    <Form>
                        <FormLeft>
                            <UpdateItem>
                                <UpdateLabel>Nome de Usuário:</UpdateLabel>
                                <UpdateInput type='text' placeholder='jonzinho7864' />
                            </UpdateItem>
                            <UpdateItem>
                                <UpdateLabel>Nome Completo:</UpdateLabel>
                                <UpdateInput type='text' placeholder='Jon Snow' />
                            </UpdateItem>
                            <UpdateItem>
                                <UpdateLabel>E-mail:</UpdateLabel>
                                <UpdateInput type='text' placeholder='jondnow@gmail.com' />
                            </UpdateItem>
                            <UpdateItem>
                                <UpdateLabel>Telefone:</UpdateLabel>
                                <UpdateInput type='text' placeholder='+5511911223344' />
                            </UpdateItem>
                            <UpdateItem>
                                <UpdateLabel>Endereço:</UpdateLabel>
                                <UpdateInput type='text' placeholder='+5511911223344' />
                            </UpdateItem>
                        </FormLeft>
                        <FormRight>
                            <UpdateUpdload>
                                <UpdateImg src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png' />
                                <UpdateLabel htmlFor='file'>
                                    <Publish style={{ cursor: 'pointer' }} />
                                    <UpdateInput type='file' id='file' style={{ display: 'none' }} />
                                </UpdateLabel>
                            </UpdateUpdload>
                            <UpdateButton>Salvar Alterações</UpdateButton>
                        </FormRight>
                    </Form>
                </UserUpdate>
            </UserContainer>
        </Container>
    )
}

export default User
