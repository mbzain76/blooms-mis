import React from 'react';
import '../../styles/ClassListSubTab.css';

const UnpaidFeeSubTab = (props) =>{
    return(
        
         <div  id="page-Title-List">
             <p id="student-List-Title" style={{width: '20rem', position: 'absolute', top: '102px'}}>Unpaid Fees</p>
                <p id="student-List-Count" style={{position:'absolute', top: '200px'}}>{props.number} Students</p></div>
    )
}

export default UnpaidFeeSubTab;