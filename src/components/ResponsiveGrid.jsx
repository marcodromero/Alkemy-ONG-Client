import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ReorderIcon from "@mui/icons-material/Reorder";
import MessageIcon from "@mui/icons-material/Message";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const textFiles = [
  {
    title: "Novedades",
    logo: <NewspaperIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/news",
  },
  {
    title: "Actividades",
    logo: <PlaylistAddCheckIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/activities",
  },
  {
    title: "Testimonios",
    logo: <MessageIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/testimonials",
  },

  {
    title: "Organizacion",
    logo: <ApartmentRoundedIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/organization",
  },
  {
    title: "Slides",
    logo: <AccountTreeRoundedIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/slides",
  },
  {
    title: "Usuarios",
    logo: <PeopleRoundedIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/users",
  },

  {
    title: "Miembros",
    logo: <PeopleRoundedIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/members",
  },

  {
    title: "Contactos",
    logo: <ContactsIcon sx={{ fontSize: "50px" }} />,
    route: "/backoffice/contacts",
  },
];

export default function ResponsiveGrid() {
  return (
    <Box sx={{ width: "100%", margin: "auto", paddingTop: "5%", mb: 13 }}>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 7 }}
        rowSpacing={{ xs: 2, sm: 2, md: 3, lg: 7 }}
      >
        {textFiles.map(({ title, logo, route }, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 160,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#172F57", fontSize: "20px" }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "100%",
                  marginTop: "20px",
                  marginBottom: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  color: "#8db9ca",
                }}
              >
                {logo}
              </Box>
              <Box component={Link} to={route} sx={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#26ABE2",
                    color: "#fff",
                    cursor: "pointer",
                    width: "10px",
                    height: "20px",
                    padding: "0px",
                  }}
                >
                  Ir
                </Button>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
