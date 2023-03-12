import styled from "styled-components"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { useLocation } from 'react-router-dom'
import { useState } from "react"

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })};
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ margin: '0' })};
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0' })};
`

const Option = styled.option`

`

const ProductList = () => {

    const location = useLocation()
    const category = location.pathname.split('/')[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('novidade')

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }
    
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter><FilterText>Filtrar Produtos:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>
                            Cor
                        </Option>
                        <Option>Branco</Option>
                        <Option>Preto</Option>
                        <Option>Vermelho</Option>
                        <Option>Azul</Option>
                        <Option>Amarelo</Option>
                        <Option>Verde</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>
                            Tamanho
                        </Option>
                        <Option>PP</Option>
                        <Option>P</Option>
                        <Option>M</Option>
                        <Option>G</Option>
                        <Option>GG</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Definir Ordem:</FilterText>
                    <Select name='size' onChange={(e) => setSort(e.target.value)}>
                        <Option value='newest'>Novidade</Option>
                        <Option value='asc'>Menor Preço</Option>
                        <Option value='desc'>Maior Preço</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container >
    )
}

export default ProductList
