import React from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveGrid from "../../components/ResponsiveGrid";

const BackOffice = () => {
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
        <ResponsiveGrid />
      </Box>
    </>
  );
};

export default BackOffice;
