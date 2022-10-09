import React from "react";
import { 
  Container,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import '@fontsource/mulish';
import '@fontsource/poppins';

export default function DetailNew(){
    const data = {
        name: "Detalle de Novedad",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem turpis, maximus vitae congue id, sagittis sit amet felis. Suspendisse a nisl neque. Integer nunc orci, ultricies eu ex a, vulputate scelerisque lorem. Maecenas elementum eros et lacus fringilla consectetur. Vestibulum vestibulum a ex eget sagittis. In ut est vel velit lobortis fringilla pulvinar eget dui. Suspendisse potenti. Sed ut sapien in justo condimentum commodo et nec dui. Nulla facilisi. Sed scelerisque lobortis ante, ut rhoncus felis scelerisque quis. Etiam commodo aliquam ultricies.
        Ut ut placerat ligula. Vestibulum hendrerit nisi lorem, ut euismod ante ullamcorper sit amet. Vestibulum blandit non quam eget gravida. Praesent convallis risus tincidunt, rhoncus ex nec, porta diam. Quisque eget magna erat. Vestibulum quis auctor quam. Maecenas quis dictum dolor, ac tincidunt felis. Phasellus vitae felis dolor. Aenean vehicula eros at sapien tincidunt, vel tincidunt nisi viverra. Etiam vehicula vulputate rutrum. Aliquam posuere purus eu mauris lobortis, in maximus augue scelerisque. Phasellus consectetur augue eu ullamcorper tempus. Morbi venenatis feugiat arcu, a maximus mi aliquet ac. Etiam justo nisi, fermentum et feugiat ut, hendrerit non est.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed commodo ex ac justo viverra iaculis. Vestibulum eget est posuere, tincidunt lorem et, imperdiet arcu. Sed rutrum posuere lorem a lacinia. Sed ultricies volutpat commodo. Fusce consectetur dolor et elit suscipit, eu egestas ante hendrerit. Vestibulum ligula lectus, sodales vel urna a, aliquet tincidunt odio. Sed non mattis nunc. Nullam eu urna vitae purus consequat pellentesque quis iaculis ligula. Praesent blandit sed ex non ullamcorper.`
      };
    const idExist = true;

    return(
        <Container>
          {idExist ? 
           <Stack sx= {{width: "684px", mx:"auto", mb: 5}}>
            <Typography variant = "h4" sx = {{mt: 3, fontWeight : "700", fontSize: "40px", lineHeight: "50px"}}> {data.name} </Typography>
            <Typography  paragraph = "1" sx = {{mt: 2, fontWeight : "400", fontSize: "20px", lineHeight: "25px", fontFamily: "Mulish, sans-serif"}}> {data.content} </Typography>
            <Button variant="contained" sx={{mt: 4, width: "200px", height: "68px", borderRadius: "20px", backgroundColor: "#ff0000", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                <Typography variant ="caption" sx ={{fontWeight : "600", fontSize: "32px", lineHeight: "48px", fontFamily: "Poppins, sans-serif", color: "#fff", textTransform: "none"}}>Ir al inicio</Typography>
            </Button>
           </Stack>
           :
           <Stack sx= {{width: "684px", mx:"auto", mb: 5}}>
            <Typography variant = "h4" sx = {{mt: 3, fontWeight : "700", fontSize: "40px", lineHeight: "50px"}}> Página no encontrada </Typography>
            <Button variant="contained" sx={{mt: 4, width: "200px", height: "68px", borderRadius: "20px", backgroundColor: "#ff0000", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                <Typography variant ="caption" sx ={{fontWeight : "600", fontSize: "32px", lineHeight: "48px", fontFamily: "Poppins, sans-serif", color: "#fff", textTransform: "none"}}>Ir al inicio</Typography>
            </Button>
           </Stack>
          }
        </Container>
    );
}