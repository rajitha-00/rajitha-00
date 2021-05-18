import React from 'react'
import {withStyles} from "@material-ui/core";

// withStyles & mankeStyles
const style ={
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position: 'absolute',
        left: '0px',
        background: 'linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25))',
        width:'320px',
        height:'100%',
        zIndex:'10',
        transform: 'translateZ(0)',
    }
}
const SideMenu = (props) =>{
const{classes}  = props; 
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}
export default withStyles(style)(SideMenu);