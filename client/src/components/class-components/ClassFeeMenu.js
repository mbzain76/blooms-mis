import React from 'react';
import back from '../../back.png';
import {Link} from 'react-router-dom';
import download from '../../download.png';
import edit from '../../edit.png';
import '../../styles/EditFeeMenu.css';

const titles = {
  
  
  height: '34px',
  opacity: 0.5,
  fontSize: '30px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 1.23,
  textAlign: 'left',
  color: '#000000'

}

const locations = {
  

  height: '34px',
  opacity: 0.5,
  fontSize: '30px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontStretch: 'normal',
   textAlign: 'left',
  color: '#000000'

}

const backIcon = {
  position: 'absolute',
  left: '107px',
  top: '63px'
}

const title = {
position: 'absolute',
left: '162px',
top: '23px',
width: '500px',
height: '34px',
opacity: 0.5,
fontSize: '30px',
fontWeight: 'bold',
fontStyle: 'normal',
fontStretch: 'normal',
lineHeight: 1.23,
letterSpacing: 'normal',
textAlign: 'left',
color: '#000000'
}

const downloadIcon ={
  position: 'absolute',
  left: '91.4%',
  top:'55px',
  width: '25px',
  height: '25px',
  objectFit: 'contain',
  cursor: 'pointer'
}
const editIcon = {
  position: 'absolute',
  left: '96.4%',
  top: '55px', 
  width: '25px',
  height: '25px',
  objectFit: 'contain'

}
const ClassFeeMenu = (props) =>{
    return(

      
    <div className="menu" >
       
       <Link to={"/home"}><img style={backIcon} src={back} /></Link> 
        <p style={title} >{`Students / ${props.path} /`} <strong id="location" style={locations}>Fee Structure</strong></p>
     
 
        <img onClick={()=>{props.printFee()}} style={downloadIcon} src={download}/>
       <Link to={"/edit-class-fee-structure"} onClick={window.location.reload} style={editIcon}><img  src={edit} /></Link> 

   </div>
    
    )
}

export default ClassFeeMenu;