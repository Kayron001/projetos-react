import { Add, Remove } from "@material-ui/icons"
import { useSelector } from "react-redux"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import StripeCheckout from 'react-stripe-checkout'

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })};
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" ? "none" : '1px solid black'};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({ display: 'none' })};
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })};
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({ flexDirection: 'column' })};
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductID = styled.span`

`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: '5px 15px' })};

`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '0px' })};
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "800"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
`


const Cart = () => {

    const cart = useSelector(state => state.cart)

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Seus produtos</Title>
                <Top>
                    <TopButton>Continuar comprando</TopButton>
                    <TopTexts>
                        <TopText>Carrinho de Compra(2)</TopText>
                        <TopText>Lista de Favoritos(25)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Finalizar Compra</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.product.map(product => (<Product>
                            <ProductDetail>
                                <Image src={product.img} />
                                <Details>
                                    <ProductName><b>Produto:</b> {product.title}</ProductName>
                                    <ProductID><b>Código:</b> {product._id}</ProductID>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Tamanho:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice> R$ {product.price*product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>))}
                        <Hr />
                        {/* <Product>
                            <ProductDetail>
                                <Image src="https://i.imgur.com/UyzoOQg.png" />
                                <Details>
                                    <ProductName><b>Produto:</b> Camisa Básica</ProductName>
                                    <ProductID><b>Código:</b> 6321123</ProductID>
                                    <ProductColor color="#8f8c44" />
                                    <ProductSize><b>Tamanho:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>5</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice> R$ 40</ProductPrice>
                            </PriceDetail>
                        </Product> */}
                    </Info>
                    <Summary>
                        <SummaryTitle>Total</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Total dos produtos</SummaryItemText>
                            <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Frete</SummaryItemText>
                            <SummaryItemPrice>R$ 20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desconto do Frete</SummaryItemText>
                            <SummaryItemPrice>R$ -20</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>R$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Comprar Agora</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
