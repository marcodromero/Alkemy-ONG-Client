import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { useNavigate } from "react-router-dom";

export default function Cover() {
  const navigate = useNavigate();
  return (
    <Paper
    elevation={8}
      sx={{
        width: "90%",
        m: '0 auto',
        boxSizing: "border-box",
        p: 4,
        borderRadius: 4
      }}
    >
      <Grid container spacing={2}>
        
        <Grid item md={12} lg={6} order={{md: 2, lg: 1}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-around'
            }}
          >
            <Typography  component="h2" variant="h2" mt={5} mb={5}>
              <b>Hola, ¡Bienvenidx!</b>
            </Typography>
            <Typography component="p" variant="h6" mt={5} mb={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              repudiandae recusandae enim, atque consequatur placeat fugit
              voluptatem totam rem quidem nam laboriosam quas assumenda neque sunt
              quasi aliquid quisquam impedit!
            </Typography>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  color: '#fff'
                }}
                onClick={() => navigate("/activities")}
              >
                Contactanos
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} lg={6} order={{md: 2, lg: 1}}>
          <Box
            sx={{
              "& img": {
                width: "100%",
                height: "100%",
                aspectRatio: "3/2",
                objectFit: "cover",
                borderRadius: 4,
              },
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/blog-img-02.jpg"}
              alt="cover image"
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
