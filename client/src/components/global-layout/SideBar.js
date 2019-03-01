import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import students from '../../students.png';
import Adds from '../../add.png';
import arrow2 from '../../arrow2.png';


 const circle = {
   position: 'absolute',
   top: '5.5%'
 }

 const studentsIcon = {
   position: 'absolute',
   top: '35.9%',
   left: '24px'
 }

 const addIcons = {
   position: 'absolute',
   top: '50.9%',
   left: '24px'
 }

 const emailArrow = {
   position: 'absolute',
   top: '65.1%',
   left: '24px'
 }

const SideBar = (props) =>{

return(  
            <div className="side">
            <span id="circle" style={circle}></span>
              <Link to={"/home"}  style={studentsIcon} onClick={window.location.reload}><span  ><img src={students} /></span> </Link>  
            <Link to={"/adds"}  style={addIcons} onClick={window.location.reload}><span ><img src={Adds} /></span> </Link>  
            <Link to={`${props.emailPath}`} onClick={window.location.reload} style={emailArrow} ><span><img onClick={props.check} src={arrow2} /></span></Link>   
            </div>
       

            )}
            
export default SideBar;            
            