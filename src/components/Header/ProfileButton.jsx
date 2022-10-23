import React, { useEffect } from 'react'
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";
const adminSettings = [

  {
    text: 'Backoffice',
    route: '/backoffice'
  }
]
export default function ProfileButton({}) {
  const {user, isAdmin, logout} = useContext(UserContext)
  const navigate = useNavigate()
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      
  useEffect(()=>{
    
  },[user])
      
      const [anchorElUser, setAnchorElUser] = React.useState(null);    
  return (

    <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.image } />

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' ,
              '& a': {
                textDecoration: 'none',
                color: 'black'
              }
            }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isAdmin && adminSettings.map((setting, i) => (
                  <Link key={i} to={setting.route}>
                <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
                  </Link>
              ))}
              <MenuItem onClick={() => logout()}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
              
            </Menu>
          </Box>
  )
}
