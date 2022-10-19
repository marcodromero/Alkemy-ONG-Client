import { createTheme, ThemeProvider, colors, responsiveFontSizes } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/public/Home";
import New from "./routes/public/New";
import Layout from './components/Layout'
import Contact from "./routes/public/Contact";
import DetailNew from "./routes/public/DetailNew";
import NewsForm from "./routes/private/NewsForm";

import EditUser from './components/Users/EditUser'

import Login from "./routes/public/Login";
import Register from "./routes/public/Register";
import FullWidthLayout from "./components/Layout/FullWidthLayout";
import BackOffice from "./routes/private/BackOffice";
import Activities from "./routes/public/Activities";
import ActivityDetails from "./components/Activities/ActivityDetails";
import NotFound from "./routes/public/NotFound";
import News from "./routes/private/News";

import SetActivity from "./routes/private/SetActivity";

import Users from "./routes/private/Users";

import UserProvider from './context/UserProvider';
import Auth from "./components/Auth";
import About from "./routes/public/About";

import Testimonials from "./routes/public/Testimonials";
import Testimonial from "./routes/private/Testimonial";
import Contacts from "./routes/private/Contacts";
import Categorie from "./routes/private/Categorie";
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
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/backoffice" element={<Layout />}>
              <Route index element={<Auth> <BackOffice /> </Auth>} />
            </Route>
            <Route path="/backoffice/news-form" element={<Layout />}>
              <Route index element={<Auth><NewsForm /></Auth>} />
            </Route>
            <Route path="/backoffice/news-form/:id" element={<Layout />}>
              <Route index element={<Auth><NewsForm /></Auth>} />
            </Route>
            <Route path="/backoffice/testimonials" element={<Layout />}>
              <Route index element={<Auth><Testimonial /></Auth>} />
            </Route>
            <Route path="/backoffice/activities" element={<Layout />}>
              <Route index element={<Auth><Activities /></Auth>} />
            </Route>
            <Route path="/backoffice/activities/create" element={<Layout />}>
              <Route index element={<Auth><SetActivity /></Auth>} />
            </Route>
            <Route path="/backoffice/activities/edit/:id" element={<Layout />}>
              <Route index element={<Auth><SetActivity /></Auth>} />
            </Route>
            <Route path="/backoffice/activities/:id" element={<Layout />}>
              <Route index element={<Auth><ActivityDetails /></Auth>} />
            </Route>
            <Route path="/backoffice/news" element={<Layout />}>
              <Route index element={<Auth><News /></Auth>} />
            </Route>
            <Route path="/backoffice/users" element={<Layout />}>
              <Route index element={<Auth><Users /></Auth>} />
            </Route>

            <Route path="/backoffice/users/:id" element={<Layout />}>
              <Route index element={<Auth><EditUser /></Auth>} />
            </Route>
            <Route path="/backoffice/contacts" element={<Layout />}>
              <Route index element={<Auth><Contacts /></Auth>} />
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
      </UserProvider>
    </ThemeProvider>
  );
}
