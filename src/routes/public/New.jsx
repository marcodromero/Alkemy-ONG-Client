import React, { useEffect, useState } from "react";
import {
  CardActionArea,
  Link,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import axios from "../../services/httpService";
import { useNavigate } from "react-router-dom";

export default function New() {
  const url = "http://localhost:3000/news/";
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
        mb={widthMatches ? 6 : 3}
      >
        Novedades
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data?.map((element) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={element.id}>
            <Link href={url + element.id}>
              <Card sx={{ maxWidth: 345 }}>
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
                    <Typography variant="body2" color="text.secondary">
                      {element.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
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
