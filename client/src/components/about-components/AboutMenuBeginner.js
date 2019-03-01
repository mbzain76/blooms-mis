import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../back.png';
import '../../styles/AboutMenu.css';

const AboutMenuBeginner = (props) =>{
 return(
   
<div className="menu-about">
             <Link to={"/class"} onClick={window.location.reload}><img id="back-Img" src={back} alt="previous"/></Link>
            <div className="title-Menu" style={{color: 'rgba(0,0,0,0.5)'}}>
            <p id="navigation-path" >Students / Beginner</p> 
            <h4 id = "studentName" style={{width: '15rem'}}>
            {props.pupil.firstName} {props.pupil.middleName} {props.pupil.lastName}
            </h4>
            </div>
             
          
            </div>
    
     
 )}

export default AboutMenuBeginner;