import React from "react";
import { Box, Button, Link } from "@mui/material";
import { Typography, Menu, IconButton, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
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
        <Button sx={{ mr: 1 }} variant="contained">
          <Link sx={{ textDecoration: "none", color: "black" }} href="/login">
            Login
          </Link>
        </Button>
        <Button variant="contained" color="success">
          <Link sx={linkNoDecoration} href="/register">
            Register
          </Link>
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
            <Link key={page.text} sx={linkNoDecoration} href={page.route}>
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
