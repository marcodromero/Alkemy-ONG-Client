import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export default function ActivityCard({name, image, content , id}) {
  return (
    <Link sx={{
      textDecoration: 'none',
      color: 'unset'
    }}
      href={`activities/${id}`}
    >
    
    <Box sx={{
      margin: '1rem',
      '& .activity-card-img': {
        width: '100%',
        aspectRatio: '3/2',
        objectFit: 'cover'
      }
    }}>
      
        <img className="activity-card-img" src={image} alt={name} />
      
      <Typography variant='h5' component='h3'>
        {name}
      </Typography>
      <Typography
      sx={{wordWrap: 'break-word'}}
      >
        {content}
      </Typography>
    </Box>
    </Link>
  )
}
