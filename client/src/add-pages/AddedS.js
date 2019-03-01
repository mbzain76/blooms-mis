import React from 'react';
import { Link} from 'react-router-dom';
import {containerStyles} from '../components/edit-components/DraftDeleted';
import {okBtnStyles} from '../components/edit-components/DraftDeleted';

const popUpStyles ={
    margin: 'auto',
  width: '295px',
  height: '158.7px',
  backgroundColor: '#f2f2f2'
}


const text = {
  
  width: '208px',
  height: '80px',
  fontSize: '15px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000'
}


const AddedS = () =>{
    return(

<div style={containerStyles}>
          <div style={popUpStyles}>
           <div style = {text}>
             A new student has been added
             Student ID
               First Middle Last
              </div>
          
           
            <Link to={"/home"} onClick={window.location.reload}><button style={okBtnStyles}>OK</button> </Link> 
            </div>
        </div>
  
    
    )
}

export default AddedS;