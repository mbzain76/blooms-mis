import React, {Component} from 'react';
import EmailSubTab from '../components/email-components/EmailSubTab';
import EmailMenu from '../components/email-components/EmailMenu';
import '../styles/App.css';
import '../styles/StudentFeesPage.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import EmailList from '../components/email-components/EmailList';
import next from '../next.png';
import {BrowserRouter, Link} from 'react-router-dom';



const tabText ="Step 1 of 2: Selected Students";
const menu = "Send email";
export default class StudentEmailSelected extends Component{
    constructor(props){
        super(props);

    }
    render(){
          return(
            
<div className="parentContainer">
            <GreyBar />
            <div className = "content">
             <SideBar />
             <EmailMenu text = "send email"/>
             <div className="main">
             <div className="componentContainer" >
                <EmailSubTab tab={tabText} />
                <EmailList />
            
                    <div id = "navigationBottom"><p style={{marginTop: '10px'}} id="next-text">RECIPIENTS</p><Link to={`/class-email-recipients`} id="next-icon" onClick={window.location.reload} ><img src = {next} alt = "next"/></Link></div>
                   
                </div>
             </div>
          </div></div>
         
            
             )
      }
}