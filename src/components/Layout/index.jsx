import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../features/footer/Footer";
import Header from "../Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}
