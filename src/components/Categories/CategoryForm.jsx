import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import httpService from "../../services/httpService";
const validationSchema = yup.object({
  name: yup.string("Enter category name").required("Name is required"),
  description: yup
    .string("Enter category description").min(10)
    .required("Description required"),
  
});

export default function CategoryForm({ categoryId }) {
  const navigate = useNavigate();
  console.log(categoryId);

  const [predName, setPredName] = useState("");
  const [predDescription, setPredDescription] = useState("");

  useEffect(async () => {
    try {
      const { data } = await httpService.get("/auth/me");
      if (data.user.roleId !== 1) {
        navigate(-1);
      }
      if (categoryId) {
        const { data } = await httpService.get(`/category/${categoryId}`);
        if (data.name && data.description) {
          setPredName(data.name);
          setPredDescription(data.description);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: predName,
      description: predDescription,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        if (categoryId) {
          await httpService.put(`/category/${categoryId}`, {
            name: values.name,
            description: values.description,
          });
        } else {
          await httpService.post("/category", {
            name: values.name,
            description: values.description,
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <Box
      sx={{
        maxWidth: "600px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        border: "2px solid #172e5784",
        borderRadius: "16px",
        padding: "10px 50px 60px 50px",
        boxShadow: "5px 5px 20px rgba(0,0,0,0.5)"
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography
          color="secondary"
          sx={{ marginBottom: "1.5rem", marginTop: "3rem" }}
          align="center"
          variant="h4"
          component="h1"
          gutterBottom
        >
          Add New Category
        </Typography>
        <TextField
          color="secondary"
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
          color="secondary"
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          multiline
          rows={5}
          id="description"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <Button color="secondary" variant="contained" fullWidth type="submit">
          {categoryId ? "Update" : "Create"}
        </Button>
      </form>
    </Box>
  );
}
