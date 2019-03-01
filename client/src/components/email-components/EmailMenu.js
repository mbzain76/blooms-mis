import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../back.png';
import '../../styles/EmailMenu.css';


const EmailMenu = (props) =>{
 return(
      

<div className="menu-email" >
             <Link to={"/home"} onClick={window.location.reload}><img id="back-Img-email" src={back} alt="previous"/></Link> 
            <div className="title-Menu-email"> 
            <h4 id = "student-Name-email" style={{marginBottom: '23px' }}>{props.text}</h4></div>
             
          
            </div>


      
      
 )
}

export default EmailMenu;