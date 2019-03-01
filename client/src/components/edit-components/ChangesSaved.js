import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';



const popUpBox = {
    margin: 'auto',
    paddingLeft: '25px',
  width: '295px',
  height: '178px',
  backgroundColor:'#ffffff',
  marginLeft: '30rem',
  marginTop: '15rem',
  zIndex: 1 ,
  display: 'grid',
  textAlign: 'center',
  gridTemplateRows: 'repeat(3, 1fr)' 
}



const middle ={
    marginRight: '4rem',
    gridRow: 2,
    gridColumn: 1/-1
}


const buttons ={
    gridRow: 3,
    gridColumn: 1/-1,
    display: 'grid',
    
    gridTemplateColumns: '148px 148px',

}

const buttonCancel = {
    marginLeft: '4px',
    height: '32px',
    position: 'relative',
    left: '6rem',
    textDecoration: 'none',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  
  }

const ChangesSaved = (props) =>{
    return(

            <div style={{

width: '100%',
height: '100vh',
backgroundColor: 'rgba(0, 0, 0, 0.9)',
display: `${props.view}`,
gridColumn: '1/-1',
zIndex: 100
    }}>
    <div style={popUpBox}>
     <p style={middle}>Changes saved succesfully</p>
     <div style={buttons}>
         
         <Link style={buttonCancel} onClick={window.location.reload} to={`${props.pathTo}`}>
         
         <div onClick={() =>{
             
             props.save()

         }}>OK</div>
         </Link>
         
         </div>
    

    </div>
     </div>
      
    )
}

export default ChangesSaved;