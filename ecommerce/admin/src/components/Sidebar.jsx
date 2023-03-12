import React from 'react'
import styled from "styled-components";
import { Home, Timeline, MonetizationOn, Store, BarChart, Person, Mail, DynamicFeed, ChatBubble, Work, Report } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(245, 251, 255);
    position: sticky;
    top: 50px;
`

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`

const SidebarMenu = styled.div`
    margin-bottom: 10px;
`

const Title = styled.h3`
    font-size: 13px;
    color: rgb(91, 91, 91);
`

const List = styled.ul`
    list-style: none;
    padding: 5px;
`

const ListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover{
        background-color: rgb(91, 91, 91);
        color: white;
    }
`

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <SidebarMenu>
                    <Title>Dashboard</Title>
                    <List>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem>
                                <Home style={{ fontSize: '20px' }} /> &nbsp; Home
                            </ListItem>
                        </Link>
                        <ListItem>
                            <Timeline style={{ fontSize: '20px' }} /> &nbsp; Análises
                        </ListItem>
                        <ListItem>
                            <MonetizationOn style={{ fontSize: '20px' }} /> &nbsp; Vendas
                        </ListItem>
                    </List>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Atalhos</Title>
                    <List>
                        <Link to='/users' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem>
                                <Person style={{ fontSize: '20px' }} /> &nbsp; Usuários
                            </ListItem>
                        </Link>
                        <Link to='/products' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem>
                                <Store style={{ fontSize: '20px' }} /> &nbsp; Produtos
                            </ListItem>
                        </Link>
                        <ListItem>
                            <BarChart style={{ fontSize: '20px' }} /> &nbsp; Transações
                        </ListItem>
                    </List>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Notificações</Title>
                    <List>
                        <ListItem>
                            <Mail style={{ fontSize: '20px' }} /> &nbsp; Emails
                        </ListItem>
                        <ListItem>
                            <DynamicFeed style={{ fontSize: '20px' }} /> &nbsp; Avaliações
                        </ListItem>
                        <ListItem>
                            <ChatBubble style={{ fontSize: '20px' }} /> &nbsp; Mensagens
                        </ListItem>
                    </List>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>Staff</Title>
                    <List>
                        <ListItem>
                            <Work style={{ fontSize: '20px' }} /> &nbsp; Administração
                        </ListItem>
                        <ListItem>
                            <Timeline style={{ fontSize: '20px' }} /> &nbsp; Análises
                        </ListItem>
                        <ListItem>
                            <Report style={{ fontSize: '20px' }} /> &nbsp; Reclamações
                        </ListItem>
                    </List>
                </SidebarMenu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
