import React from 'react';
import Del from '../../delete.png';
import exit from '../../exit.png';
import erase from '../../erase.png';
import save from '../../save.png';
import {Link } from 'react-router-dom';
import '../../styles/EditSubTab.css';

const EditSubTab = (props) =>{
    return(
 <div  className="page-Title-Menu">
                    <p id="about-ListTitle">Medical (edit)</p>
                      <img id = "trash-icon"  src = {Del} />
                <img id = "save-icon"  onClick ={this.EditMedicalFunc} src = {save} />
                <img id = "erase-icon"  onClick={this.eraseFields} src = {erase} />
                <Link to={`/abmed/${props.identifier}`} id = "exit-icon" onClick={window.location.reload}><img  src = {exit} /></Link>
                </div>
            
    )
}

export default EditSubTab;