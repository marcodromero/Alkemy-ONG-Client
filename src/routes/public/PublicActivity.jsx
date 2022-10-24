import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import httpService from '../../services/httpService'
import parse from 'html-react-parser'
export default function PublicActivity() {
    const [activity, setActivity] = useState({})
    const {id} = useParams()
    const getData = async () => {
        const res = await httpService.get(`/activities/${id}`)
        setActivity(res.data)
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    <Box>
        <Box sx={{
            width: "100%",
            '& img' : {
                width: "100%",
                aspectRatio: '7/2',
                objectFit: 'cover',
            }
        }}>
            <img src={activity.image} alt="imagen de prueba"/>
        </Box>
        <Typography component="h2" variant="h4" sx={{ textAlign: "center" }} mt={5} mb={5}>
            {activity.name}
        </Typography>
        <Typography>
            {parse(activity.content || '')}
        </Typography>
    </Box>
  )
}
