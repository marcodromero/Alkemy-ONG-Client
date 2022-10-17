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
import { Button, Link } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const textFiles = [
  { title: "Perfil", logo: <PeopleRoundedIcon sx={{ fontSize: "50px" }}/>, route: '/profile' },
];

export default function UserResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, width: "80%", margin: "auto", paddingTop: "5%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 2, md: 8 }}
      >
        {textFiles.map(({ title, logo, route }, index) => (
          <Grid item xs={8} sm={4} md={2} sx={{}} key={index}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 150,
                width: "60%",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#319795", fontSize: "20px" }}
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
                }}
              >
                {logo}
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#319795",
                  cursor: "pointer",
                  width: "10px",
                  height: "20px",
                  padding: "0px",
                }}
              >
                <Link href={route}>Ir</Link>
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
