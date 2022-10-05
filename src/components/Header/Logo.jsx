import React from 'react'
import {Box, Link} from '@mui/material'
export default function Logo({sx}) {
  return (
    <Box sx={sx}>
        <Link href="/"><img style={{width: '100%'}} src={process.env.PUBLIC_URL + '/images/assets/logo.png'} alt='ONG Logo'/></Link>
    </Box>
  )
}
