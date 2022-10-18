import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, colors, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { DeleteAlert } from '../../../../features/alert/Alert'
import parser from 'html-react-parser'
import httpService from '../../../../services/httpService'
export default function ActivityCard({name, image, content , id}) {
  const [showDeleteWarning, setShowDeleteWarning] = React.useState(false)
  
  const initDelete = () => {
    setShowDeleteWarning(true)
  }
  return (
    <>
    <DeleteAlert
    show={showDeleteWarning}
    onConfirm={() => {
      httpService.delete(`/activities/${id}`)
      setShowDeleteWarning(false)
      window.location.reload()
    }}
    onCancel={() => setShowDeleteWarning(false)}
    text='¿Esta seguro que desea eliminar esta actividad?'
    />
    <Paper elevation={4} sx={{
      margin: '.5rem',
      pb: '1rem',
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
        href={`/backoffice/activities/edit/${id}`}
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
        <Button 
        onClick={() => initDelete()}
        sx={{
          pb: '.5rem',
          color: 'unset',
          transition: '300ms ease-in-out',
          '&:hover': {
            color: colors.blue[500],
          }
        }} >
          <Delete/>
        </Button>
      </Box>
       <Link sx={{
         textDecoration: 'none',
      color: 'unset'
    }}
    href={`/backoffice/activities/${id}`}
    >
    
     
      
        <img className="activity-card-img" src={image} alt={name} />
      
      <Typography
      sx={{
        pl: '.5rem',
        pr: '.5rem',
      }}
       variant='h5' component='h3'>
        {name}
      </Typography>
      <Box
      sx={{wordWrap: 'break-word',
      pl: '.5rem',
      pr: '.5rem',
    }}
      >
        {parser(content)}
      </Box>
      
    </Link>
    </Paper>
    </>
  )
}
