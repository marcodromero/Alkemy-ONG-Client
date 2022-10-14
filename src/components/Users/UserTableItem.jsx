import { Delete, Edit } from "@mui/icons-material";
import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";

export default function UserTableItem({ firstName, lastName, email, id }) {
  return (
    <TableRow>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <Button color='secondary'>
          <Edit />
        </Button>
        <Button color='secondary'>
          <Delete />
        </Button>
      </TableCell>
    </TableRow>
  );
}
