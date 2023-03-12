import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    border: 1px solid #e7e7e7;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: '28vh' })};
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    border-right: 1px solid #e7e7e7;
    border-left: 1px solid #e7e7e7;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    text-align: center;
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    border-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>COMPRAR</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
