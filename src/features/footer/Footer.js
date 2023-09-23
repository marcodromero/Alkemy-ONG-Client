import React, { useEffect, useState } from 'react';
import {
    Container,
    Link as MuLink,
    Typography,
    Divider,
    Box,
    Stack
}from "@mui/material";
import httpService from '../../services/httpService';
import '@fontsource/poppins';
import '@fontsource/mulish';
import '@fontsource/montserrat';
import { Link } from "react-router-dom";

export default function Footer(){
    const [data, setData] = useState("");
    useEffect(() => {
        (async()=> {
            try{
                const res = await httpService.get('/organizations')
                setData(res.data)
            }catch(e) {
                console.error(e)
            }
        })()
    }, [])
   
    return(
            <Container  sx = {{backgroundColor: "#C0C0C0", display: "flex", flexDirection: "column", height: "450px", mt: '1.5rem'}} maxWidth ={false}>
                <Box sx = {{mt: 2}}>
                    <Divider>
                        <Box>
                            <Box component ="img" sx = {{width: 130, mx: 6}} src = {data?.image} alt ="logo"/>
                           
                        </Box>
                    </Divider>
                </Box>
                <Box sx = {{mt: 3, mb: 3, flexWrap: "wrap"}} display="flex" justifyContent="center" alignItems="center" >
                    <MuLink component ={Link} to= {"/"} underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Inicio</Typography></MuLink>
                    <MuLink component ={Link} to= {"/about"} underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Nosotros</Typography></MuLink>
                    <MuLink component ={Link} to= {"/news"} underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Novedades</Typography></MuLink>
                    <MuLink component ={Link} to= {"/activities"} underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Actividades</Typography></MuLink>
                    <MuLink component ={Link} to= {"/testimonials"} underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Testimonios</Typography></MuLink>
                    <MuLink component ={Link} to= {"/contact"} underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Contacto</Typography></MuLink>
                </Box>
                <Divider/>
                <Box sx = {{mt: 4,}} >
                    <Stack >
                        <Box display="flex" justifyContent="center" alignItems="flex-start">
                            {data.facebook && <MuLink sx = {{mx: 2, fontFamily: "Poppins, sans-serif"}} href ={data?.facebookUrl}><Box component ="img" sx = {{width: 34, height: 34, }}  src={data?.facebook} /></MuLink> }
                            {data.linkedin && <MuLink sx = {{mx: 2, fontFamily: "Poppins, sans-serif"}} href ={data?.linkedinUrl}><Box component ="img" sx = {{width: 34, height: 34, }}  src={data?.linkedin} /></MuLink> }
                            {data.instagram && <MuLink sx = {{mx: 2, fontFamily: "Poppins, sans-serif"}} href ={data?.instagramUrl}><Box component ="img" sx = {{width: 34, height: 34, }}  src={data?.instagram} /></MuLink> }
                        </Box>
                        <Typography sx = {{mt: 1, textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>2022 by Alkemy. All Rights Reserved.</Typography>
                    </Stack>
                </Box>
            </Container>   
    );
}