import React from 'react'
import { TextField } from '@material-ui/core'


export default function Input(props) {
    
    const {name,lable,value,error= null,onChange} = props
    return (
        <div>
            <TextField 
                    variant= "outlined"
                    name= {name}
                    label = {lable}
                    value={value}
                    onChange = {onChange}
                    {...(error && {error: true, helperText:error})}/>
        </div>
    )
}
 