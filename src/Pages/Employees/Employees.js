import React,{ useState }  from 'react'
import EmployeeForm from "./EmployeeForm"
import PageHeader from '../../Components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper , TableBody, TableCell,TableRow } from '@material-ui/core';
import useTable from "../../Components/useTable"
import * as employeeServices from "../../services/employeeServices"

//



const userStyles = makeStyles( theme =>({
  pageContent:{
    margin: theme.spacing(8),
    padding: theme.spacing(2)
  }
}))
const headCells =[
  {id: 'fullName', label: 'Employee Name'},
  {id: 'email', label: 'Email Address (Personal)'},
  {id: 'mobile', label: 'Mobile Number'},
  {id: 'department', label: 'Department',disableSorting:true},
]
export default function Employees() {
  const classes = userStyles();
  const [records,setRecords]= useState(employeeServices.getAllEmployees())
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  }=useTable(records,);
    return (
        <>
        <PageHeader
        title = "My first UI"
        subTitle =" Just demo"
        icon = {<PeopleOutlineTwoToneIcon/>}
        />
        <Paper className= {classes.pageContent}>
        {/* <EmployeeForm/> */}
        <TblContainer>
          <TblHead/>
          <TableBody>
            {
              recordsAfterPagingAndSorting().map(item =>(
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TblContainer>
        <TblPagination/>
        </Paper>
        
        </>
    )
}
