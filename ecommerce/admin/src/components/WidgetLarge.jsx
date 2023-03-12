import React from 'react'
import styled from 'styled-components'
import "./widgetLarge.css";

const Container = styled.div`
    flex: 2;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
    padding: 20px;
`

const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`

const TableRow = styled.tr`
    
`

const TableColumn = styled.th`
    text-align: left;
`

const ClientInfo = styled.td`
    display: flex;
    align-items: center;
`

const ClientImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const Name = styled.span`

`

const ClientDate = styled.td`
    font-weight: 300;
    `

const ClientAmount = styled.td`
    font-weight: 300;
`

const ClientStatus = styled.td`

`

const WidgetLarge = () => {

    const Button = ({ type }) => {
        return <button className={'button ' + type}>{type}</button>
    }

    return (
        <Container>
            <Title>Ultimas Transações</Title>
            <Table>
                <TableRow>
                    <TableColumn>Cliente</TableColumn>
                    <TableColumn>Data</TableColumn>
                    <TableColumn>Valor</TableColumn>
                    <TableColumn>Status</TableColumn>
                </TableRow>
                <TableRow>
                    <ClientInfo>
                        <ClientImg src='https://i.imgur.com/A5GEdgA.png' />
                        <Name>teste</Name>
                    </ClientInfo>
                    <ClientDate>2 Jun 2022</ClientDate>
                    <ClientAmount>R$ 55</ClientAmount>
                    <ClientStatus>
                        <Button type='aprovado' />
                    </ClientStatus>
                </TableRow>
                <TableRow>
                    <ClientInfo>
                        <ClientImg src='https://i.imgur.com/A5GEdgA.png' />
                        <Name>teste</Name>
                    </ClientInfo>
                    <ClientDate>2 Jun 2022</ClientDate>
                    <ClientAmount>R$ 122</ClientAmount>
                    <ClientStatus>
                        <Button type='recusado' />
                    </ClientStatus>
                </TableRow>
                <TableRow>
                    <ClientInfo>
                        <ClientImg src='https://i.imgur.com/A5GEdgA.png' />
                        <Name>teste</Name>
                    </ClientInfo>
                    <ClientDate>2 Jun 2022</ClientDate>
                    <ClientAmount>R$ 352</ClientAmount>
                    <ClientStatus>
                        <Button type='pendente' />
                    </ClientStatus>
                </TableRow>
                <TableRow>
                    <ClientInfo>
                        <ClientImg src='https://i.imgur.com/A5GEdgA.png' />
                        <Name>teste</Name>
                    </ClientInfo>
                    <ClientDate>2 Jun 2022</ClientDate>
                    <ClientAmount>R$ 48</ClientAmount>
                    <ClientStatus>
                        <Button type='aprovado' />
                    </ClientStatus>
                </TableRow>
            </Table>
        </Container>
    )
}

export default WidgetLarge
