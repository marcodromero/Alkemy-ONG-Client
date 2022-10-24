import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box, Button, colors, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import httpService from "../../../services/httpService";
import "./Editor.css";
import { Alert, alertCreateError, alertCreateSucess, alertUpdateError, alertUpdateSucess } from "../../../features/alert/Alert";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle, Error,  } from "@mui/icons-material";
import { convertToBase64 } from "../../../features/utils";
import Swal from "sweetalert2";
const validationSchema = yup.object({
  name: yup.string("Enter activity name").required("Name is required"),
  image: yup.string("Enter a image"),
  content: yup
    .string("This field can not be empty")
    .min(20, "Content needs to be at least 20 characters long")
    .required("Content is required"),
});

export default function Editor() {
  const navigate = useNavigate()
  const handleAlertClick = () => {
    navigate("/backoffice/activities");
  };
  const handleFileChange = (e) => {
    convertToBase64(e.target.files[0]).then((base64) => {
      setImage(base64);
      formik.setFieldValue("image", base64);
    });
  };
  const [data, setData] = useState({});
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const [edit, setEdit] = useState("CREATE");
  const [image, setImage] = useState("");
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await httpService.get(`/activities/${id}`);
          setData(res.data);
          setImage(res.data.image);
          setEdit("EDIT");
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [id]);
  const formik = useFormik({
    initialValues: {
      name: data.name || "",
      image: data.image || "",
      content: data.content || "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        if(!image){
          setError(true)
          return
        }
        if (id) {
          Swal.fire({
            title: "¿Quieres actualizar la actividad?",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`,
          }).then(async (result) => {
            if (result.isConfirmed) {
              const res = await httpService.put(`/activities/${id}`, {
                name: values.name,
                content: values.content,
                image: image,
              });
              if (res.status === 200) {
                alertUpdateSucess('actividad', navigate("/backoffice/activities"))
              }else{
                alertUpdateError('actividad')
              }
            }
          })

          
        } else {
          Swal.fire({
            title: "¿Quieres publicar la actividad?",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`,
          }).then(async (result) => {
            if(result.isConfirmed){
              const res = await httpService.post("/activities", {
                name: values.name,
                image: image,
                content: values.content,
              });
              if (res.status === 200) {
                alertCreateSucess('actividad', navigate("/backoffice/activities"))
              }else{
                alertCreateError('actividad')
              }
            }
          })
        }
      } catch (e) {
        console.error(e);
      }
    },
  });
  return (

    <Box
      sx={{
        maxWidth: "800px",
        m: "0 auto",
        mt: "4rem",
      }}
    >
      <Alert
        type={"success"}
        methodConfirm={handleAlertClick}
        title={"Sucess"}
        text={"Sucess"}
        icon={<CheckCircle />}
        show={sucess}
      />
      <Alert
        type={"error"}
        title={"Error"}
        text={"No se pudo realizar la petición"}
        icon={<CheckCircle />}
        show={error}
      />
      <Typography align="center" variant="h4" component='h1' sx={{
        mb: '1.5rem'
      }}>
        {id ? 'Edit activity' : 'Create a new activity'}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Box
          sx={{
            '& img': {
              width: '100%',
              height: 'auto',
              display: 'block',
              mb: '1.5rem'
            }
          }}
        >
          <Typography component='label'>Image: </Typography>
          <Button variant="contained" component="label" onChange={handleFileChange} sx={{mb: '1.5rem'}}>
            Upload
           <input hidden accept="image/*" type="file" />
          </Button>
          {image && <Typography>Preview: </Typography>}
          <img src={image}/>
        </Box>
        {showLengthError && 
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
              El contenido debe tener al menos 20 carácteres
            </Typography>
          </Box>
        }
        <CKEditor
          editor={ClassicEditor}
          data={data.content || formik.values.content}
          config={{
            mediaEmbed: {
              previewsInData: true,
            },
          }}
          disabled={false}
          onChange={(event, editor) => {
            const data = editor.getData();
            if (data.length < 20) {
              setShowLengthError(true);
            }else{
              setShowLengthError(false)
            }
            formik.setFieldValue("content", data, false);
          }}
        />
        <Button
          sx={{ mt: "1.5rem" }}
          color="secondary"
          variant="contained"
          fullWidth
          type="submit"
        >
          {edit}
        </Button>
      </form>
    </Box>
  );
}
