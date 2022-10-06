import React from "react";
import { 
  CardActionArea,
  Link,
  Container,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';


export default function New(){
  const url = "http://localhost:3000/news/";
  
  const data = [{
    id: 1,
    name: "Novedad1",
    image: "https://www.gestion.org/wp-content/uploads/2019/03/crear-una-ong-paso-a-paso-999x600.jpg"
  },
  {
    id: 2,
    name: "Novedad2",
    image: "https://www.gestion.org/wp-content/uploads/2019/03/crear-una-ong-paso-a-paso-999x600.jpg"
  }
];
  return(
    <Container fluid = "sm"  >
      <Stack  sx={{ maxWidth: 684, mx:"auto" }} direction = "column" alignItems ="Center" justifyContent ="center" spacing = {4}>
        <Typography variant = "h4" sx = {{mt: 3}}>Novedades</Typography>
        {data.map(element => (
            <Link href= {url+element.id}>
              <Card sx={{ maxWidth: 684 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image= {element.image}
                    alt= {element.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>

        ))}
        <Button variant="contained" color="error">Ir al inicio</Button>
      </Stack>
    </Container>
  );
};


