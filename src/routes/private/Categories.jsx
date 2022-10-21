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
import Axios from "../../services/httpService";
import Swal from "sweetalert2";
import CategoryForm from "../../components/Categories/CategoryForm";

export default function News() {
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ffc168",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const showAlert = (id) => {
    Swal.fire({
      title: "¿Quieres eliminar la categoria?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await Axios.delete(`/categories/${id}`);
        if (res) {
          getData();
          Swal.fire("Eliminado", "La categoria ha sido eliminada.", "success");
        } else {
          Swal.fire(
            "Hubo un problema",
            "La categoria no se pudo eliminar.",
            "error"
          );
        }
      }
    });
  };

  useEffect(() => {
    getData();
  }, [modal]);

  const getData = async () => {
    const res = await Axios.get("/categories");
    setCategories(res.data);
  };

  const widthMatches = useMediaQuery("(min-width:600px)");

  return (
    <>
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
            Categories
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="success"
              endIcon={<AddIcon />}
              onClick={()=>setModal(!modal)}
            >
              Agregar
            </Button>
          </Box>
        </Box>
        {modal ? (
          <CategoryForm setModal={setModal}/>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>Descripcion</StyledTableCell>
                  <StyledTableCell>Tipo</StyledTableCell>
                  <StyledTableCell>Ruta</StyledTableCell>
                  <StyledTableCell>Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{/*row.description*/}</TableCell>
                    <TableCell>{/*row.type*/}</TableCell>
                    <TableCell>{/*row.path*/}</TableCell>
                    <TableCell>
                      <Tooltip title="Eliminar">
                        <IconButton
                          onClick={() => {
                            showAlert(row.id);
                          }}
                        >
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
        )}
      </Container>
    </>
  );
}
