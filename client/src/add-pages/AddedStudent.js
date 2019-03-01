import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {containerStyles} from '../components/edit-components/DraftDeleted';;



const popUpStyles ={
    margin: 'auto',
     width: '547px',
  height: '178px',
  backgroundColor: '#ffffff'
}

const textTitle = {
      width: '160px',
  height: '27px',
  fontSize: '20px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000',
    margin: '15px'
}

const text = {
    width: '399px',
  height: '20px',
  fontSize: '15px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#010101',
margin: '15px',
    
}
 const Btn = {
     margin:'10px',
     marginTop: '35px',
       width: '247px',
  height: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
     cursor: 'pointer'
 }

const AddedStudentPopUp = () =>{
    return(
   <div style={containerStyles}>
          <div style={popUpStyles}>
            <p style={textTitle}>Add new student?</p>
            <p style={text}>This will save the new student into your database. Continue?</p>
           <Link to = {"/added"} onClick={window.location.reload}><button style={Btn}>Save</button>  </Link> 
            <Link to={"/addmed"}><button style={Btn} onClick={window.location.reload}>Back</button> </Link> 
            </div>
        </div>


     
    )
}

export default AddedStudentPopUp;