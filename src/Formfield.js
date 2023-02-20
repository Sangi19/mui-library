import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Formfield() {
    const [inputs, setInputs] = useState({
        name:"",
        email:'',
        password:''
    })

    const hangleChange=(e)=>{
        setInputs({ ...inputs,
        [e.target.name]:e.target.value})
        
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(inputs)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <TextField 
                placeholder='Name' 
                type={'text'} 
                variant='filled' 
                sx={{margin:2}}  
                value={inputs.name} 
                name='name'
                onChange={hangleChange}
            />
            <TextField 
                placeholder='Email' 
                type={'email'} 
                variant='filled' 
                sx={{margin:2}} 
                value={inputs.email}
                name='email'
                onChange={hangleChange}
            />
            <TextField
                placeholder='password'
                type={'password'}
                variant='filled'
                sx={{margin:2}}
                value={inputs.password}
                name='password'
                onChange={hangleChange}
            />
            <Button type='submit'>submit</Button>
        </form>

    </div>
  )
}
