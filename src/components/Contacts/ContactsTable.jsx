import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import ContactsTableItem from "./ContactsTableItem";
import { styled } from "@mui/material/styles";

export default function ContactTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#c2c2c2",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const widthMatches = useMediaQuery("(min-width:600px)");
  const [data, setData] = useState([{}]);
  useEffect(() => {
    (async () => {
      try {
        const res = await httpService.get("/contacts");
        setData(res.data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
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
          Contactos
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Message</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((concact) => (
              <ContactsTableItem
                key={concact.id}
                {...concact}
                setData={setData}
                data={data}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
