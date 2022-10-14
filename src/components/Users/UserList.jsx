
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import httpService from '../../services/httpService';
import UserTableItem from './UserTableItem';


export default function UserList() {
    const [data, setData] =useState([{}]);
    useEffect(()=> {
        (async ()=>{
            try{
                const res = await httpService.get('/users')
                console.log(res.data)
                setData(res.data)
            }catch(e){
                console.error(e)
            }

        })()
    }, [])
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>

            </TableHead>
        {data.map((user,index ) => <UserTableItem firstName={user.firstName} lastName={user.lastName} email={user.email} id={user.id} key={index}/> )}
        </Table>
    </TableContainer>
  )
}
