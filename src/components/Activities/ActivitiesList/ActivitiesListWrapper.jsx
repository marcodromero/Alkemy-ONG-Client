import { Add, Create } from '@mui/icons-material'
import { Box, Button, colors, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';
export default function ActivitiesListWrapper({data}) {
  const navigate = useNavigate()
  return (
    <Box>
      <Box 
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
      }}
      >
       
       
          <Button
           onClick={() => navigate('/backoffice/activities/create')}
           variant="contained" color="success" endIcon={<AddIcon />}>
              Agregar
            </Button>



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
