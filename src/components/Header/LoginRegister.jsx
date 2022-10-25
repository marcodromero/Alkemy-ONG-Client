import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography, Menu, IconButton, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import '@fontsource/poppins';
const pages = [
  {
    text: "Login",
    route: "/login",
  },
  {
    text: "Register",
    route: "/register",
  },
];
const linkNoDecoration = {
  textDecoration: "none",
};
export default function LoginRegister() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Button  component ={Link} to= {"/login"} sx={{ mr: 1 , borderRadius: "20px", border: "1px solid #000", boxShadow: "none"}} variant="contained">
            <Typography sx={{fontFamily: "Poppins, sans-serif"}}>Log in</Typography>
        </Button>
        <Button variant="contained" component ={Link} to= {"/register"}  color="secondary"  sx={{ mr: 1 , borderRadius: "20px", boxShadow: "none", color: "#fff"}}>
          <Typography sx={{fontFamily: "Poppins, sans-serif"}}>Registrate</Typography>
        </Button>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          flexDirection: "row-reverse",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <PersonIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <Link key={page.text} sx={linkNoDecoration} to={page.route}>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ textTransform: "capitalize" }}
              >
                <Typography color={'black'} textAlign="center">{page.text}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
    </>
  );
}
