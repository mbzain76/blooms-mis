import React from 'react';
import '../../styles/ClassListSubTab.css';

const ClassListSubTab = (props) =>{
    return(
     
             <div  id="page-Title-List">
             <p id="student-List-Title" style={{
                 position: 'absolute',
                 top: '12%'
             }}>{props.tab}</p>
             <p id="student-Teacher" style={{
                 position: 'relative', top: '30px'           }}>Teacher: Full Name</p>
                <p id="student-List-Count" style={{
                 position: 'relative', top: '-10px'
             }}>{props.number} Students</p></div>
   
         )
}

export default ClassListSubTab;