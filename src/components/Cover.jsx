import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Cover() {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        boxSizing: "border-box",
        border: "2px solid #FFFFFF",
        outline: "none",
        width: "100%",
        height: "80vh",
        paddingLeft: "9%",
        paddingRight: "9%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "auto",
          }}
        >
          <Typography
            component="div"
            variant="h2"
            sx={{ color: "#000000", fontSize: "48px", fontWeight: 600 }}
          >
            Hola! Bienvenidx
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              marginTop: 2,
              color: "#000000",
              fontSize: "20px",
              fontWeight: "ligth",
              lineHeight: 1.3,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
            dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus
            ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada
            eget turpis. Lacus enim non enim, velit hac turpis interdum arcu.
            Suspendisse at vel ultrices amet orci enim lectus porttitor ut.
          </Typography>
          <Button
            variant="contained"
            color="danger"
            sx={{
              backgroundColor: "#FF0000",
              color: "#fff",
              width: "40%",
              marginTop: 5,
              textTransform: "capitalize",
              fontSize: 24,
              borderRadius: 2,
            }}
            onClick={() => navigate("/contact")}
          >
            Contactanos
          </Button>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: "47%",
          height: "90%",
          borderRadius: 5,
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
        }}
        image={process.env.PUBLIC_URL + "images/blog-img-03.jpg"}
        alt="cover image"
      />
    </Card>
  );
}
