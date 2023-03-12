import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { databaseProducts } from "../data/products"
import Product from "./Product"
import axios from 'axios'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(category ? `http://localhost:5000/api/products?=category=${category}` : `http://localhost:5000/products`)
                setProducts(res.data)
            } catch (error) {

            }
        }
    }, [category])

    useEffect(() => {
        category && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
        )
    }, [products, category, filters])

    useEffect(() => {
        if ((sort === 'newest')) {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if ((sort === 'asc')) {
            setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        }
        else setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))


    }, [sort])

    return (
        <Container>
            {category ? filteredProducts.map(item => <Product item={item} key={item.id} />) : databaseProducts.slice(0, 8).map(item => <Product item={item} key={item.id} />)}
        </Container>
    )
}

export default Products
