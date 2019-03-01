import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import '../styles/EditStudentFeesBasic.css';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import AddSubTab from '../components/add-components/layout/AddSubTab';
import Info from '../components/add-components/Info';
import EmailMenu from '../components/email-components/EmailMenu';


//variables for add-sub-tab
const tabText = "Step 1 of 8: Basic";

export let updatedPupil;

class AddStudent extends Component{

    constructor(props){
        super(props);

        this.onUpdateStudent = this.onUpdateStudent.bind(this);
    }

    onUpdateStudent(values) {
        this.props.onUpdateStudent(values);
        updatedPupil= this.props.student.pupil

        
        console.log(updatedPupil)
    }


    setBasic = () =>{
        localStorage.setItem('basic', JSON.stringify({
      
          class: document.getElementsByTagName('select')[0].value,
          firstName:  document.getElementsByTagName('input')[0].value,
           middleName:document.getElementsByTagName('input')[1].value,
           lastName: document.getElementsByTagName('input')[2].value,
            sex: document.getElementsByTagName('input')[3].value,
           dateOfBirth: document.getElementsByTagName('input')[4].value,
           nationality: document.getElementsByTagName('input')[5].value,
          
           residentialAddress: document.getElementsByTagName('input')[6].value}))
      
       let pup = JSON.parse(localStorage.getItem('father'));
       console.log(pup)
      }  
  
    
    render(){
        
        localStorage.clear()
    
        return(
          <div className="parentContainer">
            <GreyBar />
            <div  className = "content">
              
                  <EmailMenu text="Add student"/>
                
              
              <SideBar />
              <div className="main">
                <div className="componentContainer">
                    <AddSubTab tab={tabText}/>
                <div className="mainContent">
                <div id="image" ></div>
           
                  
                    <Info basic = {this.setBasic} updatePupil = {this.onUpdateStudent} />
                    </div>
                  </div>
                </div>
            </div>
          </div>
              )
          }}
          
 
  



export default AddStudent;