import React, {Component} from 'react';
import '../styles/App.css';
import back from '../back.png';
import Del from '../delete.png';
import exit from '../exit.png';
import erase from '../erase.png';
import save from '../save.png';
import axios from 'axios';
import '../styles/StudentList.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import {Link ,BrowserRouter} from 'react-router-dom';
import '../styles/Info-text.css';
import '../styles/EditSubTab.css';
import AboutMenu from '../components/about-components/AboutMenu';
import ChangesSaved from '../components/edit-components/ChangesSaved';
import DraftDeleteSure from '../components/edit-components/DraftDeletedSure';

import DraftDeleted from '../components/edit-components/DraftDeleted';


const titleStyles = {
     width: '15rem',
  height: '21px',
  fontSize: '18px',
  fontWeight: 600,
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000'
}
const infoStyles = {
        width: '15rem',
  height: '21px',
  fontSize: '18px',
  fontWeight: 400,
  opacity: 0.5,    
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000'
}

const textBox = {
     width: '843px',
  height: '42px',
    opacity: 0.7,
  border: 'solid 1px rgba(0,0,0,0.5)'
}

/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);

/* component creation code for editing student below*/
class EditStudent extends Component{
  
     
       state = {
       studentDet: {},
       popUp: 'none',
       display: 'none',
       view: 'none'
   }
   


   componentDidMount(){
       
        axios.get(`http://localhost:5000/students/${id}`).then(res =>{
            console.log(res)
            this.setState({
             studentDet: res.data
            })
       })
   
    }

    //function to toggle popUp view
    showPopUp = () =>{
      this.setState({popUp: 'block'
    })
    }

    //function to hide popUp view
    hidePopUp = () =>{
      this.setState({
        popUp: 'none'
      })
    }

    //function to toggle
    showDDS = () =>{
      this.setState({
        display: 'block'
      })
    }


    
    //function to toggle
    hideDDS = () =>{
      this.setState({
        display: 'none'
      })
    }
    
    
    //function to toggle
    showDD = () =>{
      this.setState({
        view: 'flex'
      })
    }


    
    //function to toggle
    hideDD = () =>{
      this.setState({
        view: 'none'
      })
    }


 checkText = (elementVal, defVal) =>{
     if (elementVal.length <= 0){
         return defVal
     }
     return elementVal
}

  
editStudent = (e) =>{
    console.log(document.getElementsByTagName('input')[0].value)
    console.log(document.getElementsByTagName('input')[1].value)
    console.log(document.getElementsByTagName('input')[2].value)
    console.log(document.getElementsByTagName('input')[3].value)
    console.log(document.getElementsByTagName('input')[4].value)
    console.log(document.getElementsByTagName('input')[5].value)
    console.log(document.getElementsByTagName('input')[6].value)

    axios.put(`http://localhost:5000/students/${id}`, {
      class: this.checkText(document.getElementsByName('classes')[0].value,this.state.studentDet.class),
      firstName: this.checkText(document.getElementById('firstNameIdentifier').value,this.state.studentDet.firstName),
      middleName: this.checkText(document.getElementsByTagName('input')[1].value,this.state.studentDet.middleName),
      lastName: this.checkText(document.getElementsByTagName('input')[2].value,this.state.studentDet.lastName),
      sex: this.checkText(document.getElementsByTagName('input')[3].value,this.state.studentDet.sex),
      dateOfBirth: this.checkText(document.getElementsByTagName('input')[4].value,this.state.studentDet.dateOfBirth),
      nationality: this.checkText(document.getElementsByTagName('input')[5].value,this.state.studentDet.nationality),
      residentialAddress: this.checkText(document.getElementsByTagName('input')[6].value,this.state.studentDet.residentialAddress),
      pickingPoint: this.checkText(document.getElementsByTagName('input')[7].value,this.state.studentDet.pickingPoint),
      fatherFirstName: this.state.studentDet.fatherFirstName,
      fatherMiddleName: this.state.studentDet.fatherMiddleName,
      fatherLastName: this.state.studentDet.fatherLastName,
      fatherContact: this.state.studentDet.fatherContact,
      motherFirstName: this.state.studentDet.motherFirstName,    
      motherMiddleName: this.state.studentDet.motherMiddleName,    
      motherLastName: this.state.studentDet.motherLastName,       
      motherContact: this.state.studentDet.motherContact,    
      email: this.state.studentDet.email,
      postalAddress: this.state.studentDet.postalAddress,
      doctorContact: this.state.studentDet.doctorContact,
      doctorName: this.state.studentDet.doctorName,
      photoURL: this.state.studentDet.photoURL,
      termFeesPayer: this.state.studentDet.termFeesPayer,
      termFeesPayerNumber: this.state.studentDet.termFeesPayerNumber,
      feePaid: this.state.studentDet.feePaid,
      termFeesTotal: this.state.studentDet.termFeesTotal,
      prefferedHospital: this.state.studentDet.prefferedHospital,
      doctorEmail: this.state.studentDet.doctorEmail,
      guardianName: this.state.studentDet.guardianName,
      guardianContact: this.state.studentDet.guardianContact
    
  }).then((res) =>{
   console.log(`updated one student: ${res.data}`);
}).catch(err =>{
   console.log(err)
})

}

