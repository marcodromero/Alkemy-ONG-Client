import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Grid,
  Container,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import httpService from "../../services/httpService";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const widthMatches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/testimonials");
    setTestimonials(res.data);
  };

  return (
    <Container maxWidth="xl">
      <Typography
        component="h2"
        variant="h4"
        sx={{ textAlign: "center" }}
        mb={widthMatches ? 4 : 2}
      >
        Testimonios
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={testimonial.id}>
            <Card
              sx={{
                maxWidth: 400,
                maxHeight: 300,
                height: "100%",
                backgroundColor: "#ffc168",
              }}
            >
              <CardHeader
                avatar={<Avatar alt="Img" src={testimonial.image} />}
                action={
                  <IconButton aria-label="profile">
                    <PersonIcon />
                  </IconButton>
                }
                title={testimonial.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box component="div" sx={{ paddingTop: widthMatches ? 4 : 2 }}>
        <Button
          variant="contained"
          type="submit"
          color="danger"
          sx={{ color: "#fff" }}
        >
          ¡Agregar mi testimonio!
        </Button>
      </Box>
    </Container>
  );
};

export default Testimonials;
