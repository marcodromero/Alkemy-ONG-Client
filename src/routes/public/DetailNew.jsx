import React, { useState, useEffect } from "react";
import { Container, Box, Typography, useMediaQuery, Button } from "@mui/material";
import "@fontsource/mulish";
import "@fontsource/poppins";
import axios from "../../services/httpService";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function DetailNew() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const widthMatches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  async function getData() {
    const res = await axios.get(`/news/${id}`);
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <Container maxWidth="xl" sx={{ marginBottom: widthMatches ? 17 : 5 }}>
      <Box>
        <Box
          sx={{
            width: "100%",
            "& img": {
              width: "100%",
              aspectRatio: "7/2",
              objectFit: "cover",
            },
          }}
        >
          <img src={data?.image} alt="imagen de prueba" />
        </Box>
        <Typography
          component="h2"
          variant="h4"
          sx={{ textAlign: "center" }}
          mt={5}
          mb={5}
        >
          {data.name}
        </Typography>
        <Typography>{parse(data.content || "")}</Typography>
      </Box>
      <Button
        variant="contained"
        color="danger"
        sx={{ marginTop: widthMatches ? 6 : 3, color: "#fff" }}
        onClick={() => navigate(-1)}
      >
        Volver
      </Button>
    </Container>
  );
}
