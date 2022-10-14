import {
  Container,
  Typography,
  useMediaQuery,
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import httpService from "../../services/httpService";

const About = () => {
  const [members, setMembers] = useState([]);
  const widthMatches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/members");
    setMembers(res.data);
  };
  return (
    <Container maxWidth="xl">
      <Typography
        component="h2"
        variant="h4"
        sx={{ textAlign: "center" }}
        mb={widthMatches ? 6 : 3}
        mt={widthMatches ? 5 : 3}
      >
        ¡Nuestro staff!
      </Typography>
      <Grid container mb={widthMatches ? 8 : 3}>
        <Grid item xs={12} md={7} lg={8}>
          <Typography component="h5" variant="h5">
            {members.length !== 0 && members[0].name}
          </Typography>
          <Typography component="h6" variant="subtitle1">
            Administrador
          </Typography>
          <Typography variant="subtitle2" mt={{ xs: 1, md: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eius
            asperiores. Ea beatae dolores reiciendis similique porro explicabo
            sequi, tempore officiis facere assumenda distinctio recusandae sed
            rerum maxime eius provident! Provident maiores reiciendis
            perspiciatis deleniti nobis et placeat, doloremque, ratione autem
            tenetur dignissimos magnam facere eum totam neque iusto
            reprehenderit harum nostrum ut cupiditate! Dolorem, laudantium.
            Distinctio vitae consectetur ipsum? Ratione est adipisci rerum
            dolore rem, obcaecati eligendi provident eaque quia quam, quas
            velit. Corrupti pariatur explicabo temporibus quo architecto
            veritatis tenetur adipisci quas, saepe incidunt ducimus ratione
            molestias sed. Quos error dolorem officiis distinctio ea nostrum
            aliquam possimus ipsum dolores autem, voluptatibus nihil,
            exercitationem beatae cum nesciunt minima! Consequatur et accusamus
            minima vero totam accusantium voluptates tempora aliquam nesciunt!
          </Typography>
          <Button
            variant="contained"
            type="submit"
            color="danger"
            sx={{ color: "#fff", marginTop: 3 }}
          >
            ¡Quiero ser parte!
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: { xs: 5, sm: 6, md: 0 },
          }}
        >
          <Box
            component="img"
            src={members.length !== 0 ? members[0].image : ""}
            alt="imagen"
            sx={{
              width: widthMatches ? 280 : 250,
              height: widthMatches ? 300 : 280,
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        mb={10}
      >
        {members.slice(1).map((member) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={2}
            rowSpacing={{ xs: 2, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={member.id}
          >
            <Card
              sx={{
                maxWidth: 250,
                height: widthMatches ? 250 : 280,
                borderRadius: "8px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={widthMatches ? 250 : 280}
                  image={member.image}
                  alt="profile"
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    height: "50px",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {member.name}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
