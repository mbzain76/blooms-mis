import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import '../styles/Info-text.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import EmailMenu from '../components/email-components/EmailMenu';
import AddSubTab from '../components/add-components/layout/AddSubTab';
import { BrowserRouter,Link} from 'react-router-dom';
import prev from '../prev.png';
import next from '../next.png';



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
  opacity: 0.4,
  border: 'solid 1px rgba(0,0,0,0.5)'
}

//variables for add-sub-tab
const tabText = "Step 6 of 8: Medical";

//variables for bottom navigation
const nextText = "FEES(BASIC)"
const prevText = "GAURDIAN";
const pathNext = "/addsfee";
const pathPrev = "/addg";
 

class AddMedical extends Component{
   
  onNavClickFunc = () =>{
    localStorage.setItem('medical', JSON.stringify({
     doctorName: document.getElementsByTagName('input')[0].value,
     prefferedHospital: document.getElementsByTagName('input')[1].value,
     doctorContact: document.getElementsByTagName('input')[2].value,
 }))
 
   let pup = JSON.parse(localStorage.getItem('medical'));
   console.log(pup)
  }

    render(){
        return(
          

<div className="parentContainer">
        <GreyBar />
        <div className = "content">
         <EmailMenu text="Add Student" />
            
        <SideBar />
          <div className="main">
            <div className="componentContainer">
                <AddSubTab tab={tabText}/>
            <div className="mainContent">
            <div id="image"></div>
                <div id = "Info-Block">
                     
                <div id="class-level">
                  <h5 style = {titleStyles}>Doctor Name</h5>
                  <input type="text" placeholder="Doctor First Name" style={textBox} />
                  </div>
                  
                <div id="firstName">
                  <h5 style = {titleStyles}>Hospital</h5>
                   <input type="text" placeholder="Hospital" style={textBox} />
                  </div>
                <div id="middleName">
                  <h5 style = {titleStyles}>Doctor phone number</h5>
                   <input type="text" placeholder="Doctor phone number" style={textBox} />
                  </div>
                <div id="lastName">
                  <h5 style = {titleStyles}>Doctor email address</h5>
                   <input type="text" placeholder="Doctor email address" style={textBox} />
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
                  <div id = "bottom-nav">
                           <div id="prev-nav"><Link to={'/addg'} onClick={window.location.reload} id="prev-icon"><img src = {prev} /></Link><p id="prev-label">GUARDIAN</p></div>
                                   <div id="delete-btn"><p id="delete-text">DELETE</p></div>           
                <div id="next-nav"><p id="next-label">FEES (BASIC)</p><Link to={'/addsfee'}  id="next-icon"><img 
                  onClick={
                    () =>{
                      this.onNavClickFunc();
                    }
                  }
                    src = {next} alt = "next"/></Link></div>
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

export default AddMedical;