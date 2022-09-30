import React from "react";
import { Box, Button } from "@mui/material";
import {
  Typography,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
const pages = [
  "Login",
  "Registrate",
];
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
          Login
        </Button>
        <Button variant="contained" color="success">
          Registrate
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, flexDirection: "row-reverse"}}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}  sx={{textTransform: "capitalize" }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    </>
  );
}
