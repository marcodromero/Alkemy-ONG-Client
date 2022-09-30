import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  IconButton,
  Button,
  MenuItem,
} from "@mui/material";

import Logo from "./Logo";

import MenuIcon from "@mui/icons-material/Menu";

import ProfileButton from "./ProfileButton";
import LoginRegister from "./LoginRegister";

const pages = [
  "Inicio",
  "Nosotros",
  "Novedades",
  "Testimonios",
  "Contacto",
  "Contribuye",
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(false)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: "none", md: "block" } }} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                <MenuItem key={page} onClick={handleCloseNavMenu}  sx={{textTransform: "capitalize" }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center'}}>
            {pages.map((page) => (
              <Button
              
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" , textTransform: "capitalize"}}
                
              >
                {page}
              </Button>
            ))}
          </Box>
            
            {isLogged ? <ProfileButton/> : <LoginRegister/>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
