import React, {Component} from 'react';
import '../styles/App.css';
import Del from '../delete.png';
import exit from '../exit.png';
import erase from '../erase.png';
import save from '../save.png';
import '../styles/StudentList.css';
import axios from 'axios';
import {Link, BrowserRouter} from 'react-router-dom';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import '../styles/Info-text.css';
import '../styles/EditSubTab.css';
import AboutMenu from '../components/about-components/AboutMenu';

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

const tab = {
  
  width: '358px',
  height: '39px',
  fontSize: '35px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.2,
  textAlign: 'left',
  color: '#000000',
  marginLeft: '27px',
  marginTop: '27px'
}

/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);


class EditGuardian extends Component{
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

  EditGaurdian = (e) =>{
    
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
        email: this.checkText(inputFields[3].value,this.state.studentDet.email),
        postalAddress: this.checkText(inputFields[5].value,this.state.studentDet.postalAddress),
        doctorContact: this.state.studentDet.doctorContact,
        doctorName: this.state.studentDet.doctorName,
        photoURL: this.state.studentDet.photoURL,
        termFeesPayer: this.state.studentDet.termFeesPayer,
        termFeesPayerNumber: this.state.studentDet.termFeesPayerNumber,
        feePaid: this.state.studentDet.feePaid,
        termFeesTotal: this.state.studentDet.termFeesTotal,
        prefferedHospital: this.state.studentDet.prefferedHospital,
        doctorEmail: this.state.studentDet.doctorEmail,
        guardianName: this.checkText(inputFields[0].value,this.state.studentDet.guardianName),
        guardianContact: this.checkText(inputFields[1].value,this.state.studentDet.guardianContact)
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
          
          
          <ChangesSaved  save={this.EditGaurdian} hideView={this.hidePopUp} pathTo={`/abg/${id}`} view={this.state.popUp}/>
            
            <DraftDeleteSure hideViewDDS={this.hideDDS} showDD={this.showDD} viewDDS={this.state.display}/>
            <DraftDeleted  pathTo={`/abs/${id}`} hideViewDD={this.hideDD} viewDD = {this.state.view}/>
            <div className="componentContainer">
              
            <div className="mainContent">
            <div className="page-Title-Menu">
            <p id="about-ListTitle">Guardian (edit)</p>
                <img id = "trash-icon" style={{cursor: 'pointer'}} src = {Del} onClick={this.showDDS}/>
          <img id = "save-icon" style={{cursor: 'pointer'}} src = {save} onClick={this.showPopUp}/>
          <img id = "erase-icon"  style={{cursor: 'pointer'}} src = {erase} onClick={this.eraseFields}/>
          <Link to={`/abg/${id}`} style={{cursor: 'pointer'}} onClick={window.location.reoad} id = "exit-icon"><img  src = {exit} /></Link>
          </div>
              <div id="image"></div>
                <div id = "Info-Block">
                     
                
                <div id="class-level">
                  <h5 style = {titleStyles}>Full Name</h5>
                   <input type="text" placeholder={this.state.studentDet.guardianName} style={textBox} />
                    </div>
                <div id="gender">
                  <h5 style = {titleStyles}>Work phone</h5>
                   <input type="text" placeholder={this.state.studentDet.guardianContact} style={textBox} />
                  </div>
                <div id="dob">
                  <h5 style = {titleStyles}>Home phone</h5>
                   <input type="text" placeholder={this.state.studentDet.guardianContact} style={textBox} />
                  </div>
                <div id="nationality">
                  <h5 style = {titleStyles}>Email address</h5>
                   <input type="text" placeholder={this.state.studentDet.email} style={textBox} />
                  </div>
                <div id="por">
                    <h5 style = {titleStyles}>Place of Residence</h5>            
                   <input type="text" placeholder={this.state.studentDet.residentialAddress} style={textBox} />
                    </div>
                         
                      <div id="transport">
                  <h5  style = {titleStyles}>Postal address</h5>            
                   <input type="text" placeholder={this.state.studentDet.postalAddress} style={textBox} />
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

export default EditGuardian;