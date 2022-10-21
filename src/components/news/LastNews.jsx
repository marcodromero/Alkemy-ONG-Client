import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NewCard from "./NewCard";
import { useNavigate } from "react-router-dom";

import httpService from '../../services/httpService'

const LastNews = () => {
  const navigate = useNavigate()
  
  const [news, setNews] = React.useState([]);
  useEffect(() => {
    (async () => {
     const res = await httpService.get('/news')
      setNews(res.data)
    })();
  }, [])

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: "32px",
          marginLeft: "10%",
          width: "80%",
          marginTop: 5,
          marginBottom: 5,
          fontWeight: 600,
          display:'flex'
        }}
      >
        Ultimas novedades
        <Button
          onClick={() => navigate('/news')}
          variant="oultine"
          sx={{ textTransform: "capitalize", marginLeft: "auto" }}
        >
          Ver todos <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />{" "}
        </Button>
      </Typography>

      <Box
        sx={{
          maxWidth: "100vw",
          margin: 0,
          position: "initial",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
          gap: 10,
        }}
      >

        {news.slice(0, 2).map(({ content, image, name, id }) => {
          return <NewCard key={id} content={content} name={name} image={image} id={id} />;
        })}
        
      </Box>
    </>
  );
};

export default LastNews;
