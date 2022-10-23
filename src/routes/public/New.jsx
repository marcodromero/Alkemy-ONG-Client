import React, { useEffect, useState } from "react";
import {
  CardActionArea,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  ButtonBase,
} from "@mui/material";
import axios from "../../services/httpService";
import { useNavigate, Link } from "react-router-dom";
import parse from "html-react-parser";
import Slider from "../../components/Slider";
export default function New() {
  const [data, setData] = useState(null);
  const widthMatches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  async function getData() {
    const res = await axios.get("/news");
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginBottom: widthMatches ? 12 : 5 }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{ textAlign: "center" }}
        mt={widthMatches ? 5 : 3}
        mb={widthMatches ? 5 : 3}
      >
        Novedades
      </Typography>
      <Slider />
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data?.map((element) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={element.id}>
            <Card sx={{ maxWidth: 345, height: 415, mx: "auto" }}>
              <ButtonBase component={Link} to={`/news/${element.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={element.image}
                    alt={element.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {element.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "98px",
                      }}
                    >
                      {parse(element.content)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </ButtonBase>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="danger"
        sx={{ marginTop: widthMatches ? 6 : 3, color: "#fff" }}
        onClick={() => navigate("/")}
      >
        Ir al inicio
      </Button>
    </Container>
  );
}
