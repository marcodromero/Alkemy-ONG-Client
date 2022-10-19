import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NewCard from "./NewCard";
import { useNavigate } from "react-router-dom";

const news = [
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat repellendus. Magni necessitatibus harum modi inventore deserunt similique, repellat earum.",
    image: "images/popular-01.jpg",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat repellendus. Magni necessitatibus harum modi inventore deserunt similique, repellat earum.",
    image: "images/popular-02.jpg",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat repellendus. Magni necessitatibus harum modi inventore deserunt similique, repellat earum.",
    image: "images/popular-03.jpg",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, fugiat repellendus. Magni necessitatibus harum modi inventore deserunt similique, repellat earum.",
    image: "images/journal-01.jpg",
  },
];

const LastNews = () => {
  const navigate = useNavigate()
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
          overflowX: "hidden",
          paddingLeft: "10%",
          paddingRight: "10%",
          gap: 10,
        }}
      >
        {news.slice(0, 2).map(({ text, image }) => {
          return <NewCard text={text} image={image} />;
        })}
      </Box>
    </>
  );
};

export default LastNews;
