import React, { useEffect, useState } from 'react';
import {
    Container,
    Link,
    Typography,
    Divider,
    Box,
    Stack
}from "@mui/material";
import httpService from '../../services/httpService';

export default function Footer(){
    const [data, setData] = useState({});
    useEffect(() => {
        (async()=> {
            try{
                const res = await httpService.get('/organizations')
                setData(res.data)
            }catch(e) {
                console.error(e)
            }
        })()
    })
    // const data = {
    //     title: "ONG",
    //     description: "Description",
    //     image: "https://image.shutterstock.com/image-vector/foundation-logo-ngo-child-education-260nw-1899054808.jpg",
    //     facebook: "https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Microphone-icon.png",
    //     instagram: "https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Microphone-icon.png",
    //     linkedin: "https://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Microphone-icon.png"
    // };
    return(
            <Container  sx = {{backgroundColor: "#C0C0C0", display: "flex", flexDirection: "column", height: "450px", mt: '1.5rem'}} maxWidth ={false}>
                <Box sx = {{mt: 2}}>
                    <Divider>
                        <Box>
                            <Box component ="img" sx = {{width: 80, height: 80, mx: 6}} src = {data.image} alt ="logo"/>
                            <Typography variant = "h6" sx= {{fontSize: 18}}>{data.title}</Typography>
                        </Box>
                    </Divider>
                </Box>
                <Box sx = {{mt: 4, mb: 5, flexWrap: "wrap"}} display="flex" justifyContent="center" alignItems="center" >
                    <Link underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Inicio</Typography></Link>
                    <Link underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Nosotros</Typography></Link>
                    <Link underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Novedades</Typography></Link>
                    <Link underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Testimonios</Typography></Link>
                    <Link underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Contacto</Typography></Link>
                    <Link underline ="none" sx = {{mx: 2, mb: 2, color: "black", zIndex: 1000}} href ="#"><Typography>Contribuye</Typography></Link>
                </Box>
                <Divider/>
                <Box sx = {{mt: 5,}} >
                    <Stack >
                        <Box display="flex" justifyContent="center" alignItems="flex-start">
                            <Link sx = {{mx: 2}} href ="https://www.facebook.com"><Box component ="img" sx = {{width: 44, height: 44, }}  src={data.facebook} alt ="facebook"/></Link>
                            <Link sx = {{mx: 2}} href ="https://www.linkedin.com"><Box component ="img" sx = {{width: 44, height: 44, }}  src={data.linkedin} alt ="linkedin"/></Link>
                            <Link sx = {{mx: 2}} href ="https://www.instagram.com"><Box component ="img" sx = {{width: 44, height: 44, }}  src={data.instagram} alt ="instagram"/></Link>
                        </Box>
                        <Typography sx = {{mt: 1, textAlign: "center"}}>2022 by Alkemy. All Rights Reserved.</Typography>
                    </Stack>
                </Box>
            </Container>   
    );
}