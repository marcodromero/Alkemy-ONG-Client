import React from 'react'
import { Box, Typography } from "@mui/material";
import parser from 'html-react-parser';
export default function ActivityWrapper({name, image, content}) {
  return (
    <Box>
      <Box sx={{
        '& img' : {
          width: '100%',
          aspectRatio: '7/3',
          objectFit: 'cover'
        }
      }}>
        <img src={image} alt="" />
      </Box>
      <Typography variant="h4" component="h1" align="center">
        {name}
      </Typography>
      <Typography component='p' sx={{
        maxWidth: '900px',
        m: '0 auto'
      }}>
        {parser(content)}
      </Typography>
    </Box>
  )
}
