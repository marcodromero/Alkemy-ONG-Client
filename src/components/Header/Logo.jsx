import React, { useState, useEffect } from "react";
import { Box, Link } from "@mui/material";
/*import axios from '../../services/httpService';*/

export default function Logo({ sx }) {
  /* const [logo, setLogo] = useState("");

  const getData = ()=>{
    axios.get(`/organizations`)
        .then((response)=>{
            setLogo(response.data.image);
        })
  }

  useEffect(()=>{
    getData();
},[]);
*/
  return (
    <Box sx={sx}>
      <Link href="/">
        <img
          style={{ width: "100px" }}
          src={process.env.PUBLIC_URL + "/ong-assets/logo-somosmas3.png"}
          alt="ONG Logo"
        />
      </Link>
    </Box>
  );
}
