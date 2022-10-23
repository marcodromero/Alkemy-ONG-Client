import { Box, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {UserContext} from '../../context/UserProvider'
import { useContext } from "react";
const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  lastname: yup.string("Enter your lastname").required("Lastname is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export default function RegisterForm() {
  const {register, user} = useContext(UserContext)
  const navigate = useNavigate()
  useEffect(()=> {}, [user])
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      await register(values, actions)
      navigate('/')
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
          Join us!
        </Typography>
        <TextField
        color="secondary"
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="name"
          name="name"
          label="Firstname"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
        color="secondary"
        sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="lastname"
          name="lastname"
          label="Lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
        color="secondary"
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
        color="secondary"
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Register
        </Button>
      </form>
    </Box>
  );
}
