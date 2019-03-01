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
import { BrowserRouter,Link} from 'react-router-dom';



const textBox = {
    
    width: '376px',
 height: '42px',
   opacity: 0.3,
 border: 'solid 1px rgba(0,0,0,0.5)',
    gridColumn: '6',
    margin: '2.5rem'
}

//variable for add sub tab
const tabText = "Step 7 of 8: Optional Charges ";
//variables for bottom navigation
const nextText = "FEES(TRANSPORT)";
const prevText = "FEES(BASIC)";
const pathNext = "/addtransportfee";
const pathPrev = "/addsfee";
 

export default class AddOptionalFees extends Component{
    constructor(props){
        super(props);
    }  
   
    onNavClickFunc = () =>{
        localStorage.setItem('studentFeesOptional', JSON.stringify({
         piano: document.getElementsByTagName('input')[0].value,
         guitar: document.getElementsByTagName('input')[1].value,
         skating: document.getElementsByTagName('input')[2].value,
         taekwondo: document.getElementsByTagName('input')[3].value,
         ballet: document.getElementsByTagName('input')[4].value,
         tennis: document.getElementsByTagName('input')[5].value
     
     }))
     
       let pup = JSON.parse(localStorage.getItem('studentFeesOptional'));
       console.log(pup)
      }

    render(){
        return(
           

<div className="parentContainer">
            <GreyBar />
            <div className = "content">
           <EmailMenu text="Add student" />
                
         <SideBar />
         
         <div className="main">
                <div className="componentContainer">
                        <div className="mainContent">
                    <AddSubTab tab={tabText}/>
                
              
                    
                           <div id="edit-charges-block">
                            <p id="tuition-text">Piano</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                           <div id="edit-charges-block">
                            <p id="tuition-text">Guitar</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                           <div id="edit-charges-block">
                            <p id="tuition-text">Skating</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Tae Kwo Do</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Ballet</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                           
                  
                            <div id = "bottom-nav">
                           <div id="prev-nav"><Link to={'/addsfee'} onClick={window.location.reload} id="prev-icon"><img src = {prev} /></Link><p id="prev-label">FEES (BASIC)</p></div>
                                   <div id="delete-btn"><p id="delete-text">DELETE</p></div>           
                <div id="next-nav"><p id="next-label">FEES (TRANSPORT)</p><Link to={'/addtransportfee'}  onClick={window.location.reload} id="next-icon"><img 
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
         </div></div>

           
        )
    }
}


