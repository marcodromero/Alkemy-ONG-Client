import { Box, TextField, Button, Typography, Link } from "@mui/material";
import {useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {UserContext} from '../../context/UserProvider'
import { useContext } from "react";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export default function LoginForm() {
  const {login} = useContext(UserContext)
  const navigate = useNavigate()
    useEffect(() => {
        if(sessionStorage.getItem('token')){
            navigate('/')
        }
    })
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      await login(values, actions)
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
          sx={{ marginBottom: "1.5rem" }}
          align="center"
          variant="h4"
          component="h1"
          gutterBottom
        >
          {" "}
          Login{" "}
        </Typography>
        <TextField
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
          Login
        </Button>
        <Typography>
          Don't have a Account yet?<Link href="/register"><Typography color="secondary" sx={{display: 'inline'}}>Sign up!</Typography></Link>
        </Typography>
      </form>
    </Box>
  );
}
