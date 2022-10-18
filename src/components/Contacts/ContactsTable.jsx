import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import httpService from '../../services/httpService'
import ContactsTableItem from './ContactsTableItem'

export default function ContactTable() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    (async() =>{
      try{
        const res = await httpService.get('/contacts')
        setData(res.data)
        console.log(data)
      }catch ( e) {
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
          <TableCell>Phone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Message</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
         data.map((concact) => (
          <ContactsTableItem key={concact.id} {...concact} />
         ))
        }
      </TableBody>
    </Table>
  </TableContainer>
  )
}
