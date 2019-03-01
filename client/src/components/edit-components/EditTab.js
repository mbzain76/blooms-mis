import React from 'react';
import { Link} from 'react-router-dom';
import edit from '../../edit.png';

const EditTab = (props) =>{
  return (
  
<div  className="pageTitleList">
                    <p id="aboutListTitle">{props.pageText}</p>
                   <Link to={`/{props.path}/${props.identifier}`}  style={{gridColumn: '-1', padding: '3.25rem'}}onClick={window.location.reload}><img src={edit} alt ="edit"/></Link> 
                </div>

        )
}

export default EditTab;