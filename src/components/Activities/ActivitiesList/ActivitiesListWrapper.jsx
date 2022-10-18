import { Add, Create } from '@mui/icons-material'
import { Box, Button, colors, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import Card from './Card'
export default function ActivitiesListWrapper({data}) {
  return (
    <Box>
      <Box 
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
      }}
      >
        <Link
        sx={{
          p: '.5rem',
          color: 'unset',
          textDecoration: 'none',
          transition: '300ms ease-in-out',
          '&:hover': {
            color: colors.blue[500],
          }
        }}
        href="/backoffice/activities/create">
          <Button variant="contained" color="success" endIcon={<AddIcon />}>
              Agregar
            </Button>
        </Link>
      </Box>
      <Box
          sx={{display: 'grid', gridTemplateColumns : 'repeat(auto-fit, minmax(300px, 1fr))'}}
      >
          {
              data.map((activity) => (
                  <Card key={activity.id} name={activity.name} content={activity.content} image={activity.image} id={activity.id}  />
              ) )
          }
      </Box>
    </Box>
  )
}
