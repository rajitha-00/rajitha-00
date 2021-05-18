import React from 'react'
import { Grid} from '@material-ui/core';
import {useForm,Form} from '../../Components/useForm';
import Controls from '../../Components/controls/Controls'
import * as employeeServices from '../../services/employeeServices'



const intialFValues ={
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate: new Date(),
    isPermanent:false,
}
export default function EmployeeForm() {
   
   
    const genderItems =[
        { id:'male', title:'Male'},
        { id:'female', title:'Female'},
        { id:'other', title:'Other'},
    ]
 
    const validate =() =>{
        let temp ={}
        temp.fullName = values.fullName ?"":"This field is required."
        temp.email =(/$^|.+@..+/).test(values.email)?"":"Email is not valid."
        temp.mobile = values.mobile.length>9?"":"Minimum 10 numbers required."
        temp.departmentId = values.departmentId.length !== 0 ? "" :"This field is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }
    const{
        values,
        // setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }=useForm(intialFValues,true, validate );
    
    const handleSubmit = e =>{
        e.preventDefault()
        if (validate())
            employeeServices.insertEmployee(values)
            resetForm()
    }
    return (
        
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                   <Controls.Input
                   name="fullName"
                   lable="Full Name"
                   value={values.fullName}
                   onChange={handleInputChange}
                   error={errors.fullName}
                />
                <Controls.Input
                   name="email"
                   lable="Email"
                   value={values.email}
                   onChange={handleInputChange}
                   error={errors.email}
                 />
                 <Controls.Input
                   name="mobile"
                   lable="Mobile"
                   value={values.mobile}
                   onChange={handleInputChange}
                   error={errors.mobile}
                 />
                 <Controls.Input
                   name="city"
                   lable="City"
                   value={values.city}
                   onChange={handleInputChange}
                 />
                </Grid>
                <Grid item xs={6}>
                        <Controls.RadioGroup  
                        name="gender"
                        lable= "Gender"
                        value={values.gender}
                        onChange = {handleInputChange}
                        items={genderItems}
                        />
                        
                        <Controls.Select
                        name="departmentId"
                        lable= "Department"
                        value={values.departmentId}
                        onChange = {handleInputChange}
                        options={employeeServices.getDepartmentCollection()}
                        Send message to Public Chat 
                        error = {errors.departmentId} />

                        <Controls.DatePicker 
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                        />
                        <Controls.Checkbox 
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}/>
                        <div>
                            <Controls.Button
                            type="submit"
                            text="Submit"
                            />
                             <Controls.Button
                            color="default"
                            text="Reset"
                            onClick={resetForm}
                            />
                        </div>
                </Grid>
            </Grid>
        </Form> 
        
    )
}
