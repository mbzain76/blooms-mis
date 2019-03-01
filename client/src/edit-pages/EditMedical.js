import React, {Component} from 'react';
import '../styles/App.css';
import axios from 'axios';
import '../styles/StudentList.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import AboutMenu from '../components/about-components/AboutMenu';
import Del from '../delete.png';
import exit from '../exit.png';
import erase from '../erase.png';
import save from '../save.png';
import '../styles/Info-text.css';
import {  Link} from 'react-router-dom';
import '../styles/EditSubTab.css';

import ChangesSaved from '../components/edit-components/ChangesSaved';
import DraftDeleteSure from '../components/edit-components/DraftDeletedSure';

import DraftDeleted from '../components/edit-components/DraftDeleted';


const inputFields = document.getElementsByTagName('input');


const titleStyles = {
     width: '20rem',
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
  opacity: 0.6,
  border: 'solid 1px #000000'
}

/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);

class EditMedical extends Component{
   
           state = {
       studentDet: {},
       popUp: 'none',
       display: 'none',
       view: 'none'
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
   
   
   

   


   componentDidMount(){
       
        axios.get(`http://localhost:5000/students/${id}`).then(res =>{
            console.log(res)
            this.setState({
             studentDet: res.data
            })
       })
   
    }

 eraseFields = () =>{
      for(let i = 0; i < document.getElementsByTagName('input').length; i++ ){
               document.getElementsByTagName('input')[i].value = ""
      }
 
  }
 
  
 checkText = (elementVal, defVal) =>{
     if (elementVal == ""){
         return defVal
     }
     return elementVal
}

  EditMedicalFunc = (e) =>{
    
     axios.put(`http://localhost:5000/students/${id}`, {
        class: this.state.studentDet.class,
        firstName: this.state.studentDet.firstName,
        middleName: this.state.studentDet.middleName,
        lastName:  this.state.studentDet.lastName,
        sex:  this.state.studentDet.sex,
        datOfBirth: this.state.studentDet.dateOfBirth,
        nationality: this.state.studentDet.nationality,
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
        doctorContact: this.checkText(inputFields[3].value,this.state.studentDet.doctorContact),
        doctorName: this.checkText(inputFields[0].value,this.state.studentDet.doctorName),
        photoURL: this.state.studentDet.photoURL,
        termFeesPayer: this.state.studentDet.termFeesPayer,
        termFeesPayerNumber: this.state.studentDet.termFeesPayerNumber,
        feePaid: this.state.studentDet.feePaid,
        termFeesTotal: this.state.studentDet.termFeesTotal,
        prefferedHospital: this.checkText(inputFields[1].value,this.state.studentDet.prefferedHospital),
        doctorEmail: this.state.studentDet.doctorEmail,
        guardianName: this.state.studentDet.guardianName,
        guardianContact: this.state.studentDet.guardianContact
       }).then((res) =>{
       console.log(`updated student: ${res.data}`);
    }).catch(err =>{
      console.log(err)
    })
  
   }
    render(){
        return(
          
               <div className="parentContainer">
     <GreyBar />
        <div className = "content">
        <AboutMenu identifier={id} pupil={this.state.studentDet}/>
            
    <SideBar />
          <div className="main">
          
          <ChangesSaved save={this.EditMedicalFunc} hideView={this.hidePopUp} pathTo={`/abmed/${id}`} view={this.state.popUp}/>
            
            <DraftDeleteSure hideViewDDS={this.hideDDS} showDD={this.showDD} viewDDS={this.state.display}/>
            <DraftDeleted  pathTo={`/abs/${id}`} hideViewDD={this.hideDD} viewDD = {this.state.view}/>
            <div className="componentContainer">
          
            <div className="mainContent">
            <div className="page-Title-Menu">
            <p id="about-ListTitle">Medical (edit)</p>
                <img id = "trash-icon" style={{cursor: 'pointer'}} src = {Del} onClick={this.showDDS}/>
          <img id = "save-icon" style={{cursor: 'pointer'}} src = {save} onClick={this.showPopUp}/>
          <img id = "erase-icon"  style={{cursor: 'pointer'}} src = {erase} onClick={this.eraseFields}/>
          <Link to={`/abmed/${id}`} style={{cursor: 'pointer'}} onClick={window.location.reoad} id = "exit-icon"><img  src = {exit} /></Link>
          </div>
                <div  style={{marginTop: '5rem'}} id = "Info-Block">
                     
                <div id="class-level">
                  <h5 style = {titleStyles}>Doctor Name</h5>
                  <input type="text" placeholder={this.state.studentDet.doctorName ? this.state.studentDet.doctorName : "No record"} style={textBox} />
                  </div>
                   
                <div id="firstName">
                  <h5 style = {titleStyles}>Hospital</h5>
                   <input type="text" placeholder={this.state.studentDet.prefferedHospital ? this.state.studentDet.prefferedHospital : "No record"} style={textBox} />
                  </div>
                <div id="middleName">
                  <h5 style = {titleStyles}>Doctor phone number</h5>
                   <input type="text" placeholder={this.state.studentDet.doctorContact ? this.state.studentDet.doctorContact : "No record"} style={textBox} />
                  </div>
                <div id="lastName">
                  <h5 style = {titleStyles}>Doctor email address</h5>
                   <input type="text" placeholder="N/A" style={textBox} />
                  </div>
                <div id="gender">
                  <h5 style = {titleStyles}>Health Insurance Provider</h5>
                   <input type="text" placeholder="Health Insurance Provider" style={textBox} />
                  </div>
                <div id="dob">
                  <h5 style = {titleStyles}>Allergies </h5>
                   <input type="text" placeholder="Allergies " style={textBox} />
                  </div>
                <div id="nationality">
                  <h5 style = {titleStyles}>Long term condition</h5>
                   <input type="text" placeholder="Long term condition" style={textBox} />
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

export default EditMedical;