import React, {useState, useEffect} from 'react'
import {Box, Link} from '@mui/material'
import httpService from '../../services/httpService'

//{process.env.PUBLIC_URL + '/images/assets/logo.png'}
export default function Logo({sx}) {
  const [logo, setLogo] = useState('')
  const getData = async () => {
    const res = await httpService.get('/organizations')
    setLogo(res.data.image)
  }
  useEffect(()=> {
    getData()
  }, []) 
 
  
  
  return (
    <Box sx={sx}>
        <Link href="/"><img style={{width: '100%'}} src={logo} alt='ONG Logo'/></Link>
    </Box>
  )
}
