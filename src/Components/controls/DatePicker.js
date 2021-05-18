import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'


export default function DatePicker(props) {
    const {name, lable, value, onChange} = props;
    const convertToDefEventPara = (name, value) =>({
        target:{
            name, value
        }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline"
            inputVariant="outlined"
            label={ lable}
            name={name}
            value={value}
            onChange={date =>onChange(convertToDefEventPara(name,date))} />
        </MuiPickersUtilsProvider>
    )
}
