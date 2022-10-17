import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../features/footer/Footer";
import Header from "../Header";
export default function FullWidthLayout() {
  return (
    <>
      <Header />
      <Box sx={{width: '100vw', p:0, m:0}}>
        <Outlet />
      </Box>
      <Footer/>
    </>
  );
}
