import { Add, Create } from "@mui/icons-material";
import {
  Box,
  Button,
  useMediaQuery,
  Typography,
  Container,
  TableContainer,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table,
  tableCellClasses,
  Tooltip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { alertDeleteError, alertDeleteSucess } from "../../../features/alert/Alert";
import httpService from "../../../services/httpService";
import Swal from "sweetalert2";

export default function ActivitiesListWrapper({ data, setData }) {
  const navigate = useNavigate();
  const widthMatches = useMediaQuery("(min-width:600px)");
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#c2c2c2",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const handleDelete = async (id) => {
    
    Swal.fire({
      icon: "question",
      title: '¿Quieres eliminar la actividad?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try{
          const res = await httpService.delete(`/activities/${id}`);
          console.log(res.AxiosError.code)
          if(res.status === 200) {          
            alertDeleteSucess('actividad', navigate('/backoffice/activities'))
          }
          setData(data.filter((activity) => activity.id !== id));
      }catch(e) {
        alertDeleteError('actividad')
      }
    }})
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
          Actividades
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            endIcon={<AddIcon />}
            onClick={() => navigate("/backoffice/activities/create")}
          >
            Agregar
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{ marginBottom: widthMatches ? 19 : 10 }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Imagen</StyledTableCell>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell size="small">{row.id}</TableCell>
                  <TableCell size="small">
                    <Box
                      component="img"
                      src={row.image}
                      alt="activity"
                      sx={{ height: 45, width: 60 }}
                    />
                  </TableCell>
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
                          navigate(`/backoffice/activities/edit/${row.id}`)
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
      </Box>
    </Container>
  );
}
