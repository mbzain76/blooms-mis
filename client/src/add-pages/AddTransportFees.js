import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import '../styles/EditStudentFeesBasic.css';
import axios from 'axios';
import GreyBar from '../components/global-layout/GreyBar';
import SideBar from '../components/global-layout/SideBar';
import EmailMenu from '../components/email-components/EmailMenu';
import AddSubTab from '../components/add-components/layout/AddSubTab';


import PopUpMessageTwo from '../components/modal-windows/popUpContainers';

import next from '../next.png';
import prev from '../prev.png';
import { BrowserRouter, Link} from 'react-router-dom';

let identifier;
const textBox = {
    
    width: '376px',
 height: '42px',
   opacity: 0.3,
 border: 'solid 1px rgba(0,0,0,0.5)',
    gridColumn: '6',
    margin: '2.5rem'
}

//variable for addsubtab
const tabText= "Step 8 of 8: Transport Charges";

//variables for bottom navigation
const nextText = "FINISH";
const prevText = "FEES(OPTIONAL)";
const pathNext = "/";
const pathPrev = "addoptionalfee";
 
export default class AddTransportFees extends Component{
    constructor(props){
        super(props);
    }  

    state = {
        display: 'none'
    }
 //function to add input from text-boxes to localStorage :)
    onNavClickFunc = () =>{
        localStorage.setItem('studentFeesTransport', JSON.stringify({
         transportZone1: document.getElementsByTagName('input')[0].value,
         transportZone2: document.getElementsByTagName('input')[1].value,
         transportZone3: document.getElementsByTagName('input')[2].value,
         transportZone4: document.getElementsByTagName('input')[3].value,
         transportZone5: document.getElementsByTagName('input')[4].value,
         transportZone6: document.getElementsByTagName('input')[5].value
     
       }
      )
     )
     
       let pup = JSON.parse(localStorage.getItem('studentFeesTransport'));
       console.log(pup)
     
    }

    //function that merges all objects to one student object to be added to the database then adds the object to database with axios
    mergeStudentDets = () =>{
        const basic = JSON.parse(localStorage.getItem('basic'));
        const father = JSON.parse(localStorage.getItem('father'));
        const mother = JSON.parse(localStorage.getItem('mother'));
        const guardian = JSON.parse(localStorage.getItem('guardian'));
        const medical = JSON.parse(localStorage.getItem('medical'));
        const basicFee = JSON.parse(localStorage.getItem('studentFeesBasic'));
        const optionalFee = JSON.parse(localStorage.getItem('studentFeesOptional'));
        const AddTransportFee = JSON.parse(localStorage.getItem('studentFeesTransport'));

        const newStudent = {...basic,...father,...mother,...guardian,...medical,...basicFee,...optionalFee,...AddTransportFee}

        console.log(newStudent)

        const URL = `http://localhost:51492/api/experience`;

       axios(`/students`, {
           method: 'POST',
           headers: {
             'content-type': 'application/json',
           },
           data: newStudent,
         })
           .then(response => response.data)
           .catch(error => {
            console.log(error) 
            throw error;

           });

    //     axios.post(`http://localhost:5000/students`, newStudent).then(res =>{ console.log(res);
    //     console.log(res.data)
    //    identifier = res.data._id
    //    console.log(identifier)
    //    localStorage.setItem('id', res.data._id)

    // })

    // axios({
    //   method: 'post',
    //   url: '/sessions',
    //   data: {
    //     username: this.state.username,
    //     password: this.state.password,
    //   },
    //   validateStatus: (status) => {
    //     return true; // I'm always returning true, you may want to do it depending on the status received
    //   },
    // }).catch(error => {

    // }).then(response => {
    //     // this is now called!
    // });
    }


    
   


    //function to display add new student pop up
    showPopUp = () =>{
        this.setState({
            display: 'grid'
        })
    }

    //function to hide popup
    hidePopUp = () =>{
        this.setState({
            display: 'none'
        })
    }
   

    render(){
        return(

<div className="parentContainer">
            <GreyBar />
            <div className = "content">
           <EmailMenu text="Add student" />
                
         <SideBar />
         <PopUpMessageTwo 
         hide={this.hidePopUp} 
         show={this.state.display}
         merge={this.mergeStudentDets}
         />
         <div className="main">
                <div className="componentContainer">
                         <div className="mainContent">
                   <AddSubTab tab={tabText}/>
                
              
                    
                           <div id="edit-charges-block">
                            <p id="tuition-text">Zone 1- Delta to Joyland, along the road</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                           <div id="edit-charges-block">
                            <p id="tuition-text">Zone 2- Mifereji, Kahigo,Foresight,Guango & Kigwaru</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                           <div id="edit-charges-block">
                            <p id="tuition-text">Zone 3- Muchatha, Clifftop, sacred Heart, Gacharage, Lane 29</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Zone 4- Ndenderu, Gachie</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Zone 5- Banana, Platinum, Runda Gate</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                               <div id="edit-charges-block">
                            <p id="tuition-text">Zone 6 - Gigiri, Thigiri</p>
                            <input type="text" placeholder="true / false" style={textBox} />
                  
                            </div>
                          
                            <div id = "bottom-nav">
                           <div id="prev-nav"><Link to={'/addoptionalfee'} onClick={window.location.reload} id="prev-icon"><img src = {prev} /></Link><p id="prev-label">FEES (OPTIONAL)</p></div>
                                   <div id="delete-btn" ><p id="delete-text" >DELETE</p></div>           
                <div id="next-nav" style={{cursor: 'pointer'}}><p id="next-label">FINISH</p><img
                id="next-icon" 
                  onClick={
                    () =>{
                      this.onNavClickFunc();
                      this.showPopUp();
                      window.scrollTo(0,0)
                    }
                  }
                    src = {next} alt = "next"/></div>
                </div>
                    </div>
                  </div>
                </div>
         </div></div>
      
           
        )
    }
}


