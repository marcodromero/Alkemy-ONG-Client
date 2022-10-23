import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,  
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpService from "../../services/httpService";
import parse from "html-react-parser";
import { Box } from "@mui/system";
export default function PublicActivities() {
    const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await httpService.get("/activities");
    setActivities(res.data);
  };
  return (
    <Box>
        <Typography component="h2" variant="h4" sx={{ textAlign: "center" }} mt={5} mb={5}>
            Conoce nuestras actividades
        </Typography>
    
    <Grid
      container
      rowSpacing={{ xs: 2, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={activity.id}>
          <Card sx={{
            height: 400,
          }}> 
            <CardMedia
              component="img"
              height="140"
              image={activity.image}
              alt={activity.name}
            />
            <CardContent sx={{
                height: 160,
            }}>
              <Typography gutterBottom variant="h5" component="div">
                {activity.name}
              </Typography>
              <Typography component='label' variant="body2" color="text.secondary">
                {parse(activity.content)}
              </Typography>
            </CardContent>
            <CardActions sx={{
                height: 50,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',

            }}>
              <Button 
                onClick={() => navigate('/activities/' + activity.id)}
              size="small" color="secondary">Ver más</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}
