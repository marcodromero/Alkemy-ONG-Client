import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import "@fontsource/mulish";
import "@fontsource/poppins";
import axios from "../../services/httpService";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailNew() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const widthMatches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  async function getData() {
    const res = await axios.get(`/news/${id}`);
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginBottom: widthMatches ? 17 : 5 }}>
      {data ? (
        <Box>
          <Typography
            component="h2"
            variant="h4"
            sx={{ textAlign: "center" }}
            mb={widthMatches ? 3 : 2}
            mt={widthMatches ? 5 : 3}
          >
            {data.name}
          </Typography>
          <Typography paragraph={true} mb={widthMatches ? 5 : 3}>
            {data.content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                maxWidth: 290,
                height: widthMatches ? 290 : 290,
                borderRadius: "8px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={widthMatches ? 290 : 290}
                  image={data.image}
                  alt="new"
                />
              </CardActionArea>
            </Card>
          </Box>
          <Button
            variant="contained"
            color="danger"
            sx={{ marginTop: widthMatches ? 6 : 3, color: "#fff" }}
            onClick={() => navigate(-1)}
          >
            Volver
          </Button>
        </Box>
      ) : (
        <Button
          variant="contained"
          color="danger"
          sx={{ marginTop: widthMatches ? 6 : 3, color: "#fff" }}
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>
      )}
    </Container>
  );
}
