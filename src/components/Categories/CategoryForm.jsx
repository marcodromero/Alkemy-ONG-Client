import {
  Box,
  Button,
  Typography,
  Container,
  useMediaQuery,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
  IconButton,
  Tooltip,
  Paper,
  tableCellClasses,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useState } from "react";
import httpService from "../../services/httpService";
import { alert } from "../../features/alert/Alert";
import { useNavigate } from "react-router-dom";

export default function CategoryForm() {
  const widthMatches = useMediaQuery("(min-width:600px)");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await httpService.delete(`/categories/${id}`);
    setCategories(categories.filter((categorie) => categorie.id !== id));
    alert("¡Exitoso!", "Se ha eliminado la categoria", "success", false);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await httpService.get("/categories");
        setCategories(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#c2c2c2",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Container maxWidth="xl">
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
          Categorias
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            endIcon={<AddIcon />}
            onClick={() => navigate("/backoffice/categories/create")}
          >
            Agregar
          </Button>
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ marginBottom: widthMatches ? 19 : 10 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Descripción</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell size="small">{row.id}</TableCell>
                <TableCell size="small">{row.name}</TableCell>
                <TableCell size="small">{row.description}</TableCell>
                <TableCell size="small">
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteIcon color="danger" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Actualizar">
                    <IconButton
                      onClick={() =>
                        navigate(`/backoffice/categories/edit/${row.id}`)
                      }
                    >
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
}
