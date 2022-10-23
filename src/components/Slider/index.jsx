import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import httpService from "../../services/httpService";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "@mui/material";
export default function Slider() {
  const [data, setData] = useState([]);
  const widthMatches = useMediaQuery("(min-width:1150px)");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/slides");
    setData(res.data);
  };

  return (
    <Box
      sx={{
        display: widthMatches ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        p: 0,
        maxWidth: "100%",
        mb: 7,
      }}
    >
      <Carousel
        animation="slide"
        navButtonsAlwaysVisible={true}
        sx={{
          width: "100%",
          height: "auto",
        }}
      >
        {data.map((slide, index) => {
          return (
            <Slide key={index} imageUrl={slide.imageUrl} text={slide.text} />
          );
        })}
      </Carousel>
    </Box>
  );
}
