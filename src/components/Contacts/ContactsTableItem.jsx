import { TableCell, TableRow } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import httpService from "../../services/httpService";
import { Tooltip, IconButton } from "@mui/material";
import { alert } from "../../features/alert/Alert";
export default function ContactsTableItem({
  name,
  phone,
  email,
  message,
  id,
  data,
  setData,
}) {
  const handleDelete = async (id) => {
    await httpService.delete(`/contacts/${id}`);
    setData(data.filter((contact) => contact.id !== id));
    alert("¡Exitoso!", "Se ha eliminado el contacto", "success", false);
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{message}</TableCell>
      <TableCell>
        <Tooltip title="Eliminar">
          <IconButton onClick={() => handleDelete(id)}>
            <DeleteIcon color="danger" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
