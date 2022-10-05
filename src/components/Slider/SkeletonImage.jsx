import React from 'react'
import { Box } from '@mui/material'
export default function SkeletonImage() {
  return (
    <Box
        sx={{
            display: "inline-block",
            width : "100%",
            aspectRatio: '7/3',
            height: '100%'
        }}
    >
        <br></br>
    </Box>
  )
}
