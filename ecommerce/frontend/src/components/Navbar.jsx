import { Badge } from '@material-ui/core'
import { mobile } from '../responsive'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })};
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0' })}
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Input = styled.input`
  border: none;
  outline: 0;
  ${mobile({ width: '50px' })};
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, JustifyContent: 'center' })};
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '14px', margin: "5px 10px 5px 5px" })};
`

const Navbar = () => {

  const quantity = useSelector(state => state.quantity)

  return (
    <Container>
      <Wrapper>
        <Left><Language>PT</Language>
          <SearchContainer>
            <Input placeholder='Buscar' />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><Logo>Store.</Logo></Center>
        <Right>
          <MenuItem>Nova Conta</MenuItem>
          <MenuItem>Entrar</MenuItem>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary' style={{ marginRight: '10px' }}>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