  eraseFields = () =>{
      for(let i = 0; i < document.getElementsByClassName('input').length; i++ ){
               document.getElementsByClassName('input')[i].value = ""
      }
 
  }
  
  
    render(){


        return(
         


<div className="parentContainer">
      <GreyBar />
        <div className = "content">
         <AboutMenu pupil={this.state.studentDet}/>
            
         <SideBar />
          <div className="main">
            <ChangesSaved save={this.editStudent} hideView={this.hidePopUp} pathTo={`/abs/${id}`} view={this.state.popUp}/>
            
            <DraftDeleteSure hideViewDDS={this.hideDDS} showDD={this.showDD} viewDDS={this.state.display}/>
            <DraftDeleted  pathTo={`/abs/${id}`} hideViewDD={this.hideDD} viewDD = {this.state.view}/>
            <div className="componentContainer" >
             
            <div className="mainContent">
            <div  className="page-Title-Menu">
                    <p id="about-ListTitle">Basic (edit)</p>
                 
                      <img id = "trash-icon"  onClick={this.showDDS} src = {Del} />
                <img id = "save-icon" src = {save} onClick={ ()=>{
                  this.showPopUp();
                 }} />
                <img id = "erase-icon"  src = {erase} onClick={this.eraseFields} />
                <Link to={`/abs/${id}`} onClick={window.location.reload} id = "exit-icon" ><img src = {exit} /></Link>
                </div>
            <div  id="image"></div>
        <div id = "Info-Block">
                     
                <div id="class-level">
                  <h5 style = {titleStyles}>class</h5>
                  <select stye={textBox} value={ this.state.studentDet.class} name="classes">
  <option value="Day care">Day care</option>
  <option value="Beginner">Beginner</option>
  <option value="PP1">PP1</option>
  <option value="PP2">PP2</option>
  <option value="Grade 1">Grade 1</option>
  <option value="Grade 2">Grade 2</option>
</select>
                  </div>
                <div id="firstName">
                  <h5 style = {titleStyles}>First Name</h5>
                   <input id="firstNameIdentifier" type="text" placeholder={this.state.studentDet.firstName} style={textBox} />
                  </div>
                <div id="middleName">
                  <h5 style = {titleStyles}>Middle Name</h5>
                   <input type="text" placeholder={this.state.studentDet.middleName} style={textBox} />
                  </div>
                <div id="lastName">
                  <h5 style = {titleStyles}>Last Name</h5>
                   <input type="text" placeholder={this.state.studentDet.lastName} style={textBox} />
                  </div>
                <div id="gender">
                  <h5 style = {titleStyles}>sex</h5>
                   <input type="text" placeholder={this.state.studentDet.sex} style={textBox} />
                  </div>
                <div id="dob">
                  <h5 style = {titleStyles}>Date of Birth</h5>
                   <input type="text" placeholder={this.state.studentDet.dateOfBirth} style={textBox} />
                  </div>
                <div id="nationality">
                  <h5 style = {titleStyles}>Nationality</h5>
                   <input type="text" placeholder={this.state.studentDet.nationality} style={textBox} />
                  </div>
                <div id="por">
                    <h5 style = {titleStyles}>Place of Residence</h5>            
                   <input type="text" placeholder={this.state.studentDet.residentialAddress} style={textBox} />
                    </div>
                         
                      <div id="transport">
                  <h5  style = {titleStyles}>Picking Point Transport</h5>            
                   <input type="text" placeholder={this.state.studentDet.pickingPoint} style={textBox} />
                </div>
                  
                  </div>
              
                
                </div>
              </div>
            </div>
        </div>
      </div>
         
            
        )
    }
}

export default EditStudent;