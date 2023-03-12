import React from 'react'
import styled from 'styled-components'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const FeaturedCard = styled.div`
    background-color: rgb(244, 244, 244);
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
`

const Title = styled.span`
    font-size: 20px;
`

const MoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`

const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`

const MoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const SubTitle = styled.span`
    font-size: 15px;
    color: gray;
`

const FeaturedInfo = () => {
    return (
        <Container>
            <FeaturedCard>
                <Title>Receita</Title>
                <MoneyContainer >
                    <Money>R$ 7.515</Money>
                    <MoneyRate>-11,4 <ArrowDownward style={{ fontSize: '14px', marginLeft: '5px', color: 'red' }} />
                    </MoneyRate>
                </MoneyContainer>
                <SubTitle>Comparar com mês anterior</SubTitle>
            </FeaturedCard>
            <FeaturedCard>
                <Title>Vendas</Title>
                <MoneyContainer >
                    <Money>R$ 4.415</Money>
                    <MoneyRate>-1,4 <ArrowDownward style={{ fontSize: '14px', marginLeft: '5px', color: 'red' }} />
                    </MoneyRate>
                </MoneyContainer>
                <SubTitle>Comparar com mês anterior</SubTitle>
            </FeaturedCard>
            <FeaturedCard>
                <Title>Custo</Title>
                <MoneyContainer >
                    <Money>R$ 2.415</Money>
                    <MoneyRate >+3,4 <ArrowUpward style={{ fontSize: '14px', marginLeft: '5px', color: 'green' }} />
                    </MoneyRate>
                </MoneyContainer>
                <SubTitle>Comparar com mês anterior</SubTitle>
            </FeaturedCard>
        </Container>
    )
}

export default FeaturedInfo
