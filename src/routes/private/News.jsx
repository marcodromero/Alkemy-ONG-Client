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
  Tooltip,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import { StyledTableCell } from "../../features/styles";
import Axios from "../../services/httpService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const showAlert = (id) => {
    Swal.fire({
      title: "¿Quieres eliminar la novedad?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await Axios.delete(`/news/${id}`);
        if (res) {
          getData();
          Swal.fire("Eliminado", "La novedad ha sido eliminada.", "success");
        } else {
          Swal.fire(
            "Hubo un problema",
            "La novedad no se pudo eliminar.",
            "error"
          );
        }
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await Axios.get("/news");
    setNews(res.data);
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
            Novedades
          </Typography>
          <Box>
            <Button
              onClick={() => navigate("/backoffice/news-form")}
              variant="contained"
              color="success"
              endIcon={<AddIcon />}
            >
              Agregar
            </Button>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Título</StyledTableCell>
                <StyledTableCell>Imagen</StyledTableCell>
                <StyledTableCell>Creado</StyledTableCell>
                <StyledTableCell>Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {news.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell size="small">{row.name}</TableCell>
                  <TableCell size="small">
                    <Box
                      component="img"
                      src={row.image}
                      alt={row.name}
                      sx={{ height: 45, width: 60 }}
                    />
                  </TableCell>
                  <TableCell size="small">{row.createdAt}</TableCell>
                  <TableCell size="small">
                    <Tooltip title="Eliminar">
                      <IconButton
                        onClick={() => {
                          showAlert(row.id);
                        }}
                      >
                        <DeleteIcon color="danger" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      onClick={() =>
                        navigate("/backoffice/news-form/" + row.id)
                      }
                      title="Actualizar"
                    >
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
    </>
  );
}
