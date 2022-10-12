import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}
