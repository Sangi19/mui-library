import { Button, Typography } from '@mui/material'
import React from 'react'

export default function Test() {
  return (
    <div>
        <Typography variant='h5' sx={{color:'green'}} >Hello World</Typography>

        <Button variant='outlined' size='large' sx={{margin:2}} color='error' onClick={()=> alert('Button clicked')} >outlined</Button>
        <Button variant='contained'  size='medium' sx={{margin:2}}  color='info' onClick={()=> alert(' info Button clicked')}>contained</Button>
        <Button variant='text' size='large' sx={{margin:2}}  color='primary' onClick={()=> alert(' primary Button clicked')}>text</Button>

    </div>
  )
}
