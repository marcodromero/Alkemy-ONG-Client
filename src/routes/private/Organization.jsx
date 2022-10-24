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

export default function Organization(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [red1Logo, setRed1Logo] = useState("");
    const [red2Logo, setRed2Logo] = useState("");
    const [red3Logo, setRed3Logo] = useState("");
    const [red1Url, setRed1Url] = useState("");
    const [red2Url, setRed2Url] = useState("");
    const [red3Url, setRed3Url] = useState("");
    const [welcomeImage, setWelcomeImage] = useState("");
    const [welcomeTitle, setWelcomeTitle] = useState("");
    
    const titleChange = (event) => {
        setTitle(event.target.value);
    };

    const descriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const welcomeTitleChange = (event) => {
        setWelcomeTitle(event.target.value);
    };

    const welcomeImageChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setWelcomeImage(base64);
            }  
        );
    }

    const logoChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setLogo(base64);
            }  
        );
    }

    const red1LogoChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setRed1Logo(base64);
            }  
        );
    }

    const red2LogoChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setRed2Logo(base64);
            }  
        );
    }

    const red3LogoChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setRed3Logo(base64);
            }  
        );
    }

    const red1UrlChange = (event) => {
        setRed1Url(event.target.value);
    };

    const red2UrlChange = (event) => {
        setRed2Url(event.target.value);
    };

    const red3UrlChange = (event) => {
        setRed3Url(event.target.value);
    };

    const showAlertUpdate = ()=>{
        if(title, logo){
            Swal.fire({
            title: '¿Quieres actualizar los datos de la organización?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axios.put(`/organizations`, {title: title, welcomeTitle: welcomeTitle, description: description, image: logo , welcomeImage: welcomeImage, facebook: red1Logo, linkedin: red2Logo, instagram: red3Logo, facebookUrl: red1Url, linkedinUrl: red2Url, instagramUrl: red3Url  });
                    if(res){
                    Swal.fire('Actualizada', 'Los datos de la organización han sido actualizados.', 'success')
                    }else{
                    Swal.fire('Hubo un problema', 'Los datos de la organización no se pudieron actualizar', 'error')
                    }
                } 
            })
      }
    }

    const getData = ()=>{
            axios.get(`/organizations`)
                .then((response)=>{
                    setTitle(response.data.title);
                    setDescription(response.data.description);
                    setWelcomeTitle(response.data.welcomeTitle);
                    setWelcomeImage(response.data.welcomeImage);
                    setLogo(response.data.image);
                    setRed1Logo(response.data.facebook);
                    setRed2Logo(response.data.linkedin);
                    setRed3Logo(response.data.instagram);
                    setRed1Url(response.data.facebookUrl);
                    setRed2Url(response.data.linkedinUrl);
                    setRed3Url(response.data.instagramUrl);
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
            Organización
            </Typography>

            
            <Box component ="div" sx={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mb: "1.5rem"}}>
                <Box component = "img" src ={logo} sx={{ width:"100px", mb:"1.5rem"}}/>
                <Button variant="contained" component="label" onChange={logoChange} sx={{width: "70px", height: "30px"}} required>
                    Cargar
                    <input hidden accept="image/*" type="file" />
                </Button>
            </Box>
            <TextField
                required
                id="outlined-name"
                label="Nombre de la Organización"
                value={title}
                onChange = {titleChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem"}}
            />
            <TextField
                required
                id="outlined-name"
                label="Título bienvenida"
                value={welcomeTitle}
                onChange = {welcomeTitleChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem"}}
                multiline
                 />
            
            <Box component ="div" sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" ,mb: "1.5rem"}} >
                    <Box component = "img" src ={welcomeImage} sx={{ width:"200px"}} alt="Imágen de Bienvenida"/>
                    <Button variant="contained" component="label" onChange={welcomeImageChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/jpg" type="file" />
                    </Button>
                </Box>
                
                <TextField
                required
                id="outlined-name"
                label="Mensaje de bienvenida"
                value={description}
                onChange = {descriptionChange}
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
            <Box component ="div" sx={{display:"flex", flexDirection: "flex", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" }}>
                    <Box component = "img" src ={red1Logo} sx={{ width:"44px", height: "44px"}}/>
                    <Button variant="contained" component="label" onChange={red1LogoChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/.svg" type="file" />
                    </Button>
                    <Button  variant="contained" component="label" onClick = {()=>setRed1Logo("")}  sx={{width: "70px", height: "30px"}}>
                        Quitar
                    </Button>
                </Box>
                <TextField
                    id="outlined-name"
                    label="Red social 1"
                    value={red1Url}
                    onChange = {red1UrlChange}
                    variant="outlined"
                    autoComplete="off"
                    InputLabelProps={{
                        style: { color: '#000' },
                    }}
                    color = "secondary"
                    fullWidth = {true}
                    sx = {{mb: "auto"}}
                />
            </Box>

            <Box component ="div" sx={{display:"flex", flexDirection: "flex", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" }}>
                    <Box component = "img" src ={red2Logo} sx={{ width:"44px", height: "44px"}}/>
                    <Button variant="contained" component="label" onChange={red2LogoChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/*" type="file" />
                    </Button>
                    <Button  variant="contained" component="label" onClick = {()=>setRed2Logo("")}  sx={{width: "70px", height: "30px"}}>
                        Quitar
                    </Button>
                </Box>
                <TextField
                    id="outlined-name"
                    label="Red social 2"
                    value={red2Url}
                    onChange = {red2UrlChange}
                    variant="outlined"
                    autoComplete="off"
                    InputLabelProps={{
                        style: { color: '#000' },
                    }}
                    color = "secondary"
                    fullWidth = {true}
                    sx = {{mb: "auto"}}
                />
            </Box>
            <Box component ="div" sx={{display:"flex", flexDirection: "flex", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" }}>
                    <Box component = "img" src ={red3Logo} sx={{ width:"44px", height: "44px"}}/>
                    <Button variant="contained" component="label" onChange={red3LogoChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/*" type="file" />
                    </Button>
                    <Button  variant="contained" component="label" onClick = {()=>setRed3Logo("")}  sx={{width: "70px", height: "30px"}}>
                        Quitar
                    </Button>
                </Box>
                <TextField
                    id="outlined-name"
                    label="Red social 3"
                    value={red3Url}
                    onChange = {red3UrlChange}
                    variant="outlined"
                    autoComplete="off"
                    InputLabelProps={{
                        style: { color: '#000' },
                    }}
                    color = "secondary"
                    fullWidth = {true}
                    sx = {{mb: "auto"}}
                />
            </Box>
            <Button type="submit" variant="contained"  onClick = {showAlertUpdate} sx={{mx: "auto", mt: 4, mb: "10px" ,width: "295px", height: "68px", borderRadius: "20px", backgroundColor: "#0038FF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <Typography variant ="caption" sx ={{fontWeight : "600", fontSize: "32px", lineHeight: "48px", fontFamily: "Poppins, sans-serif", color: "#fff", textTransform: "none"}}>Enviar cambios</Typography>
            </Button>            
        </Box>
    );

}
