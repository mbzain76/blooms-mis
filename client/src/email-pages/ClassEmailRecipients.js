import React, {Component} from 'react';
import EmailSubTab from '../components/email-components/EmailSubTab';
import EmailMenu from '../components/email-components/EmailMenu';
import '../styles/App.css';
import '../styles/EmailStyles.css';
import '../styles/StudentFeesPage.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import AboutBottomNav from '../components/about-components/AboutBottomNav';


//variables for bottom nav
const prevText = "SELECTED STUDENTS"
const nextText = "GET EMAILS"
const pathNext = "/retrieved-emails"
const pathPrev = "/class-email-selected"


const tabText ="Step 2 of 2: Selected Recipients";
export default class ClassEmailRecepients extends Component{
    
    onGrabEmails = () =>{
        console.log(localStorage.getItem('selected-emails'))
    }

    render(){
          return(
            <div className="parentContainer">
            <GreyBar />
            <div className = "content">
             <SideBar />
             <EmailMenu />
             <div className="main">
                <div className="componentContainer">
                <EmailSubTab tab={tabText} />
                <p id="pta" style={{width: '50rem',marginLeft: '23px'}}> Select who to send this email to</p>
                <div style={{marginLeft: '38px'}} className="selected">
                <input type="checkbox" id="checkbox"/>
                <p className="check-text" style={{marginTop: '15px'}}>Parents</p>
                
                </div>
                <div style={{marginLeft: '38px'}} className="selected">
                    <input type="checkbox" id="checkbox"/>
                    <p className="check-text" style={{marginTop: '15px'}}>Guardians</p>
                    
                    </div>

                
                <AboutBottomNav grabem ={this.onGrabEmails} nextPath={pathNext} prevPath={pathPrev} prev={prevText} next={nextText}/>
            
             </div>
          </div></div></div>
          )
      }
}