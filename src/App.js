import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/mulish/400.css";
import { createTheme, ThemeProvider, colors, responsiveFontSizes } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import FullWidthLayout from "./components/Layout/FullWidthLayout";
import BackofficeLayout from './components/Layout/BackofficeLayout';
import UserProvider from './context/UserProvider';
import Auth from "./components/Auth";

// Rutas Públicas
const Home = lazy(() => import("./routes/public/Home"));
const New = lazy(() => import("./routes/public/New"));
const Contact = lazy(() => import("./routes/public/Contact"));
const DetailNew = lazy(() => import("./routes/public/DetailNew"));
const Login = lazy(() => import("./routes/public/Login"));
const Register = lazy(() => import("./routes/public/Register"));
const Activities = lazy(() => import("./routes/public/Activities"));
const PublicActivities = lazy(() => import("./routes/public/PublicActivities"));
const PublicActivity = lazy(() => import("./routes/public/PublicActivity"));
const About = lazy(() => import("./routes/public/About"));
const Testimonials = lazy(() => import("./routes/public/Testimonials"));
const NotFound = lazy(() => import("./routes/public/NotFound"));

// Rutas Privadas / BackOffice
const BackOffice = lazy(() => import("./routes/private/BackOffice"));
const News = lazy(() => import("./routes/private/News"));
const NewsForm = lazy(() => import("./routes/private/NewsForm"));
const SetActivity = lazy(() => import("./routes/private/SetActivity"));
const Users = lazy(() => import("./routes/private/Users"));
const EditUser = lazy(() => import('./components/Users/EditUser'));
const SetTestimonial = lazy(() => import("./routes/private/SetTestimonial"));
const Testimonial = lazy(() => import("./routes/private/Testimonial"));
const Contacts = lazy(() => import("./routes/private/Contacts"));
const Member = lazy(() => import("./routes/private/Member"));
const MemberForm = lazy(() => import("./routes/private/MemberForm"));
const Categories = lazy(() => import("./routes/private/Categorie"));
const Slide = lazy(() => import("./routes/private/Slide"));
const Organization = lazy(() => import("./routes/private/Organization"));
const ActivityDetails = lazy(() => import("./components/Activities/ActivityDetails"));

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
        <Suspense fallback = {<div>Cargando...</div>}>
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
          </Suspense>
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}
