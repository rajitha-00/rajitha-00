import React from 'react';
import './App.css';
import SideMenu from "./Components/SideMenu";
import{createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from '@material-ui/core';
import Header from './Components/Header';
import Employees from './Pages/Employees/Employees'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#ff1f5a',
      light:'#f6ea8c'
    },
    secondary:{
      main: '#f9ff21',
      light:'#ffa45c'
    },
    background:{
      default:'#fff4e3'
    }
  }
})
const  userStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {


 const classes = userStyles();
 

  return (
    <MuiThemeProvider theme={theme}>
    <SideMenu/>
    <div className={classes.appMain}> 
      <Header/>
      
      <Employees/>
    </div>
    <CssBaseline/> 
    </MuiThemeProvider>    
  );
}

export default App;
