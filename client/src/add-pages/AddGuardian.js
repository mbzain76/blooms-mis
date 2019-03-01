import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import '../styles/Info-text.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import EmailMenu from '../components/email-components/EmailMenu';
import AddSubTab from '../components/add-components/layout/AddSubTab';
import prev from '../prev.png';
import next from '../next.png';
import {BrowserRouter,Link} from 'react-router-dom';


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
  color: '#000000',
     position: 'relative',
  right: '-18rem' 
}

const textBox = {
   width: '843px',
  height: '42px',
  opacity: 0.4,
  border: 'solid 1px rgba(0,0,0,0.5)'
}

//variables for add-sub-tab
const tabText = "Step 5 of 8: Gaurdian";

//variables for bottom navigation
const nextText = "MEDICAL"
const prevText = "MOTHER";
const pathNext = "/addmed";
const pathPrev = "/addm";

class AddGuardian extends Component{
  onNavClickFunc = () =>{
    localStorage.setItem('guardian', JSON.stringify({
     guardianName: document.getElementsByTagName('input')[0].value,
     guardianContact: document.getElementsByTagName('input')[1].value,
     email: document.getElementsByTagName('input')[3].value,
     residentialAddress: document.getElementsByTagName('input')[4].value,
     postalAddress: document.getElementsByTagName('input')[5].value
 }))
 
   let pup = JSON.parse(localStorage.getItem('guardian'));
   console.log(pup)
  }


    render(){
      console.log(localStorage.getItem('mother'))
        return(
           <div className="parentContainer">
       <GreyBar />
        <div className = "content">
         
        <EmailMenu text="Add student" />
       <SideBar />
          <div className="main">
            <div className="componentContainer">
                <AddSubTab tab={tabText} />
            <div className="mainContent">
            <div id="image"></div>
                <div id = "Info-Block">
                     
               
                
                <div id="class-level">
                  <h5 style = {titleStyles}>Name</h5>
                   <input type="text" placeholder="Name" style={textBox} />
                  </div>
               
            
                <div id="gender">
                  <h5 style = {titleStyles}>Work phone</h5>
                   <input type="text" placeholder="Work phone" style={textBox} />
                  </div>
                <div id="dob">
                  <h5 style = {titleStyles}>Home phone</h5>
                   <input type="text" placeholder="Home Phone" style={textBox} />
                  </div>
                <div id="nationality">
                  <h5 style = {titleStyles}>Email address</h5>
                   <input type="text" placeholder="Email address" style={textBox} />
                  </div>
                <div id="por">
                    <h5 style = {titleStyles}>Place of Residence</h5>            
                   <input type="text" placeholder="Place of Residence" style={textBox} />
                    </div>
                         
                      <div id="transport">
                  <h5  style = {titleStyles}>Postal address</h5>            
                   <input type="text" placeholder="Postal address" style={textBox} />
                </div>
                <div id = "bottom-nav">
                           <div id="prev-nav"><Link to={'/addm'} onClick={window.location.reload} id="prev-icon"><img src = {prev} /></Link><p id="prev-label">MOTHER</p></div>
                                   <div id="delete-btn"><p id="delete-text">DELETE</p></div>           
                <div id="next-nav"><p id="next-label">MEDICAL</p><Link to={'/addmed'}  id="next-icon"><img 
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

export default AddGuardian;