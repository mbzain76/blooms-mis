import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import axios from 'axios';
import next from '../next.png';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import AboutSubTab from '../components/about-components/AboutSubTab';
import AboutMenu from '../components/about-components/AboutMenu';
import '../styles/bottomNavAbout.css';

import '../styles/Info-text.css';
import { Link} from 'react-router-dom';
import AboutContent from '../components/about-components/AboutContent';

//variables for page content to be sent to the AboutContent component
const field1 = "Class";
const field2 = "First Name";
const field3 = "Middle Name";
const field4 = "Last Name";
const field5 = "Sex";
const field6 = "Date of Birth";
const field7 ="Nationality";
const field8 ="Place of Residence"; 
const field9 ="School Transport";
const field10 ="Picking Point";


//variables from props to be sent to the AboutSubTab component
const pathName = "/eds";
const tabText = "Basic";

/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);


class AboutStudent extends Component{
  constructor(props){
      super(props);
  }  
   state = {
       student: {}
   }
   


   componentDidMount(){
       
        axios.get(`/students/${id}`).then(res =>{
            console.log(res)
            this.setState({
             student: res.data
            })
       })
   
    }

    render(){
        
        return(
               <div className="parentContainer">
        <GreyBar />
        <div className = "content">
         <AboutMenu  pupil={this.state.student}/>
            
     <SideBar />
          <div className="main">
            <div className="componentContainer">
          <AboutSubTab identifier={id} path={pathName} tab={tabText} />
            <div className="mainContent">
            <div id="image" ></div>
            <AboutContent
                f1={field1}
                f2={field2}
                f3={field3}
                f4={field4}
                f5={field5}
                f6={field6}
                f7={field7}
                f8={field8}
                f9={field9}
                f10={field10}
                studentInfo = {this.state.student}/>
       
                <div id = "navigationBottom"><p id="next-text" style={{marginTop: '10px'}}>FATHER</p><Link to={`/abf/${this.state.student._id}`} id="next-icon" onClick={window.location.reload} ><img src = {next} alt = "next"/></Link></div>

                
                </div>
              </div>
            </div>
        </div>
      </div>
        )
    }
}

export default AboutStudent;
