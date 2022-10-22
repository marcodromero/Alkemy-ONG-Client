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
    
    const titleChange = (event) => {
        setTitle(event.target.value);
    };

    const descriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const logoChange = (event) => {
        setLogo(event.target.value);
    };

    const red1LogoChange = (event) => {
        setRed1Logo(event.target.value);
    };

    const red2LogoChange = (event) => {
        setRed2Logo(event.target.value);
    };

    const red3LogoChange = (event) => {
        setRed3Logo(event.target.value);
    };

    const red1UrlChange = (event) => {
        setRed1Url(event.target.value);
    };

    const red2UrlChange = (event) => {
        setRed2Url(event.target.value);
    };

    const red3UrlChange = (event) => {
        setRed3Url(event.target.value);
    };

    const showAlertUpdate = (_id)=>{
        if(title, description){
            Swal.fire({
            title: '¿Quieres actualizar los datos de la organización?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axios.put(`/organizations`, {title: title, description: description, facebookUrl: red1Url, linkedinUrl: red2Url, instagramUrl: red3Url  });
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
                    setLogo(response.data.logo);
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
            }}>
            
            <Typography align="center" variant="h4" component='h1' sx={{
                mb: '1.5rem'
            }}>
            Organización
            </Typography>
            
            <TextField
                required
                id="outlined-name"
                label="Título"
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
                label="Descripción"
                value={description}
                onChange = {descriptionChange}
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
                sx = {{mb: "1.5rem"}}
            />
            <TextField
                required
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
                sx = {{mb: "1.5rem"}}
            />
            <TextField
                required
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
                sx = {{mb: "1.5rem"}}
            />
            <Button type="submit" variant="contained"  onClick = {showAlertUpdate} sx={{alignSelf: "flex-start", mt: 4, width: "295px", height: "68px", borderRadius: "20px", backgroundColor: "#0038FF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                    <Typography variant ="caption" sx ={{fontWeight : "600", fontSize: "32px", lineHeight: "48px", fontFamily: "Poppins, sans-serif", color: "#fff", textTransform: "none"}}>Enviar cambios</Typography>
            </Button>            
        </Box>
    );

}
