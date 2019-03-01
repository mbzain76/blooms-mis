import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import '../../styles/day-care.css';

import  {createFilter} from 'react-search-input'


const KEYS_TO_FILTERS = ['firstName', 'middleName', 'lastName']


const UnpaidFeesList = (props) =>{
   
   let unpaidStudents = props.students.filter(student =>{
    return student.previousTermBalance > 0 
}).map(student => {
    return(
        
            <NavLink  key = {student._id} onClick={window.location.reload} className="studentBlock" to={`/abs/${student._id}` }>
        <input id="check" type="checkbox" value={`${student.firstName} ${student.middleName} ${student.lastName}` } style={{display: `${props.checkVisible}`}}  />
        <p style={{width:'35rem',
           display: 'block',
           height: '28px',
           fontSize: '25px',
           fontWeight: 300,
           fontStyle: 'normal',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#000000',
           marginTop: '49px'
    }} id="studentName">{student.firstName} {student.middleName} {student.lastName}</p>
    </NavLink>
  

    
          )
})


const filteredStuds = unpaidStudents.filter(createFilter(props.view, KEYS_TO_FILTERS)).map(student =>{
    return(
  <HashRouter>

<NavLink  key = {student._id} onClick={window.location.reload} className="studentBlock" to={`/abs/${student._id}` }>
        <input id="check" type="checkbox" value={`${student.firstName} ${student.middleName} ${student.lastName}` }  style={{display: `${props.checkVisible}`}}  />
        <p style={{width:'35rem',
           display: 'block',
           height: '28px',
           fontSize: '25px',
           fontWeight: 300,
           fontStyle: 'normal',
           letterSpacing: 'normal',
           textAlign: 'left',
           color: '#000000',
           marginTop: '49px'
    }} id="studentName">{student.firstName} {student.middleName} {student.lastName}</p>
    </NavLink>
    
  
  </HashRouter>
    )
})
   
    return   props.view.length <= 0 ? unpaidStudents :filteredStuds
    
    
}


export default UnpaidFeesList;