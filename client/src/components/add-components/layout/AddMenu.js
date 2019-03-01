import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../../back.png';
import '../../../styles/App.css';
import '../../../styles/AddMenu.css';

const AddMenu = () =>{
 return(

<div className="menu" >
             <Link to={"/"} onClick={window.location.reload}><img id="back-img" src={back} alt="previous"/></Link> 
            <div className="title-Menu" style={{color: 'rgba(0,0,0,0.5)'}}> <h4 id = "student-Name" style={{color: 'black', width: '20rem'}}>Add student</h4></div>
             
          
            </div>
 
     
 )
}

export default AddMenu;