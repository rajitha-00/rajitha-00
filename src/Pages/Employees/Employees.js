import React,{ useState }  from 'react'
import EmployeeForm from "./EmployeeForm"
import PageHeader from '../../Components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper , TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import useTable from "../../Components/useTable"
import * as employeeServices from "../../services/employeeServices"

//



const userStyles = makeStyles( theme =>({
  pageContent:{
    margin: theme.spacing(8),
    padding: theme.spacing(2)
  }
}))
export default function Employees() {
  const classes = userStyles();
  const [records,setRecords]= useState(employeeServices.getAllEmployees())
  const {
    TblContainer
  }=useTable();
    return (
        <>
        <PageHeader
        title = "My first UI"
        subTitle =" Just demo"
        icon = {<PeopleOutlineTwoToneIcon/>}
        />
        <Paper className= {classes.pageContent}>
        <EmployeeForm/>
        {/* <TableContainer>
          <TableBody>
            {
              records.map(item=>(
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer> */}
        </Paper>
        
        </>
    )
}
