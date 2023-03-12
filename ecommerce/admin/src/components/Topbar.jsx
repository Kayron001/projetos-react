import React from 'react'
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    z-index: 999;
`

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopLeft = styled.div``

const TopRight = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`

const IconContainer = styled.div`
    top: 4px;
    position: relative;
    cursor: pointer;
    margin-right: 12px;
    color: #555;
`

const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    text-align: center;
    top: -5px;
    right: -7px;
    background-color: red;
    color: white;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <TopLeft>
                <Link to='/users' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Logo>Store.Admin</Logo>
                    </Link>
                </TopLeft>
                <TopRight>
                    <IconContainer>
                        <NotificationsNone />
                        <IconBadge>2</IconBadge>
                    </IconContainer>
                    <IconContainer>
                        <Language />
                        <IconBadge>2</IconBadge>
                    </IconContainer>
                    <IconContainer>
                        <Settings />
                    </IconContainer>
                    <Avatar src="https://i.imgur.com/G78zZyr.png" alt="Imagem de Avatar" />
                </TopRight>
            </Wrapper>
        </Container>
    )
}

export default Topbar
