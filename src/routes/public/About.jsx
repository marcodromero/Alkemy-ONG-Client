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
import "@fontsource/poppins";
import "@fontsource/mulish";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [members, setMembers] = useState([]);
  const [focusMember, setFocusMember] = useState("");
  const widthMatches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/members");
    setMembers(res.data);
    setFocusMember(res.data[0]);
  };
  return (
    <Container maxWidth="xl">
      <Typography
        component="h2"
        variant="h4"
        sx={{ textAlign: "center", fontFamily:"Poppins, sans-serif", fontSize:"38px", fontWeight:"600" }}
        mb={widthMatches ? 6 : 3}
        mt={widthMatches ? 5 : 3}
      >
        ¡Nuestro staff!
      </Typography>
      <Grid container mb={widthMatches ? 8 : 3} sx={{flexWrap: "wrap-reverse"}}>
        <Grid item xs={12} md={7} lg={8} >
          <Typography component="h5" variant="h5" sx={{fontFamily: "Poppins, sans-serif", fontSize:"30px", fontWeight:"600"}}>
            {members.length !== 0 && focusMember.name}
          </Typography>
          <Typography  variant="h5" sx={{fontFamily: "Poppins, sans-serif", fontSize:"30px", fontWeight:"400"}}>
            {members.length !== 0 && focusMember.rol}
          </Typography>
      
          <Typography variant="subtitle2" mt={{ xs: 1, md: 2 , fontFamily: "Mulish, sans-serif", fontSize: "16px" }} >
            {focusMember.description ||" "}
          </Typography>
          <Button
            onClick={() => navigate("/contact")}
            variant="contained"
            type="submit"
            sx={{ marginTop: 3 , backgroundColor:"#ff0000", borderRadius: "20px", boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.25)", ':hover': {backgroundColor: "blue"} }}
          >
            <Typography sx= {{color: "#fff", fontFamily:"Poppins, sans-serif", fontSize:"22px", fontWeight:"600", textTransform: "capitalize"}} >¡Quiero ser parte!</Typography>
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
            src={members.length !== 0 && focusMember.image}
            alt="imagen"
            sx={{
              width: widthMatches ? 280 : 250,
              height: widthMatches ? 300 : 280,
              borderRadius: "8px",
              objectFit: "cover",
              mb: "1.5rem"
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
              onClick = {()=>{setFocusMember(member); window.scrollTo(0,0)}}
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
