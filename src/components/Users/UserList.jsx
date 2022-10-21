
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import UserTableItem from "./UserTableItem";

import {StyledTableCell} from '../../features/styles'
export default function UserList() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    (async () => {
      try {
        const res = await httpService.get("/users");
        setData(res.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Last name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, index) => (
            <UserTableItem
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              id={user.id}
              key={index}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
