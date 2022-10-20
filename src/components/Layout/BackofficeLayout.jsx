
import { Container, IconButton } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../features/footer/Footer";
import Header from "../Header";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
export default function BackofficeLayout() {
    const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <IconButton onClick={() => {navigate(-1)}} sx={{color: 'black'}}>
          <ArrowBackIcon/>
        </IconButton>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}
