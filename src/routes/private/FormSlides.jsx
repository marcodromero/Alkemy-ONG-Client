import React, { useEffect, useState} from "react";
import { 
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import axios from '../../services/httpService';
import { convertToBase64 } from "../../features/utils";
import Swal from "sweetalert2";

export default function FormSlides(){
    const [slide1Img, setSlide1Img] = useState("");
    const [slide2Img, setSlide2Img] = useState("");
    const [slide3Img, setSlide3Img] = useState("");
    const [slide4Img, setSlide4Img] = useState("");
    const [slide1Text, setSlide1Text] = useState("");
    const [slide2Text, setSlide2Text] = useState("");
    const [slide3Text, setSlide3Text] = useState("");
    const [slide4Text, setSlide4Text] = useState("");

    const slide1TextChange = (event) => {
        setSlide1Text(event.target.value);
    };
    const slide2TextChange = (event) => {
        setSlide2Text(event.target.value);
    };
    const slide3TextChange = (event) => {
        setSlide3Text(event.target.value);
    };
    const slide4TextChange = (event) => {
        setSlide4Text(event.target.value);
    };

    const slide1ImgChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setSlide1Img(base64);
            }  
        );
    }
    const slide2ImgChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setSlide2Img(base64);
            }  
        );
    }
    const slide3ImgChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setSlide3Img(base64);
            }  
        );
    }
    const slide4ImgChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setSlide4Img(base64);
            }  
        );
    }

    const showAlertUpdate = ()=>{
        if(slide1Img, slide2Img, slide3Img, slide4Img, slide1Text, slide2Text, slide3Text, slide4Text){
            Swal.fire({
            title: '¿Quieres actualizar el contenido de los Slides?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res1 = await axios.put(`/slides/1`, { imageUrl: slide1Img,  text: slide1Text});
                    const res2 = await axios.put(`/slides/2`, { imageUrl: slide2Img,  text: slide2Text});
                    const res3 = await axios.put(`/slides/3`, { imageUrl: slide3Img,  text: slide3Text });
                    const res4 = await axios.put(`/slides/4`, { imageUrl: slide4Img,  text: slide4Text });

                    if(res1,res2,res3,res4){
                    Swal.fire('Actualizada', 'Los Slides han sido actualizados.', 'success')
                    }else{
                    Swal.fire('Hubo un problema', 'Los slides no se pudieron actualizar', 'error')
                    }
                } 
            })
      }
    }

    const getData = ()=>{
        axios.get(`/slides`)
            .then((response)=>{
                setSlide1Img(response.data[0].imageUrl);
                setSlide2Img(response.data[1].imageUrl);
                setSlide3Img(response.data[2].imageUrl);
                setSlide4Img(response.data[3].imageUrl);
                setSlide1Text(response.data[0].text);
                setSlide2Text(response.data[1].text);
                setSlide3Text(response.data[2].text);
                setSlide4Text(response.data[3].text);
            })
    }

    useEffect(()=>{
        getData();
        document.getElementById("form").onsubmit = ()=>{return false;};
    },[]);
    

    return(
        <Box component="form" id= "form" sx={{
            mt: "25px",
            mx: "auto",
            maxWidth: "733px",
            display: "flex",
            flexDirection: "column"
            }}>
            
            <Typography align="center" variant="h4" component='h1' sx={{
                mb: '1.5rem'
            }}>
            Slides
            </Typography>

            <Box component ="div" sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" ,mb: "1.5rem"}} >
                    <Box component = "img" src ={slide1Img} sx={{ width:"200px"}} alt="Imágen de Bienvenida"/>
                    <Button variant="contained" component="label" onChange={slide1ImgChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/jpg" type="file" />
                    </Button>
                </Box>
                
                <TextField
                required
                id="outlined-name"
                label="Texto del Slide 1"
                value={slide1Text}
                onChange = {slide1TextChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem", maxWidth: "400px"}}
                multiline
                 />
            </Box>

            <Box component ="div" sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" ,mb: "1.5rem"}} >
                    <Box component = "img" src ={slide2Img} sx={{ width:"200px"}} alt="Imágen de Bienvenida"/>
                    <Button variant="contained" component="label" onChange={slide2ImgChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/jpg" type="file" />
                    </Button>
                </Box>
                
                <TextField
                required
                id="outlined-name"
                label="Texto del Slide 2"
                value={slide2Text}
                onChange = {slide2TextChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem", maxWidth: "400px"}}
                multiline
                 />
            </Box>

            <Box component ="div" sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" ,mb: "1.5rem"}} >
                    <Box component = "img" src ={slide3Img} sx={{ width:"200px"}} alt="Imágen de Bienvenida"/>
                    <Button variant="contained" component="label" onChange={slide3ImgChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/jpg" type="file" />
                    </Button>
                </Box>
                
                <TextField
                required
                id="outlined-name"
                label="Texto del Slide 3"
                value={slide3Text}
                onChange = {slide3TextChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem", maxWidth: "400px"}}
                multiline
                 />
            </Box>

            <Box component ="div" sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" ,mb: "1.5rem"}} >
                    <Box component = "img" src ={slide4Img} sx={{ width:"200px"}} alt="Imágen de Bienvenida"/>
                    <Button variant="contained" component="label" onChange={slide4ImgChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/jpg" type="file" />
                    </Button>
                </Box>
                
                <TextField
                required
                id="outlined-name"
                label="Texto del Slide 4"
                value={slide4Text}
                onChange = {slide4TextChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem", maxWidth: "400px"}}
                multiline
                 />
            </Box>

            <Button type="submit" variant="contained"  onClick = {showAlertUpdate} sx={{mx: "auto", mt: 4, mb: "10px" ,width: "295px", height: "68px", borderRadius: "20px", backgroundColor: "#0038FF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <Typography variant ="caption" sx ={{fontWeight : "600", fontSize: "32px", lineHeight: "48px", fontFamily: "Poppins, sans-serif", color: "#fff", textTransform: "none"}}>Enviar cambios</Typography>
            </Button>         
        </Box>

    );

}