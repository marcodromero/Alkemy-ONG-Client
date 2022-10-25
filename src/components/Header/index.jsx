import React, { useEffect } from "react";
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
import {UserContext} from "../../context/UserProvider";
import { useContext } from "react";

import Logo from "./Logo";
import '@fontsource/poppins';

import MenuIcon from "@mui/icons-material/Menu";

import ProfileButton from "./ProfileButton";
import LoginRegister from "./LoginRegister";
import {  NavLink } from "react-router-dom";
import "./Header.css";
const data = [
  { text: "Inicio", route: "/" },
  { text: "Nosotros", route: "/about" },
  { text: "Novedades", route: "/news" },
  { text: "Actividades", route: "/activities" },
  { text: "Testimonios", route: "/testimonials" },
  { text: "Contacto", route: "/contact" },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //eslint-disable-next-line
  const {user, isAdmin  } = useContext(UserContext);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(()=> {}, [user]) 
  return (
    <AppBar sx={{ mb: "1rem" }} position="static">
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Logo sx={{ display: { xs: "none", md: "block" }, '& img' : {
            maxHeight: '50px',
          } }} />

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
              {data.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: "capitalize" }}
                >
                  <Typography textAlign="center" sx={{fontFamily: "Poppins, sans-serif"}}>
                    <NavLink className="header-links" to={page.route} end>
                      {page.text}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              flexGrow: 1,
              '& img' : {
                maxHeight: '50px',
              } 
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {data.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                <Typography color="black">
                  <NavLink className="header-links" to={page.route} end>
                    {page.text}
                  </NavLink>
                </Typography>
              </Button>
            ))}
          </Box>

          {user ? (
            <ProfileButton admin={isAdmin} user={user} />
          ) : (
            <LoginRegister />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
