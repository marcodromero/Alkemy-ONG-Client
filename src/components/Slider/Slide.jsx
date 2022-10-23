import { Box, Typography } from "@mui/material";
import React from "react";
import SkeletonImage from "./SkeletonImage";
import "./Slider.css";
export default function Slide({ imageUrl, text, index, next }) {
  const [imgLoaded, setImgLoaded] = React.useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box className="img-wrapper">
        <img
          className="img-slide"
          src={imageUrl}
          onLoad={() => setImgLoaded(true)}
          alt={`Novedad ${index + 1}`}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h2" variant="subtitle1" textAlign="center">
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
