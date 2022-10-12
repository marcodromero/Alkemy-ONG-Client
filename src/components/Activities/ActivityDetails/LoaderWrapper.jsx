import { Box } from '@mui/material';
import React from 'react'
import { Loader } from "../../../features/loader/Loader";
export default function LoaderWrapper() {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems :'center',
        height: 'calc(100vh - 80px)'

    }}>
        <Loader/>
    </Box>
  )
}
