import React, {useState, useEffect} from "react";
import { 
  Container,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import '@fontsource/mulish';
import '@fontsource/poppins';
import axios from '../../services/httpService';
import {useParams} from "react-router-dom";

export default function DetailNew(){
    const [data, setData] = useState(null);
    const {id} = useParams();
 
   async function getData(){
      const res = await axios.get(`/news/${id}`);
      setData(res.data.data);
    }

    useEffect(()=>{
      getData()
    },[]);

    return(
        <Container>
          {data ? 
           <Stack sx= {{width: "684px", mx:"auto", mb: 5}}>
            <Typography variant = "h4" sx = {{mt: 3, fontWeight : "700", fontSize: "40px", lineHeight: "50px"}}> {data.name} </Typography>
            <Typography  paragraph = {true} sx = {{mt: 2, fontWeight : "400", fontSize: "20px", lineHeight: "25px", fontFamily: "Mulish, sans-serif"}}> {data.content} </Typography>
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