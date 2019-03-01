import React from 'react';
import '../../styles/StudentList.css';
import {Link } from 'react-router-dom';
import edit from '../../edit.png';

const AboutSubTab = (props) =>{
    return(
     
    
   <div  className="pageTitleList" style={{height: '100px'}}>
                    <p id="aboutListTitle" style={{marginTop: '30px', marginLeft: '30px'}}>{props.tab}</p>
                   <Link to={`${props.path}/${props.identifier}`}  style={{gridColumn: '-1', marginTop: '30px', marginRight: '30px'}}onClick={window.location.reload}><img src={edit} alt ="edit"/></Link> 
                </div>
     
       
    )
}

export default AboutSubTab;