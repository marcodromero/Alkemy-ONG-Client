import { createTheme, ThemeProvider, colors, responsiveFontSizes } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/public/Home";
import New from "./routes/public/New";
import Layout from './components/Layout'
import Contact from "./routes/public/Contact";
import DetailNew from "./routes/public/DetailNew";

import Login from "./routes/public/Login";
import Register from "./routes/public/Register";
import FullWidthLayout from "./components/Layout/FullWidthLayout";
import BackOffice from "./routes/private/BackOffice";
import Activities from "./routes/public/Activities";
import ActivityDetails from "./components/Activities/ActivityDetails";
import NotFound from "./routes/public/NotFound";


import SetActivity from "./routes/private/SetActivity";

import Users from "./routes/private/Users";



import About from "./routes/public/About";

import Testimonials from "./routes/public/Testimonials";

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
    },
    danger: {
      main: colors.red[500],
      dark: colors.red[700]
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
          <Route path="/backoffice" element={<Layout />}>
            <Route index element={<BackOffice />} />
          </Route>
          <Route path="/backoffice/activities" element={<Layout />}>
            <Route index element={<Activities />} />
          </Route>
          <Route path="/backoffice/activities/create" element={<Layout />}>
            <Route index element={<SetActivity />} />
          </Route>
          <Route path="/backoffice/activities/edit/:id" element={<Layout />}>
            <Route index element={<SetActivity />} />
          </Route>
          <Route path="/backoffice/activities/:id" element={<Layout />}>
            <Route index element={<ActivityDetails />} />
          </Route>
          <Route path="/backoffice/users" element={<Layout />}>
            <Route index element={<Users />} />
          </Route>
          <Route path="/backoffice/users/:id" element={<Layout />}>
            <Route index element={<EditUser />} />
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
          <Route path="/login" element={<FullWidthLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<FullWidthLayout />}>
            <Route index element={<Register />} />
          </Route>
          <Route path="/about" element={<Layout />}>
            <Route index element={<About />} />
          </Route>
          <Route path="/testimonials" element={<Layout />}>
            <Route index element={<Testimonials />} />
          </Route>
          <Route path="/404" element={<Layout />}>
            <Route index element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
