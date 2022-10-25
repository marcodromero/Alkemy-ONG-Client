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
import { useNavigate } from "react-router-dom";
import { alert } from "../../features/alert/Alert";

const Slide = () => {
  const [slides, setSlides] = useState([]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#c2c2c2",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  useEffect(() => {
    (async () => {
      try {
        const res = await httpService.get("/slides");
        setSlides(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const navigate = useNavigate();
  const widthMatches = useMediaQuery("(min-width:600px)");

  const handleDelete = async (id) => {
    await httpService.delete(`/slides/${id}`);
    setSlides(slides.filter((testimonial) => testimonial.id !== id));
    alert("¡Exitoso!", "Se ha eliminado el slide", "success", false);
  };

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
          Slides
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            endIcon={<AddIcon />}
            onClick={() => navigate("/backoffice/formslides")}
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
              <StyledTableCell>Imagen</StyledTableCell>
              <StyledTableCell>Texto</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slides.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell size="small">{row.id}</TableCell>
                <TableCell size="small">
                  <Box
                    component="img"
                    src={row.imageUrl}
                    alt={row.id}
                    sx={{ height: 45, width: 60 }}
                  />
                </TableCell>
                <TableCell size="small">{row.text}</TableCell>
                <TableCell size="small">
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteIcon color="danger" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Actualizar">
                    <IconButton
                      onClick={() =>
                        navigate(`/backoffice/slides/edit/${row.id}`)
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
};

export default Slide;
