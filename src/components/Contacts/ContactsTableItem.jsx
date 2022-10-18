import { Delete, Edit } from "@mui/icons-material";
import {

  TableCell,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ContactsTableItem({name, phone, email, message, id}) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{message}</TableCell>
      <TableCell>
        <Link href={`/backoffice/contacts/${id}`} color="secondary">
          <Edit />
        </Link>
        <Link color="secondary">
          <Delete />
        </Link>
      </TableCell>
    </TableRow>
  );
}
