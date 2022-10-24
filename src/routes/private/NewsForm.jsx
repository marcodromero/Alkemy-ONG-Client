import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  ThemeProvider,
  colors,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../services/httpService";
import "@fontsource/poppins";
import { createTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import { DeleteForever, Error, PhotoCamera, Send } from "@mui/icons-material";
import { convertToBase64 } from "../../features/utils";
import { alertCreateError, alertCreateSucess, alertUpdateSucess } from "../../features/alert/Alert";

export default function NewsForm() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [showLengthError, setShowLengthError] = useState(true);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    convertToBase64(e.target.files[0]).then((base64) => {
      setImage(base64);
    });
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const showAlertCreate = () => {
    if ((name, image, content)) {
      Swal.fire({
        title: "¿Quieres publicar la novedad?",
        icon: "question",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
	            const res = await axios.post(`/news`, {
	            name: name,
	            content: content,
	            image: image,
	            });
	            getData();
	            alertCreateSucess('novedad', navigate('/backoffice/news'))
              } catch (error) {
                alertCreateError('novedad')
            }
        }
      });
    }
  };

  const showAlertUpdate = (_id) => {
    if ((name, image, content)) {
      Swal.fire({
        title: "¿Quieres actualizar la Novedad?",
        icon: "question",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.put(`/news/${_id}`, {
            name: name,
            content: content,
            image: image,
          });
          if (res.status === 200) {
            getData();
            alertUpdateSucess('novedad', navigate('/backoffice/news'))
          } else {
            alertCreateError('novedad')
          }
        }
      });
    }
  };

  async function getData(_idParam) {
    if (_idParam) {
      const res = await axios.get(`/news/${_idParam}`);
      if (res.data) {
        setData(res.data.data);
        setName(res.data.data.name);
        setImage(res.data.data.image);
        setContent(res.data.data.content);
      }
    }
  }

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#000",
      },
    },
  });

  useEffect(() => {
    getData(id);
    document.getElementById("form").onsubmit = () => {
      return false;
    };
  }, []);

  return (
    <Box
      component="form"
      id="form"
      sx={{
        mt: "25px",
        mx: "auto",
        maxWidth: "733px",
      }}
    >
      <Typography
        align="center"
        variant="h4"
        component="h1"
        sx={{
          mb: "1.5rem",
        }}
      >
        {data ? "Editar novedad" : "Crear novedad"}
      </Typography>
      <ThemeProvider theme={theme}>
        <TextField
          required
          id="outlined-name"
          label="Título"
          value={name}
          onChange={nameChange}
          variant="outlined"
          autoComplete="off"
          InputLabelProps={{
            style: { color: "#000" },
          }}
          color="secondary"
          fullWidth={true}
          sx={{ mb: "1.5rem" }}
        />

        <Box
          sx={{
            maxWidth: "500px",
            my: "1.5rem",
            "& img": {
              width: "100%",
              aspectRatio: "1",
              objectFit: "cover",
              my: '1.5rem'
            },
          }}
        >
          {" "}
          <Typography component="label" sx={{ pr: ".7rem" }}>
            Imagen
          </Typography>
          {!image && (
            <Button
              variant="contained"
              component="label"
              onChange={handleFileChange}
              endIcon={<PhotoCamera/>}
            >
              Subir
              <input hidden accept="image/*" type="file" />
            </Button>
          )}
          {image && (
            <Button
              variant="contained"
              component="label"
              onClick={() => setImage("")}
              endIcon={<DeleteForever/>}
            >
              Quitar
            </Button>
          )}
          {image && <img src={image} alt="" />}
        </Box>
      
      {showLengthError && (
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: colors.grey[500],
            }}
          >
            <Error
              sx={{
                color: colors.amber[500],
              }}
            />{" "}
            El contenido debe tener al menos 10 carácteres
          </Typography>
        </Box>
      )}
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          const text = editor.getData();
          setContent(text);
          if (text.length < 17) {
            setShowLengthError(true);
          } else {
            setShowLengthError(false);
          }
        }}
        config={{
          toolbar: [
            "heading",
            "bold",
            "italic",
            "bulletedList",
            "numberedList",
            "blockQuote",
            "link",
            "undo",
            "redo",
          ],
        }}
      />
      <Button
        type="submit"
        variant="contained"
        component="label"
        sx={{mt: '1.6rem'}}
        endIcon={<Send/>}
        onClick={
          data
            ? () => {
                showAlertUpdate(id);
              }
            : showAlertCreate
        }
      >
        
            Confirmar
      </Button>
      </ThemeProvider>
    </Box>
  );
}
