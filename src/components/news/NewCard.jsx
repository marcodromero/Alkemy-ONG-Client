import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";



export default function NewCard({  image }) {
  return (
    <Card
      sx={{
        Width: "45%",
        Height: 233,
        maxWidth: "45%",
        maxHeight: 233,
        padding: "2%",
        backgroundColor: "#7E9AFD",
        border: "2px solid #0038FF",
        display: "flex",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component={"img"}
        image={process.env.PUBLIC_URL + image}
        alt="newImage"
        sx={{ width: 196, height: 201, borderRadius: 5 }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 201,
        }}
      >
        <Typography sx={{ fontSize: 12, color: "#000000" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          proin risus cursus elementum sed massa cras sapien placerat. Diam
          integer congue id amet proin. Ullamcorper nibh sit vitae ac
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "auto",
            width: "100%",
            backgroundColor: "#0038FF",
            color: "#FFFFFF",
            fontSize: 12,
          }}
        >
          Ver Novedad
        </Button>
      </CardContent>
    </Card>
  );
}
