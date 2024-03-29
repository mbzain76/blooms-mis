import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import axios from 'axios';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import AboutSubTab from '../components/about-components/AboutSubTab';
import AboutBottomNav from '../components/about-components/AboutBottomNav';
import AboutMenu from '../components/about-components/AboutMenu';
import '../styles/Info-text.css';


const titleStyles = {
     width: '25rem',
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
        width: '25rem',
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

//variables for bottom nav
const prevText = "FATHER"
const nextText = "GUARDIAN"
const pathNext = "/abg"
const pathPrev = "/abf"
//variab;e to go to edit path for page
const pathName = '/edm';
//variable for addsubtab component prop
const tabText = "Mother";

/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);

/* class declaration for the about mother component*/
class AboutMother extends Component{
   
     state = {
       studentDet: {}
   }
   


   componentDidMount(){
       
        axios.get(`/students/${id}`).then(res =>{
            console.log(res)
            this.setState({
             studentDet: res.data
            })
       })
   
    }

    render(){
        return(
               <div className="parentContainer">
       <GreyBar />
        <div className = "content">
          <AboutMenu pupil={this.state.studentDet}/>
            
        <SideBar />
          <div className="main">
            <div className="componentContainer">
                   <AboutSubTab identifier={id} path={pathName} tab={tabText}/>
            <div className="mainContent">
            <div id="image"></div>
                <div id = "Info-Block">
                    
                <div id="class-level">
                  <h5 style = {titleStyles}>First Name</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.motherFirstName ? this.state.studentDet.motherFirstName: "N/A"}</h6>
                  </div>
                <div id="firstName">
                  <h5 style = {titleStyles}>Middle Name</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.motherMiddleName ? this.state.studentDet.motherMiddleName: "N/A"}</h6>
                  </div>
                <div id="middleName">
                  <h5 style = {titleStyles}>Last Name</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.motherLastName ? this.state.studentDet.motherLastName: "N/A"}</h6>
                  </div>
                <div id="lastName">
                  <h5 style = {titleStyles}>Work Phone</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.motherContact ? this.state.studentDet.motherContact: "N/A"}</h6>
                  </div>
                <div id="gender">
                  <h5 style = {titleStyles}>Home Phone</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.motherContact ? this.state.studentDet.motherContact: "N/A"}</h6>
                  </div>
                <div id="dob">
                  <h5 style = {titleStyles}>Email address</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.email ? this.state.studentDet.email: "N/A"}</h6>
                  </div>
                <div id="nationality">
                  <h5 style = {titleStyles}>Place of Residence</h5>
                  <h6 style = {infoStyles}>{this.state.studentDet.residentialAddress ? this.state.studentDet.residentialAddress: "N/A"}</h6>
                  </div>
                <div id="por">
                  <h5 style = {titleStyles}>Postal address</h5>            
                  <h6 style = {infoStyles}>{this.state.studentDet.postalAddress ? this.state.studentDet.postalAddress: "N/A"}</h6>            
                  </div>
                  <AboutBottomNav nextPath={pathNext} prevPath={pathPrev} prev={prevText} next={nextText} identifier={id}/>  
                </div>
             
              
                
                </div>
              </div>
            </div>
        </div>
      </div>
        )
    }
}

export default AboutMother;
