import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import UserTableItem from "./UserTableItem";

import { StyledTableCell } from "../../features/styles";
export default function UserList() {
  const [data, setData] = useState([{}]);
  const widthMatches = useMediaQuery("(min-width:600px)");
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
    <Box mb={widthMatches ? 10 : 5}>
      <Box
        mb={widthMatches ? 6 : 3}
        mt={widthMatches ? 4 : 2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component="h2" variant="h4">
          Usuarios
        </Typography>
      </Box>
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
    </Box>
  );
}
