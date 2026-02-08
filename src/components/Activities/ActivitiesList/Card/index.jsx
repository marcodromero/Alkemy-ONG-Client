import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, colors, Paper, Typography } from '@mui/material'
import React from 'react'
import { DeleteAlert } from '../../../../features/alert/Alert'
import parser from 'html-react-parser'
import httpService from '../../../../services/httpService'
import { Link, useNavigate } from 'react-router-dom';
export default function ActivityCard({name, image, content , id}) {
  const [showDeleteWarning, setShowDeleteWarning] = React.useState(false)
  const navigate = useNavigate()
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
      navigate('/backoffice/activities')
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
         '& a' : {
          textDecoration: 'none',
          color: 'unset'
        }
      }}>
        <Link to={`/backoffice/activities/edit/${id}`} >
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
          },
          
          
        }} >
          <Delete/>
        </Button>
      </Box>
       <Link to={`/backoffice/activities/${id}`}>
    
     
      
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
