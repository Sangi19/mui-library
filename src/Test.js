import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Test() {
  const [name, setName] = useState('')
  return (
    <div>
        <Typography variant='h5' sx={{color:'green'}} >Hello World</Typography>

        <Button variant='outlined' size='large' sx={{margin:2}} color='error' onClick={()=> alert('Button clicked')} >outlined</Button>
        <Button variant='contained'  size='medium' sx={{margin:2}}  color='info' onClick={()=> alert(' info Button clicked')}>contained</Button>
        <Button variant='text' size='large' sx={{margin:2, color:'green'}}  color='primary' onClick={()=> alert(' primary Button clicked')}>text</Button>
      
        <TextField placeholder='Name' type={'text'} variant='filled' sx={{margin:2}} value={name} onChange={(e)=>{setName(e.target.value)}} />
        <TextField placeholder='Email' type={'email'} variant='filled' sx={{margin:2}} />
        <TextField placeholder='password' type={'password'} variant='filled' sx={{margin:2}} />
        <Typography>{name}</Typography>
  
    </div>
  )
}
