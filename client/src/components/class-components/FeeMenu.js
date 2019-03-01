import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../back.png';
import download from '../../download.png';
import edit from '../../edit.png';
import '../../styles/FeeMenu.css';

const FeeMenu = () =>{
 return(

<div className="menu" id="Menu">
            <Link to={"/class"} onClick={window.location.reload}><img id="backImg" src={back} alt="previous"/></Link>
           <div className="titleMenu" style={{color: 'rgba(0,0,0,0.5)'}}><p id="navigation">Students / Day care /</p> <h4 id = "studentName" style={{color: 'black', width: '20rem', position: 'relative', margin: '1.75rem'}}>Fee Structure</h4>
        
        <div style={{gridColumn: '4', gridGap: '0'}}/>
           <img src={download}  style={{ padding: '2rem'}}/>
               <Link to={"edit-class-fee-structure"} onClick={window.location.reload}><img src={edit} style={{ padding: '2rem', marginRight: '15rem'}}/></Link> </div>
        </div>
        
 
 )}

export default FeeMenu;