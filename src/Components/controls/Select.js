import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect,} from '@material-ui/core';


export default function Select(props) {
    const {name, lable , value, error=null, onChange, options} = props;
    return (
        <FormControl variant="outlined"
        {...(error && {error: true})}>
            
            <InputLabel> {lable} </InputLabel>
            < MuiSelect           
            lable = {lable}
            name = {name}
            value= {value}
            onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
                
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
 