import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  useMediaQuery,
  Container,
  ThemeProvider
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import httpService from "../../services/httpService";
import { alert } from "../../features/alert/Alert";
import "@fontsource/poppins";
import { createTheme } from '@mui/material/styles';

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contact, setContact] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");

  const { name, email, phone, message } = contact;
  const widthMatches = useMediaQuery("(min-width:600px)");
  const heightMatches = useMediaQuery("(min-height:600px)");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!name.trim()) {
        setError("name");
        setErrorMessage("Este campo es obligatorio");
        return;
      }
      if (!email.trim()) {
        setError("email");
        setErrorMessage("Este campo es obligatorio");
        return;
      }
      if (!phone.trim()) {
        setError("phone");
        setErrorMessage("Este campo es obligatorio");
        return;
      }
      if (!message.trim()) {
        setError("message");
        setErrorMessage("Este campo es obligatorio");
        return;
      }
      await httpService.post("/contacts", contact);
      alert("Exitoso!", "Se ha enviado tu consulta", "success", false);
      setContact(initialState);
    } catch (error) {
      alert("Error!", error.message, "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setError(name);
      setErrorMessage("Este campo es obligatorio");
    } else {
      setError("");
      setErrorMessage("");
    }
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#000"
      },
    }});

  return (
    <Container maxWidth="xl" sx={{ marginBottom: widthMatches ? 10 : 8 }}>
      <Typography component="h2" variant="h4" mt={widthMatches ? 5 : 3}  mb={widthMatches ? 5 : 3} sx={{fontFamily: "Poppins, sans-serif", textAlign: "center", fontSize: "38px", fontWeight: "600"}}>
          ¡Contactate con nosotros!
        </Typography>
     
      <Box
        component="form"
        noValidate
        sx={{
          
          marginBottom: heightMatches ? 12 : 5,
      
        }}
        onSubmit={handleSubmit}
      >

        <Grid container sx={{display: "flex",
          flexDirection: "column",
          alignItems: "center",}}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
             
            }}
          >
             <ThemeProvider theme={theme}>
            <TextField
              required
              fullWidth
              error={error === "name" ? true : false}
              label="Nombre y Apellido"
              variant="outlined"
              sx={{
                marginBottom: 3,
              }}
              color="secondary"
              name="name"
              helperText={error === "name" && errorMessage}
              value={name}
              onChange={handleChange}
              size={widthMatches ? "medium" : "small"}
            />
            <TextField
              required
              fullWidth
              error={error === "email" ? true : false}
              label="Email"
              variant="outlined"
              sx={{
                marginBottom: 3,
              }}
              color = "secondary"
              name="email"
              helperText={error === "email" && errorMessage}
              value={email}
              onChange={handleChange}
              size={widthMatches ? "medium" : "small"}
            />
            <TextField
              required
              fullWidth
              error={error === "phone" ? true : false}
              label="Teléfono"
              variant="outlined"
              sx={{
                marginBottom: 3,
              }}
              color = "secondary"
              name="phone"
              helperText={error === "phone" && errorMessage}
              value={phone}
              onChange={handleChange}
              size={widthMatches ? "medium" : "small"}
            />
            <TextField
              required
              fullWidth
              error={error === "message" ? true : false}
              label="Escribe tu consulta..."
              multiline
              rows={widthMatches ? 7 : 4}
              variant="outlined"
              sx={{
                marginBottom: 3,
              }}
              color = "secondary"
              name="message"
              helperText={error === "message" && errorMessage}
              value={message}
              onChange={handleChange}
              size={widthMatches ? "medium" : "small"}
            />
             </ThemeProvider>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              sx={{backgroundColor:"#ff0000", borderRadius: "20px", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)", ':hover': {backgroundColor: "blue"}}}
            >
              Enviar consulta
            </Button>
          </Grid>
        </Grid>
      </Box>
     
    </Container>
  );
};

export default Contact;
