import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import '../styles/EditStudentFeesBasic.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import EmailMenu from '../components/email-components/EmailMenu';
import AddSubTab from '../components/add-components/layout/AddSubTab';
import next from '../next.png';
import prev from '../prev.png';
import { BrowserRouter, Link} from 'react-router-dom';


const textBox = {
    
    width: '376px',
 height: '42px',
   opacity: 0.3,
 border: 'solid 1px rgba(0,0,0,0.5)',
    gridColumn: '6',
    margin: '2.5rem'
}

//variables for bottom navigation
const nextText = "FEES(OPTIONAL)";
const prevText = "MEDICAL";
const pathNext = "/addoptionalfee";
const pathPrev = "/addmed";
 
//variables for add sub tab
const tabText = "Step 6 of 8: Basic Charges";




export default class AddStudentFees extends Component{
    constructor(props){
        super(props);
    }  
 
       
  onNavClickFunc = () =>{
    localStorage.setItem('studentFeesBasic', JSON.stringify({
     tuition: document.getElementsByTagName('input')[0].value,
     lunch: document.getElementsByTagName('input')[1].value,
     swimming: document.getElementsByTagName('input')[2].value,
     horseRiding: document.getElementsByTagName('input')[3].value,
     halfDayCare: document.getElementsByTagName('input')[4].value,
     fullDayCare: document.getElementsByTagName('input')[5].value,
     annualInsurance: document.getElementsByTagName('input')[6].value,
 
 }))
 
   let pup = JSON.parse(localStorage.getItem('studentFeesBasic'));
   console.log(pup)
  }
    render(){
        return(
         

<div className="parentContainer">
            <GreyBar />
            <div className = "content">
           <EmailMenu text="Add student"/>
                
         <SideBar />
         
         <div className="main">
                <div className="componentContainer">
                        <div className="mainContent">
                     <AddSubTab tab={tabText}/>
                
              
                    
                           <div id="edit-charges-block">
                            <p id="tuition-text">Tuition</p>
                            <input type="text" placeholder="Tuition(Ksh)" style={textBox} />
                  
                            </div>
                            
                           <div id="edit-charges-block">
                            <p id="tuition-text">Lunch</p>
                            <input type="text" placeholder="Lunch(Ksh)" style={textBox} />
                  
                            </div>
                           <div id="edit-charges-block">
                            <p id="tuition-text">Swimmming</p>
                            <input type="text" placeholder="Swimming(Ksh)" style={textBox} />
                  
                            </div>
                            
                            
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Half-day Care</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                               <div id="edit-charges-block">
                            <p id="tuition-text">Full-day Care</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            <div id="edit-charges-block" style={{borderBottom: 'solid 1px rgba(0,0,0,0.1)'}}>
                            <p id="tuition-text">Annual Insurance</p>
                            <input type="text" placeholder="Annual Insurance(Ksh)" style={textBox} />
                  
                            </div>
                            <div id = "bottom-nav">
                           <div id="prev-nav"><Link to={'/addmed'} onClick={window.location.reload} id="prev-icon"><img src = {prev} /></Link><p id="prev-label">MEDICAL</p></div>
                                   <div id="delete-btn"><p id="delete-text">DELETE</p></div>           
                <div id="next-nav"><p id="next-label">FEES (OPTIONAL)</p><Link to={'/addoptionalfee'}  id="next-icon" onClick={window.location.reload}><img 
                  onClick={
                    ()=>{
                      this.onNavClickFunc()
                    }
                      
                    
                  }
                    src = {next} alt = "next"/></Link></div>
                </div>
                  </div>
                        
              </div>
                    </div>
                  </div>
                </div>
        
           
        )
    }
}

