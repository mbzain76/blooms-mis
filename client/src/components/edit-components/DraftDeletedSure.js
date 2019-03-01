import React from 'react';
import { Link, BrowserRouter} from 'react-router-dom';



const popUpBox = {
    margin: 'auto',
    paddingLeft: '25px',
  width: '547px',
  height: '178px',
  backgroundColor:'#ffffff',
  marginLeft: '30rem',
  marginTop: '15rem',
  zIndex: 1 ,
  display: 'grid',
  gridTemplateRows: 'repeat(3, 1fr)' 
}
const title ={
    gridRow: 1,
    gridColumn: 1/-1,
    marginTop: '19px',
  width: '10rem',
  height: '27px',
  fontSize: '20px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000'

}


const middle ={
    gridRow: 2,
    gridColumn: 1/-1
}


const buttons ={
    gridRow: 3,
    gridColumn: 1/-1,
    display: 'grid',
    
    gridTemplateColumns: '248px 248px',

}

const buttonSave = {
    
  height: '32px',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.2)'

}


const buttonCancel = {
    marginLeft: '4px',
    height: '32px',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  
  }

const DraftDeleteSure = (props) =>{
    return(
            <div style={{

width: '100%',
height: '100vh',
backgroundColor: 'rgba(0, 0, 0, 0.7)',
display: `${props.viewDDS}`,
gridColumn: '1/-1',
zIndex: 100
    }}>
    <div style={popUpBox}>

    <p style={title}>Delete draft?</p>
     <p style={middle}>If you delete this draft, you will not be able to recover it. Do you want 
to continue? </p>
     <div style={buttons}>
         
         <div  style={buttonSave} onClick={
             () =>{
                 props.hideViewDDS()
                 props.showDD()
             }
         }>Delete </div>
         <div onClick={props.hideViewDDS} style={buttonCancel} >Cancel</div>
         
         </div>
    

    </div>
     </div>

            )
}

export default DraftDeleteSure;