import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import httpService from "../../services/httpService";
import { alert } from "../../features/alert/Alert";

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

  return (
    <Box
      component="form"
      noValidate
      sx={{
        paddingTop: heightMatches ? 5 : 2,
        marginBottom: heightMatches ? 12 : 5,
      }}
      onSubmit={handleSubmit}
    >
      <Typography component="h2" variant="h4">
        ¡Contactate con nosotros!
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            marginTop: heightMatches ? 5 : 2,
          }}
        >
          <TextField
            required
            fullWidth
            error={error === "name" ? true : false}
            label="Nombre y Apellido"
            variant="outlined"
            sx={{
              marginBottom: 3,
            }}
            color="neutral"
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
            color="neutral"
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
            color="neutral"
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
            color="neutral"
            name="message"
            helperText={error === "message" && errorMessage}
            value={message}
            onChange={handleChange}
            size={widthMatches ? "medium" : "small"}
          />
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            endIcon={<SendIcon />}
          >
            Enviar consulta
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
