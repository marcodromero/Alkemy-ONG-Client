import {
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,  
  useMediaQuery
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpService from "../../services/httpService";
import parse from "html-react-parser";
import { Box } from "@mui/system";
export default function PublicActivities() {
    const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const widthMatches = useMediaQuery("(min-width:600px)");

  const getData = async () => {
    const res = await httpService.get("/activities");
    setActivities(res.data);
  };
  return (
    <Box>
        <Typography component="h2"
        variant="h4"
        sx={{ textAlign: "center", fontFamily:"Poppins, sans-serif", fontSize:"38px", fontWeight:"600" }}
        mb={widthMatches ? 6 : 3}
        mt={widthMatches ? 5 : 3}>
            Nuestras actividades
        </Typography>
    
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={activity.id}>
          <Card sx={{ maxWidth: 345, height: 415, mx: "auto" }}>
              <ButtonBase component={Link} to={`/activities/${activity.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={activity.image}
                    alt={activity.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {activity.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        height: "98px",
                      }}
                    >
                      {parse(activity.content)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </ButtonBase>
            </Card>
        </Grid>
      ))}
    </Grid>
    <Button
        variant="contained"
        color="danger"
        sx={{mt: '1.5rem',color: "#fff" }}
        onClick={() => navigate("/")}
      >
        Ir al inicio
      </Button>
    </Box>
  );
}
