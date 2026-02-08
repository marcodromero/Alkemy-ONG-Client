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
import Swal from "sweetalert2";

const Testimonial = () => {
  const [members, setMembers] = useState([]);

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
        const res = await httpService.get("/members");
        setMembers(res.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const navigate = useNavigate();
  const widthMatches = useMediaQuery("(min-width:600px)");
   
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Quieres eliminar al miembro?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await httpService.delete(`/members/${id}`);
        if (res) {
          setMembers(members.filter((testimonial) => testimonial.id !== id));
          Swal.fire("Eliminado", "El miembro ha sido eliminado.", "success");
        } else {
          Swal.fire(
            "Hubo un problema",
            "El miembro no se pudo eliminar.",
            "error"
          );
        }
      }
    });
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
          Miembros
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            endIcon={<AddIcon />}
            onClick={() => navigate("/backoffice/members/form")}
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
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
               
                <TableCell size="small">{row.name}</TableCell>
            
                <TableCell size="small">
                  <Tooltip title="Eliminar">
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <DeleteIcon color="danger" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Actualizar">
                    <IconButton
                      onClick={() =>
                        navigate(`/backoffice/members/form/${row.id}`)
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

export default Testimonial;
