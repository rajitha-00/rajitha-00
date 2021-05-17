import React from 'react'
import {Button as MuiButton, makeStyles,} from "@material-ui/core";

const userStyles = makeStyles (theme =>({
    root:{
        margin: theme.spacing(0.5)
    },
    label:{
        textTransform: 'none'
    }
}))
export default function Button(props) {
    const {text, size, color , variant, onClick, ...other}=props;
    const classes = userStyles();
    return (
       <MuiButton
       variant={variant || "contained"}
       sixe={size || "large"}
       color= {color || "primary"}
       onClick={onClick}
       {...other}
       classes={{root:classes.root, label: classes.label}}
        >{text}</MuiButton>
    )
}
