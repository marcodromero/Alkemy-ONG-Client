import { createTheme, ThemeProvider, colors, responsiveFontSizes } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/public/Home";
import New from "./routes/public/New";
import Layout from './components/Layout'
import Contact from "./routes/public/Contact";
import DetailNew from "./routes/public/DetailNew";

import DetailNew from "./routes/public/DetailNew";

import Login from "./routes/public/Login";
import Register from "./routes/public/Register";
let theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[50],
    },
    secondary: {
      main: colors.blue[500]
    },
    neutral: {
      main: colors.grey[400]
    }
  }
})

theme = responsiveFontSizes(theme)
export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/news" element={<Layout />}>
            <Route index element={<New />} />
          </Route>
          <Route path="/news/:id" element={<Layout />}>
            <Route index element={<DetailNew />} />
          </Route>
          <Route path="/contact" element={<Layout />}>
            <Route index element={<Contact />} />
          </Route>
          <Route path="/login" element={<Layout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<Layout />}>
            <Route index element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
