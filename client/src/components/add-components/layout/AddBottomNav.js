import React from 'react';
import '../../../styles/bottomNavAdd.css';
import next from '../../../next.png';
import prev from '../../../prev.png';
import {Link} from 'react-router-dom';


const AddBottomNav = (props) =>{
    return(
        
 <div id = "bottom-nav">
                           <div id="prev-nav"><Link to={props.prevPath} onClick={window.location.reload} id="prev-icon"><img src = {prev} /></Link><p id="prev-label">{props.previous}</p></div>
                                   <div id="delete-btn"><p id="delete-text">DELETE</p></div>           
                <div id="next-nav"><p id="next-label">{props.nextT}</p><Link to={props.nextPath}  id="next-icon"><img 
                    src = {next} alt = "next"/></Link></div>
                </div>
        
               
    )
}

export default AddBottomNav;