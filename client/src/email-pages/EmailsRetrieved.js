import React, {Component} from 'react';
import EmailSubTab from '../components/email-components/EmailSubTab';
import EmailMenu from '../components/email-components/EmailMenu';
import '../styles/App.css';
import '../styles/EmailStyles.css';
import '../styles/StudentFeesPage.css';
import '../styles/EmailsRetrieved.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import axios from 'axios';
import {Link } from 'react-router-dom';
 

const cancelText = {
  width: '54px',
  height: '16px',
  fontSize: '14px',
  fontWeight: 600,
  fontStyle: 'normal',
  lineHeight: 1.21,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#44943e',
  marginTop: '12px'
}

const copyTxt = {
  marginTop: '10px',
  marginLeft: '43px',
  width: '38px',
  cursor: 'pointer',
  height: '16px',
  fontSize: '14px',
  fontWeight: 600,
  fontStyle: 'normal',
  lineHeight: 1.21,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#ffffff',
}

const tabText ="Email List";

let selectedStuds = []
export default class EmailsRetrieved extends Component{

  state = {
    students: []
  }
  componentDidMount(){
    axios.get('http://localhost:5000/students').then(res =>{
        console.log(res)
        this.setState({
         students: res.data
        })
    })
  }
   
  
  getStudentEmails = () =>{
   let emailsClass = localStorage.getItem('selected-emails')
   console.log(emailsClass)

   let emailsArr = emailsClass.split(",")
   console.log(emailsArr)

   let selectedEmails = []

   this.state.students.forEach( student => {
     if(emailsArr.includes(student.class) === true){
       console.log(student.email)
       selectedEmails.push(student.email)
       console.log(selectedEmails)

     }

     else if(emailsArr.includes(student.firstName) === true){
       console.log(student.firstName, student.middleName, student.lastName)
       selectedEmails.push(student.email)
       console.log(selectedEmails)
     }
   })

  

  // Create a dummy input to copy the string array inside it
  let dummy = document.createElement("input");

  // Add it to the document
  document.body.appendChild(dummy);

  // Set its ID
  dummy.setAttribute("id", "dummy_id");

  // Output the array into it
  document.getElementById("dummy_id").value= selectedEmails.join(",")

  // Select it
  dummy.select();

  // Copy its contents
  document.execCommand("copy");

  // Remove it as its not needed anymore
  document.body.removeChild(dummy);
    console.log(selectedStuds)
  }
   
  
      render(){    
        this.getStudentEmails()
          return(

<div className="parentContainer">
            <GreyBar />
            <div className = "content">
             <SideBar />
             <EmailMenu />
             <div className="main">
                <div className="componentContainer">
                <EmailSubTab tab={tabText} />
                <div id="center-retrieved">
                  <p id="text-centered"
                   style={{marginTop: '65px'}}
                  >
                        Email addresses have been retrieved successfully
                  </p>  
                  <p id="parent-count"
                   style={{marginTop: '47px'}}
                  ></p>
                  <p id="guardian-count"></p>
                <div id="btn-block" style={{marginTop: '65px'}}>
                        <Link to={"/home"} onClick={window.location.reload} id="cancel-btn" style={{textDecoration:'none'}}><div  ><p style={cancelText}>CANCEL</p></div></Link>
                        <div id="copy-btn" onClick={() =>{this.getStudentEmails()}}><p style={copyTxt}>COPY</p></div>
                
                </div>  
                </div>
                  
                  </div>
          </div></div></div>
         

             )
      }
}