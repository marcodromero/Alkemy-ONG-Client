
import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
const validationSchema = yup.object({
  firstName: yup
    .string("This cannot be empty")
    .required("Firstname is required"),
  lastName: yup.string("This cannot be empty").required("Lastname is required"),

  email: yup
    .string("This cannot be empty")
    .email("Enter a valid email")
    .required("Email is required"),
  roleId: yup
    .number("This cannot be empty")
    .min(1, "This cannot be below 1")
    .max(2, "This cannot be above 2")
    .required("Role is required"),
});

export default function EditUser() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      roleId: data.roleId || "",
      email: data.email || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        const res = await httpService.put("/users/" + id, {
          values,
        });
        console.log(res)
        // window.location = '/backoffice/users'
      } catch (e) {
        console.error(e);
      }
    },
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await httpService.get("/users/" + id);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  return (
    <Box sx={{
      '& form': {
        maxWidth: '500px'
      },
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant='h4' component="h1" sx={{ mb: '1.5rem'}}>
        Edit user
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
        color='secondary'
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="firstName"
          name="firstName"
          label="Firstname"
          autoComplete="false"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
        color='secondary'
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="lastName"
          name="lastName"
          label="Lastname"
          autoComplete="false"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
        color='secondary'
          sx={{ marginBottom: "1.5rem" }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          autoComplete="false"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <InputLabel id="roleIdLabel">Role ID</InputLabel>
        <Select
        sx={{mb: '1.5rem'}}
        color='secondary'
          id="roleId"
          name="roleId"
          label="Reole ID"
          labelId="roleIdLabel"
          value={formik.values.roleId}
          onChange={formik.handleChange}
          error={formik.touched.roleId && Boolean(formik.errors.roleId)}
          
        >
          <MenuItem value={1}>Admin</MenuItem>
          <MenuItem value={2}>User</MenuItem>
        </Select>
        <Button color="secondary" variant="contained" fullWidth type="submit">
          Edit
        </Button>
      </form>
    </Box>
  );
}
