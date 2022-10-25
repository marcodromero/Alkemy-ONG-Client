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
import BackofficeLayout from './components/Layout/BackofficeLayout'
import SetActivity from "./routes/private/SetActivity";

import Users from "./routes/private/Users";

import UserProvider from './context/UserProvider';
import Auth from "./components/Auth";
import About from "./routes/public/About";
import SetTestimonial from "./routes/private/SetTestimonial";
import Testimonials from "./routes/public/Testimonials";
import Testimonial from "./routes/private/Testimonial";
import Contacts from "./routes/private/Contacts";
import Member from "./routes/private/Member"
import Categories from "./routes/private/Categorie";
import Slide from "./routes/private/Slide";
import Organization from "./routes/private/Organization";
import PublicActivities from "./routes/public/PublicActivities";
import PublicActivity from "./routes/public/PublicActivity";
import MemberForm from "./routes/private/MemberForm";
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
            <Route path="/backoffice" element={<BackofficeLayout />}>
              <Route index element={<Auth> <BackOffice /> </Auth>} />
            </Route>
            <Route path="/backoffice/members" element={<BackofficeLayout />}>
              <Route index element={<Auth> <Member /> </Auth>} />
            </Route>
            <Route path="/backoffice/members/form/" element={<BackofficeLayout />}>
              <Route index element={<Auth> <MemberForm /> </Auth>} />
            </Route>
            <Route path="/backoffice/members/form/:id" element={<BackofficeLayout />}>
              <Route index element={<Auth> <MemberForm /> </Auth>} />
            </Route>
            <Route path="/backoffice/slides" element={<BackofficeLayout />}>
              <Route index element={<Auth> <Slide /> </Auth>} />
            </Route>
            <Route path="/backoffice/news-form" element={<BackofficeLayout />}>
              <Route index element={<Auth><NewsForm /></Auth>} />
            </Route>
            <Route path="/backoffice/news-form/:id" element={<BackofficeLayout />}>
              <Route index element={<Auth><NewsForm /></Auth>} />
            </Route>
            <Route path="/backoffice/testimonials" element={<BackofficeLayout />}>
              <Route index element={<Auth><Testimonial /></Auth>} />
            </Route>
            <Route path="/backoffice/testimonials/create" element={<BackofficeLayout />}>
              <Route index element={<Auth><SetTestimonial /></Auth>} />
            </Route>
            <Route path="/backoffice/testimonials/edit/:id" element={<BackofficeLayout />}>
              <Route index element={<Auth><SetTestimonial /></Auth>} />
            </Route>
            <Route path="/backoffice/activities" element={<BackofficeLayout />}>
              <Route index element={<Auth><Activities /></Auth>} />
            </Route>
            <Route path="/backoffice/activities/create" element={<BackofficeLayout />}>
              <Route index element={<Auth><SetActivity /></Auth>} />
            </Route>
            <Route path="/backoffice/activities/edit/:id" element={<BackofficeLayout />}>
              <Route index element={<Auth><SetActivity /></Auth>} />
            </Route>
            <Route path="/backoffice/activities/:id" element={<BackofficeLayout />}>
              <Route index element={<Auth><ActivityDetails /></Auth>} />
            </Route>
            <Route path="/backoffice/news" element={<BackofficeLayout />}>
              <Route index element={<Auth><News /></Auth>} />
            </Route>
            <Route path="/backoffice/users" element={<BackofficeLayout />}>
              <Route index element={<Auth><Users /></Auth>} />
            </Route>
            <Route path="/backoffice/users/:id" element={<BackofficeLayout />}>
              <Route index element={<Auth><EditUser /></Auth>} />
            </Route>
            <Route path="/backoffice/contacts" element={<BackofficeLayout />}>
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
            <Route path="/activities" element={<Layout />}>
              <Route index element={<PublicActivities />} />
            </Route>
            <Route path="/activities/:id" element={<Layout />}>
              <Route index element={<PublicActivity />} />
            </Route>
            <Route path="/404" element={<Layout />}>
              <Route index element={<NotFound />} />
            </Route>
            <Route path="/backoffice/categories" element={<BackofficeLayout />}>
              <Route index element={<Auth><Categories /></Auth>} />
            </Route>
            <Route path="/activities" element={<Layout />}>
              <Route index element={<Activities />} />
            </Route>
            <Route path="/backoffice/organization" element={<BackofficeLayout />}>
              <Route index element={<Auth><Organization /></Auth>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}
