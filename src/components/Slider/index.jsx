import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from "./Slide";

import Carousel from 'react-material-ui-carousel'

const ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
const images = [
  { imageUrl: "https://via.placeholder.com/700x300", text: ipsum },
  { imageUrl: "https://via.placeholder.com/700x300", text: ipsum },
  { imageUrl: "https://via.placeholder.com/700x300", text: ipsum },
];


export default function Slider() {
  // const [isHover, setIsHover] = React.useState(false)
  // const [currentIndex, setCurrentIndex] = React.useState(0)
  // const handleMouseEnter = () => {
  //   setIsHover(true)
    
  // }
  // const handleMouseLeave = () => {
  //   setIsHover(false)

  // }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 0,
        maxWidth: '1200px',
      }}
    >
      <Typography component="h1" variant="h2" sx={{ fontSize: "2.2rem" }}>
        Novedades
      </Typography>
      <Carousel
      animation="slide"
      navButtonsAlwaysVisible={true}
        sx={{
          width: '100%',
          height: 'auto'
        }}
      >
      
        {images.map((slide, index) => {
          return  <Slide key={index} imageUrl={slide.imageUrl} text={slide.text} />
        })}
        </Carousel>
      
      
    </Box>
  );
}
