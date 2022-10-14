import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useMediaQuery,
  tableCellClasses,
  Tooltip,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import httpService from "../../services/httpService";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ffc168",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/testimonials");
    setTestimonials(res.data);
  };

  const widthMatches = useMediaQuery("(min-width:600px)");

  return (
    <Container maxWidth="xl">
      <Box
        component=""
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          mb={widthMatches ? 6 : 3}
          mt={widthMatches ? 5 : 3}
        >
          Testimonials
        </Typography>
        <Box>
          <Button variant="contained" color="success" endIcon={<AddIcon />}>
            Agregar
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testimonials.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Tooltip title="Eliminar">
                    <IconButton>
                      <DeleteIcon color="danger" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Actualizar">
                    <IconButton>
                      <CreateIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Testimonial;
