import React from 'react'
import TextField from '@mui/material/TextField';
import './styles.css'


const TextingFields = (props) => {
    console.log(props)

  return (
    <div className='formstyle'>
        <TextField className='fields' id="outlined-basic" 
        label={props.label} 
        error={props.error} 
        helperText={props.helperText}
        value={props.values}
         variant="outlined" />
    </div>
  )
}

export default TextingFields