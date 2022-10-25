import React, { useEffect, useState, useContext } from "react";
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
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import parse from "html-react-parser";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  const handleOpen = () => setOpen(true);
  const widthMatches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/testimonials");
    setTestimonials(res.data);
  };

  return (
    <Container maxWidth="xl" sx={{ marginBottom: widthMatches ? 10 : 8 }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{ textAlign: "center" }}
        mt={widthMatches ? 5 : 3}
        mb={widthMatches ? 5 : 3}
      >
        Testimonios
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {testimonials?.map((testimonial) => (
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
                  {parse(testimonial.content)}
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
          onClick={user ? handleOpen : () => navigate("/login")}
        >
          ¡Agregar mi testimonio!
        </Button>
      </Box>
      <Modal
        open={open}
        setOpen={setOpen}
        setTestimonials={setTestimonials}
        testimonials={testimonials}
      />
    </Container>
  );
};

export default Testimonials;
