import React, {Component} from 'react';
import { Link} from 'react-router-dom';


export const containerStyles = {
  
}

export const popUpStyles = {
    margin: 'auto',
     width: '295px',
  height: '110px',
  backgroundColor: '#f2f2f2'
} 

const text = {
    width: '20rem',
  height: '20px',
  fontSize: '15px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textAlign: 'left',
  margin: '10px'    ,
  color: '#000000'
}

export const okBtnStyles = {
     width: '120px',
  height: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  position: 'relative',
  right: '-10rem',
  bottom: '-1.75rem',
cursor: 'pointer'    ,
textAlign: 'center'
}
const DraftDeletedPopUp = (props) =>{
     return(
         
             <div style = {{
                   display: `${props.viewDD}`,
                   width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 10
             }}>
         <div id="popup" style={popUpStyles}>
             <p style={text}>Draft deleted succesfully.</p>
             <Link to={`${props.pathTo}`} onClick={window.location.reload}><div id="okBtn" style = {okBtnStyles}>OK</div></Link>
             </div>
         </div>  
         
       
     )
}

export default DraftDeletedPopUp;