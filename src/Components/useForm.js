import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core';

export  function useForm(intialFValues,validateOnChange=false, validate) {  
    const [values, setValues] = useState(intialFValues) ;
    const [errors, setErrors] = useState({}) ;
    const handleInputChange = e=>{
        const {name,value} = e.target
            setValues({
                ...values,
                [name]: value
        })
        } 
        const resetForm = () => {
            setValues(intialFValues);
            setErrors({})
        } 
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}
const userStyles =makeStyles(theme =>({
    root:{    
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1),
        }
    }
    
}))

export function Form(props) {
    const classes = userStyles();
    const {childern,...other} = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
          {props.children}  
        </form>
    )
}
