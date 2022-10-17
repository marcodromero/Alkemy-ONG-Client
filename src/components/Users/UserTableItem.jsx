import { Delete, Edit } from "@mui/icons-material";

import { Button, TableCell, TableRow, Link} from "@mui/material";

import React from "react";

export default function UserTableItem({ firstName, lastName, email, id }) {
  return (
    <TableRow>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>

        <Link href={`/backoffice/users/${id}`} color='secondary'>
          <Edit />
        </Link>
        <Link color='secondary'>
          <Delete />
        </Link>
      </TableCell>
    </TableRow>
  );
}
