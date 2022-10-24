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
import { useParams } from "react-router-dom";
import { Send } from "@mui/icons-material";

export default function Organization(){
    const { id } = useParams();
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("nada");
    const [rol, setRol] = useState("");

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const rolChange = (event) => {
        setRol(event.target.value);
    };

    const imageChange = (e) => {
        convertToBase64(e.target.files[0]).then((base64) => {
            setImage(base64);
            }  
        );
    }

    const descriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const showAlertCreate = ()=>{
        if(name, image, description, rol){
            Swal.fire({
            title: '¿Quieres agregar un nuevo miembro?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axios.post(`/members`, {name: name, image: image, description: description, rol: rol});
                    if(res){
                    Swal.fire('Agregado', 'Un nuevo miembro ha sido agregado.', 'success')
                    }else{
                    Swal.fire('Hubo un problema', 'No se ha podido agregar al miembro.', 'error')
                    }
                } 
            })
      }
    }

    const showAlertUpdate = (_id)=>{
        if(name, image, description, rol){
            Swal.fire({
            title: '¿Quieres actualizar los datos del miembro?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axios.put(`/members/${_id}`, {name: name, image: image, description: description, rol: rol});
                    if(res){
                    Swal.fire('Actualizado', 'Los datos del miembro han sido actualizados.', 'success')
                    }else{
                    Swal.fire('Hubo un problema', 'Los datos del miembro no se pudieron actualizar', 'error')
                    }
                } 
            })
      }
    }

    async function getData(_idParam) {
        if (_idParam) {
            axios.get(`/members/${_idParam}`).then((response)=>{
            setData(response.data);
            setName(response.data.name);
            setImage(response.data.image);
            setDescription(response.data.description);
            setRol(response.data.rol);
         })
        }
      }

    useEffect(()=>{
        getData(id);
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
            {data ? "Editar miembro" : "Crear miembro"}
            </Typography>

            <TextField
                required
                id="outlined-name"
                label="Nombre y apellido"
                value={name}
                onChange = {nameChange}
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
                label="Rol"
                value={rol}
                onChange = {rolChange}
                variant="outlined"
                autoComplete="off"
                InputLabelProps={{
                    style: { color: '#000' },
                }}
                color = "secondary"
                fullWidth = {true}
                sx = {{mb: "1.5rem"}}
            />

            <Box component ="div" sx={{display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", columnGap: "15px", mb: "1.5rem"}}>
                <Box component ="div" sx={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap:"15px" ,mb: "1.5rem"}} >
                    <Box component = "img" src ={image} sx={{ width:"200px"}} alt="Imágen de Bienvenida"/>
                    <Button variant="contained" component="label" onChange={imageChange} sx={{width: "70px", height: "30px"}}>
                        Cargar
                        <input hidden accept="image/jpg" type="file" />
                    </Button>
                </Box>
                
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
                    sx = {{mb: "1.5rem", maxWidth: "400px"}}
                    multiline
                 />
            </Box>
            <Button
                type="submit"
                variant="contained"
                component="label"
                sx={{mt: '1.6rem'}}
                endIcon={<Send/>}
                onClick={
                id ? () => {
                        showAlertUpdate(id);
                    }
                    : showAlertCreate
                }
            >
                    Confirmar
            </Button>
        </Box>

    );
}