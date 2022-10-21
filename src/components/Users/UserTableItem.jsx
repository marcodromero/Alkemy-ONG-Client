import { Delete, Edit } from "@mui/icons-material";

import { Button, colors, TableCell, TableRow} from "@mui/material";

import React from "react";
import httpService from "../../services/httpService";
import { DeleteAlert } from "../../features/alert/Alert";
import { Link, useNavigate } from "react-router-dom";
export default function UserTableItem({ firstName, lastName, email, id }) {
  const navigate = useNavigate()
  const [showDeleteWarning, setShowDeleteWarning] = React.useState(false)
  const initDelete = () => {
    setShowDeleteWarning(true)
  }
  return (
    <>
    <DeleteAlert
    show={showDeleteWarning}
    onConfirm={() => {
      httpService.delete(`/users/${id}`)
      setShowDeleteWarning(false)
      navigate('/backoffice/users')
    }}
    onCancel={() => setShowDeleteWarning(false)}
    text='¿Esta seguro que desea eliminar este usuario?'
    />
    
    <TableRow>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell sx={{
        '& a': {
          textDecoration: 'none',
          color: colors.lightBlue[500],
        }
      }}>

        <Link to={`/backoffice/users/${id}`}>
          <Edit />
        </Link>
        <Link onClick={() => initDelete()} color='secondary'>
          <Delete />
        </Link>
      </TableCell>
    </TableRow>
    </>
  );
}
