import React from 'react'
import { Card, Paper, Typography ,makeStyles } from '@material-ui/core'

const userStyles = makeStyles( theme =>({
    root:{
        backgroundColor:'#fdfdff',
        
    },
    pageHeader:{
        padding:theme.spacing(3),
        display:'flex',
        marginBottom:theme.spacing(1)
    }, 
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#ff1f5a'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
        
    }
}))

export default function PageHeder(props) {
    const classes = userStyles();
    const { title, subTitle, icon} = props;
    return (
       <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                    
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                    variant= "h6"
                    component= "div"
                    >
                    {title}</Typography>
                    <Typography
                    variant= "subtitle2"
                    component= "div"
                    >
                    {subTitle}</Typography>     
                </div>
                
            </div>
       </Paper> 
    )
}
