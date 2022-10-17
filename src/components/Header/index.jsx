import React, {useEffect} from 'react'
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

import httpService from '../../services/httpService';
import Logo from "./Logo";

import MenuIcon from "@mui/icons-material/Menu";

import ProfileButton from "./ProfileButton";
import LoginRegister from "./LoginRegister";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const data = [
  { text: "Inicio", route: "/" },
  { text: "Nosotros", route: "/about" },
  { text: "Novedades", route: "/news" },
  { text: "Testimonios", route: "/testimonials" },
  { text: "Contacto", route: "/contact" },
  { text: "Contribuye", route: "/help" },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //eslint-disable-next-line

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [isLogged, setIsLogged] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const getData = React.useCallback(async () => {
    try{
      const response = await httpService.get('auth/me');
      setUser(response.data.user);
      setIsLogged(true);
      if(response.data.user.roleId === 1){
        setIsAdmin(true);
      }
      
    }catch(e){
      setIsLogged(false);
      console.log(e);
    }

  }, []);
  useEffect(() => {
    getData();
  }, [getData])

  return (
    <AppBar sx={{ mb: "1rem" }} position="static">
      <Container maxWidth="false">
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
              {data.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: "capitalize" }}
                >
                  <Typography textAlign="center">
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
              flexGrow: 1,
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

          {isLogged ? <ProfileButton admin={isAdmin} user={user}/> : <LoginRegister />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
