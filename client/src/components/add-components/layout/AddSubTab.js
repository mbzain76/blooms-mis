import React from 'react';
import '../../../styles/AddSubTab.css';
import '../../../styles/App.css';
import '../../../styles/StudentFeesPage.css';
import '../../../styles/EditStudentFeesBasic.css';
import '../../../styles/StudentList.css';
import erase from '../../../erase.png';


//styles for component
const tabStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
    background: '#fffff',
    height: '100px'
}

const tabTitle = {
    gridColumn: 1,
    width: '40rem'
}

const eraseStyle = {
    gridColumn: 6,
    marginRight: '35px'
}
//-------->
  const eraseFields = () =>{
     for(let i=0; i < document.getElementsByTagName('input').length; i++){
         document.getElementsByTagName('input')[i].value = ""
     }
  }
  
  
const AddSubTab = (props) =>{
    return(
        <div  style={tabStyle} className="sub-tab" >
                    <p style={tabTitle} id="tab-title" >{props.tab}</p>
                 
                <img style={eraseStyle} id = "erase-icon" onClick={eraseFields} src = {erase} />
                </div>
      
          
    )
}

export default AddSubTab;