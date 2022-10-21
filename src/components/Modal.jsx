import React, { useState } from "react";
import { TextField, Button, Typography, Modal, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import httpService from "../services/httpService";
import { alert } from "../features/alert/Alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const initialState = {
    name: "",
    image: "",
    content: "",
  };

  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [testimonial, setTestimonial] = useState(initialState);

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!testimonial.content.trim()) {
        setError("content");
        setErrorMessage("Este campo es obligatorio");
        return;
      }
      await httpService.post("/testimonials", testimonial);
      alert("Exitoso!", "Se ha agregado tu testimonio", "success", false);
      setTestimonial(initialState);
    } catch (error) {
      alert("Error!", error.message, "error", false);
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
    setTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Agregar mi testimonio
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              error={error === "content" ? true : false}
              label="Escribe tu consulta..."
              multiline
              rows={5}
              variant="outlined"
              sx={{
                marginBottom: 3,
              }}
              color="neutral"
              name="content"
              helperText={error === "content" && errorMessage}
              value={testimonial.content}
              onChange={handleChange}
              size={"small"}
            />
            <Button
              variant="contained"
              type="submit"
              color="danger"
              endIcon={<SendIcon />}
              sx={{ color: "#fff" }}
            >
              ENVIAR
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
