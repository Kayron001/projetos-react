import { Facebook, Instagram, Twitter, Pinterest, Map, Phone, Mail } from '@material-ui/icons'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })};
`

const Left = styled.div`
    flex: 1;  
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;   
    padding: 20px;
    ${mobile({ padding: '0 20px 0 20px ' })};
`

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({ marginBottom: '10px' })};
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    ${mobile({ marginBottom: '3px' })};
`

const Right = styled.div`
    flex: 1;   
    padding: 20px;
    ${mobile({ backgroundColor: '#e9e9e9' })};
`

const ContactItem = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    ${mobile({ margin: '5px' })};
`

const Payment = styled.img`
    width: 70%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Store.</Logo>
                <Desc>
                    Existem muitas variações de passagens de Lorem Ipsum disponíveis, mas
                    a maioria sofreu alteração de alguma forma, por ter adicionado
                    humor, ou palavras aleatórias que não parecem nem um pouco críveis.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Carrinho</ListItem>
                    <ListItem>Moda Masculina</ListItem>
                    <ListItem>Moda Feminina</ListItem>
                    <ListItem>Acessorios</ListItem>
                    <ListItem>Minha Conta</ListItem>
                    <ListItem>Rastrear um Pedido</ListItem>
                    <ListItem>Favoritos</ListItem>
                    <ListItem>Termos de Uso</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contato</Title>
                <ContactItem><Map /> &nbsp; Rua Endereço Completo, 555, GO - Brasil</ContactItem>
                <ContactItem><Phone /> &nbsp; +55 11 9 5555 5555</ContactItem>
                <ContactItem><Mail /> &nbsp; contatoemailcompleto@kimera.dev</ContactItem>
                <Payment src="https://i.imgur.com/HFYPdUi.png" />
            </Right>
        </Container>
    )
}

export default Footer
