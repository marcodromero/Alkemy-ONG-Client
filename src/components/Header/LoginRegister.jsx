import React from "react";
import {Box, Button} from '@mui/material'
export default function LoginRegister() {
  return (
    <Box sx={{ display: "flex" }}>
      <Button sx={{mr:1}} variant="contained" >Login</Button>
      <Button variant="contained"  color="success"  >Registrate</Button>
    </Box>
  );
}
