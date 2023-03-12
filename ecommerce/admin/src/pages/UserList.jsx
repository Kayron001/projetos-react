import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../data/data'
import { Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom'

// styled components
const Container = styled.div`
    flex: 5;
`



const UserList = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'Usuário', width: 200, renderCell: (params) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            style={{ height: '32px', width: '32px', borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }}
                            src={params.row.avatar}
                            alt='Avatar de Usuário'
                        /> {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'E-mail', width: 230 },
        { field: 'status', headerName: 'Status', width: 120, },
        { field: 'transaction', headerName: 'Transação', width: 140, },
        {
            field: 'actions', headerName: 'Ações', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button style={{ border: 'none', borderRadius: '10px', padding: '5px 10px', backgroundColor: '#3bb', color: 'white', cursor: 'pointer', marginRight: '20px', }}>
                                Editar
                            </button>
                        </Link>
                        <Delete style={{ color: 'red', cursor: 'pointer', }} onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    return (
        <Container>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
        </Container>
    )
}

export default UserList
