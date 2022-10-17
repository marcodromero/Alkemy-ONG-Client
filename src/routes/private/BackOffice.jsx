import React, { useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveGrid from "../../components/ResponsiveGrid";
import UserResponsiveGrid from "../../components/UserResponsiveGrid";
import httpService from '../../services/httpService';
const BackOffice = () => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const auth = useCallback(async()=> {
  try{
    const { data } = await httpService.get('/auth/me');
    if(data.user.roleId === 1){
      setIsAdmin(true);
    }
  }catch(e){
    console.log(e)
  }
    // setIsAdmin(data.isAdmin);
  }, [])
  useEffect(() => {
    auth()
  },[auth])
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: " #FFFFFF",
          width: "100%",
          height: "10vh",
        }}
      >
        <MenuIcon sx={{ marginTop: "auto", marginBottom: "auto" }} />
      </Box>
      <Box>
        {isAdmin ? <ResponsiveGrid /> : <UserResponsiveGrid />}
      </Box>
    </>
  );
};

export default BackOffice;
