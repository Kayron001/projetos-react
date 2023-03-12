import React from 'react'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import WidgetLarge from '../components/WidgetLarge'
import WidgetSmall from '../components/WidgetSmall'
import { userData } from '../data/data'
import styled from 'styled-components'

const Container = styled.div`
    flex: 5;
`

const WidgetWrapper = styled.div`
    display: flex;
    margin: 20px;
`



const Home = () => {
    return (
        <Container>
            <FeaturedInfo />
            <Chart data={userData} title='Análise de Usuários' grid dataKey='Usuários Ativos' />
            <WidgetWrapper>
                <WidgetSmall />
                <WidgetLarge />
            </WidgetWrapper>
        </Container>
    )
}

export default Home
