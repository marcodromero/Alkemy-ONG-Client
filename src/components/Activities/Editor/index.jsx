import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box, Button, colors, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import httpService from "../../../services/httpService";
import "./Editor.css";
import { Alert } from "../../../features/alert/Alert";
import { useParams } from "react-router-dom";
import { CheckCircle, CopyAll, Error, ScheduleSendSharp } from "@mui/icons-material";
const validationSchema = yup.object({
  name: yup.string("Enter activity name").required("Name is required"),
  image: yup.string("Enter a image url").url("Enter a valid url"),
  content: yup
    .string("This field can not be empty")
    .min(20, "Content needs to be at least 20 characters long")
    .required("Content is required"),
});

export default function Editor() {
  const handleAlertClick = () => {
    window.location = "/backoffice/activities";
  };
  const [data, setData] = useState({});
  const [sucess, setSucess] = useState(false);
  const [showLengthError, setShowLengthError] = useState(false);
  const [edit, setEdit] = useState("CREATE");
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await httpService.get(`/activities/${id}`);
          setData(res.data);
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
       
        if (id) {
          const res = await httpService.put(`/activities/${data.id}`, {
            name: values.name,
            image: values.image,
            content: values.content,
          });
          
          if (res.status === 200) {
            setSucess(true);
          }
        } else {
          const res = await httpService.post("/activities", {
            name: values.name,
            image: values.image,
            content: values.content,
          });
          if (res.status === 200) {
            setSucess(true);
          }
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
        cb={handleAlertClick}
        title={"Sucess"}
        text={"Sucess"}
        icon={<CheckCircle />}
        show={sucess}
      />
      <Typography
        align="center"
        variant="h4"
        component="h1"
        sx={{
          mb: "1.5rem",
        }}
      >
        Create a new activity
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

        <TextField
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="image"
          name="image"
          label="Image URL"
          value={formik.values.image}
          onChange={formik.handleChange}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />
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
