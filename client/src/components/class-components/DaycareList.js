import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/day-care.css';

import  {createFilter} from 'react-search-input'


const KEYS_TO_FILTERS = ['firstName', 'middleName', 'lastName']


const DaycareList = (props) =>{
    const filteredStuds = props.filtered.filter(createFilter(props.view, KEYS_TO_FILTERS)).map(student =>{
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
               marginTop: '49px',
               listStyle: 'none'
        }} id="studentName">{student.firstName} {student.middleName} {student.lastName}</p>
        </NavLink>
        
            
        
        )
    })
  
   console.log(filteredStuds)


   
    let studentList = props.students.filter(student => student.class === props.classLevel
                                                       ).map(student =>{
        return(
            

<NavLink style={{textDecoration: 'none'}} key = {student._id} onClick={window.location.reload} className="studentBlock" to={`/abs/${student._id}` }>
            <input id="check" type="checkbox" value={student.firstName} style={{display: `${props.checkVisible}`}}  />
            <p style={{width:'35rem',
               display: 'block',
               height: '28px',
               fontSize: '25px',
               fontWeight: 300,
               fontStyle: 'normal',
               textAlign: 'left',
               color: '#000000',
               marginTop: '49px'
        }} id="studentName">{student.firstName} {student.middleName} {student.lastName}</p>
        </NavLink>
        
            
        
        )
    })
   
    return   props.view.length <= 0 ? studentList :filteredStuds
    
    
}


export default DaycareList;