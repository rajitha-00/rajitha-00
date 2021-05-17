import React from 'react'
import {AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const userStyles = makeStyles( theme =>({
    root:{
        backgroundColor:'#fff',
        transform: 'translateZ(0)',
        
    },
    searchInput:{
        opacity:'0.6',
        padding:`0px ${ theme.spacing(1)}px` ,
        fontSize:'0.8rem ',
        '&:hover':{
            backgroundColor:'#f2f2f2', 
            borderRadius:'10px',
            border:'1px solid #ffd615'
        },
        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1)
        },
    }
}))

export default function Header() {
    const classes = userStyles();
    return (       
    <AppBar position="static" className ={classes.root}>
        <Toolbar>
            <Grid container
            alignItems='center'>
                
                <Grid item>
                    <InputBase
                    
                    placeholder="Search topics"
                    className={classes.searchInput}
                    startAdornment={<SearchIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item sm></Grid>
                <Grid item>
                    <IconButton>
                        <Badge badgeContent = {4} color="secondary">
                            <NotificationsNoneIcon fontSize="small"/>
                        </Badge>
                    </IconButton>

                    <IconButton>
                        <Badge badgeContent = {3} color="primary">
                            <ChatBubbleOutlineIcon fontSize="small"/>
                        </Badge>
                    </IconButton>

                    <IconButton>
                            <PowerSettingsNewIcon/>                      
                    </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar> 
        
    )
}
