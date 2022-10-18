import { Delete, Edit } from '@mui/icons-material'
import { Box, colors, Link, Typography } from '@mui/material'
import React from 'react'

export default function ActivityCard({name, image, content , id}) {
  return (
    <Link sx={{
      textDecoration: 'none',
      color: 'unset'
    }}
      href={`${id}`}
    >
    
    <Box sx={{
      margin: '1rem',
      '& .activity-card-img': {
        width: '100%',
        aspectRatio: '3/2',
        objectFit: 'cover'
      }
    }}>
      <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
      }}>
        <Link 
        href={`activities/edit/${id}`}
         sx={{
          
          p: '.5rem',
          color: 'unset',
          textDecoration: 'none',
          transition: '300ms ease-in-out',
          '&:hover': {
            color: colors.blue[500],
          }
        }} >
          <Edit/>
        </Link>
        <Link 
        href={'#'}
         sx={{
          p: '.5rem',
          color: 'unset',
          textDecoration: 'none',
          transition: '300ms ease-in-out',
          '&:hover': {
            color: colors.blue[500],
          }
        }} >
          <Delete/>
        </Link>
      </Box>
      
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
