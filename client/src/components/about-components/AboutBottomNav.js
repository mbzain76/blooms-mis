import React from 'react';
import { Link} from 'react-router-dom';
import '../../styles/bottomNavAbout.css';
import prev from '../../prev.png';
import next from '../../next.png';

const AboutBottomNav = (props) =>{
    return(
                        <div id = "bottom-nav">
                <div id = "nav-prev">
                    <Link to={`${props.prevPath}/${props.identifier}`} onClick={window.location.reload} id="prev-icon">
                        <img src = {prev} />
                    </Link>
                    <p id="prev-text" style={{marginTop: '10px'}}>{props.prev}</p>
                </div>
                <div id = "nav-next" style={{marginRight:'30px'}}>
                <p id="next-text" style={{marginTop: '10px', width: '10rem'}} >{props.next}</p>
                <Link to = {`${props.nextPath}/${props.identifier}`}  onClick={window.location.reload} id="nav-icon"><img  onClick={props.grabem} src = {next} alt = "next"/></Link></div>
                </div>
               
              
    )
}

export default AboutBottomNav;