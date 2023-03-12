import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userData } from '../data/data';
import styled from 'styled-components'

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: 9px 7px 8px -2px rgba(0, 0, 0, 0.75);
`

const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <Container>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data} >
                    <XAxis dataKey='name' stroke='#4c42ff' />
                    <Line type='monotone' dataKey={dataKey} stroke='#4c42ff' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e3e3e3" strokeDasharray='5 5' />}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart
