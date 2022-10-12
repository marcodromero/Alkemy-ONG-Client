import { Box } from '@mui/material'
import React from 'react'
import Card from './Card'
export default function ActivitiesListWrapper({data}) {
  return (
    <Box
        sx={{display: 'grid', gridTemplateColumns : 'repeat(auto-fit, minmax(300px, 1fr))'}}
    >
        {
            data.map((activity) => (
                <Card key={activity.id} name={activity.name} content={activity.content} image={activity.image} id={activity.id}  />
            ) )
        }
    </Box>
  )
}
