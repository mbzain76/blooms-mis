import React from 'react';
import back from '../../back.png';
import save from '../../save.png';
import {Link} from 'react-router-dom';
import exit from '../../exit.png';
import erase from '../../erase.png';
import '../../styles/EditFeeMenu.css';


const EditFeeMenu = () =>{
    return(
   <div className="menu" >
        <div id="path-container">
          <img onClick={window.location.href="/home"} src={back} id="back-icon"/>
          <p id="path-name">Students / Day care / <strong id="location">Fee Structure</strong></p>
        </div>
        <div id="icons-container">
          <img id="save" src={save} />
          <img id="erase" src={erase}/>
         <Link to={"/class-fee-structure"} onClick={window.location.reload}><img id="exit" src={exit} /></Link> 
        </div>
     </div>
     
        
    )
}

export default EditFeeMenu;