import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
export default function NewCard({  image, name, content, id }) {
  const navigate = useNavigate();
  return (
    <Card
    elevation={8}
      sx={{
        Width: "100%",
        Height: 233,
        maxWidth: "500px",
        maxHeight: 233,
        padding: "2%",
        mt: '1%',
        mb: '1%',
        display: "flex",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        '@media (max-width: 550px)': {
          flexDirection: 'column',
          height: '500px',
          maxHeight: '500px',
        }
      }}
    >
      <CardMedia
        component={"img"}
        image={image}
        src={image}
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
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#000000" }}>
          {parse(content)}
        </Typography>
        <Button
          onClick={() =>  navigate("news/"+id)}
          variant="contained"
          sx={{
            marginTop: "auto",
            width: "100%",
            backgroundColor: colors.lightBlue[500],
            color: "#FFFFFF",
            fontSize: 12,
            '&:hover': {
              backgroundColor: colors.lightBlue[700],
              color: "#FFFFFF",
            },
          }}
        >
          Ver Novedad
        </Button>
      </CardContent>
    </Card>
  );
}
