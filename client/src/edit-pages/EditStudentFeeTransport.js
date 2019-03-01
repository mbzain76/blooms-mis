import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import '../styles/App.css';
import '../styles/StudentFeesPage.css';
import next from '../next.png';
import prev from '../prev.png';
import '../styles/EditStudentFeesBasic.css';
import exit from '../exit.png';
import erase from '../erase.png';
import save from '../save.png';
import '../styles/StudentList.css';
import axios from 'axios';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import AboutMenu from '../components/about-components/AboutMenu';



const textBox = {
    
    width: '376px',
 height: '42px',
   opacity: 0.3,
 border: 'solid 1px rgba(0,0,0,0.5)',
    gridColumn: '6',
    margin: '2.5rem'
}

/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);


export default class EditStudentFeeTransport extends Component{
    constructor(props){
        super(props);
    }  
     state = {
         student: {}
     }
     
  
  
     componentDidMount(){
         
          axios.get(`http://localhost:5000/students/${id}`).then(res =>{
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
             <AboutMenu pupil={this.state.student}/>
                
         <SideBar />
         
         <div className="main">
                <div className="componentContainer">
                        <div className="mainContent">
                                <div  className="page-Title-Menu" >
                                        <p id="about-ListTitle" style={{width: '60rem'}}>Transport Charges</p>
                                             
                                                  
                                            <img id = "save-icon" style={{cursor: 'pointer'}} src = {save} onClick={this.editStudent} />
                                            <img id = "erase-icon" style={{cursor: 'pointer'}} src = {erase} onClick={this.eraseFields} />
                                            <Link to={`/abfees/${id}`} onClick={window.location.reload} id = "exit-icon" ><img src = {exit} /></Link>
                                            </div>
                
              
                    
                           <div id="edit-charges-block">
                            <p id="tuition-text">Zone 1- Delta to Joyland, along the road</p>
                            <input type="text" placeholder="Zone 1(Ksh)" style={textBox} />
                  
                            </div>
                            
                           <div id="edit-charges-block">
                            <p id="tuition-text">Zone 2- Mifereji, Kahigo,Foresight,Guango & Kigwaru</p>
                            <input type="text" placeholder="Zone 2(Ksh)" style={textBox} />
                  
                            </div>
                           <div id="edit-charges-block">
                            <p id="tuition-text">Zone 3- Muchatha, Clifftop, sacred Heart, Gacharage, Lane 29</p>
                            <input type="text" placeholder="Zone 3(Ksh)" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Zone 4- Ndenderu, Gachie</p>
                            <input type="text" placeholder="Zone 4(Ksh)" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Zone 5- Banana, Platinum, Runda Gate</p>
                            <input type="text" placeholder="Zone 5(Ksh)" style={textBox} />
                  
                            </div>
                               <div id="edit-charges-block">
                            <p id="tuition-text">Zone 6 - Gigiri, Thigiri</p>
                            <input type="text" placeholder="Tennis(Ksh)" style={textBox} />
                  
                            </div>
                          
                  
                           
                  <div id = "bottom">
                <div id = "navigationBottomPrev"><Link to={`/edfeeoptional/${id}`} onClick={window.location.reload}><img src = {prev} /></Link><p style={{width: '10rem'}}>OPTIONAL CHARGES</p></div>
                <div id = "navigationBottomNext"><p >BASIC CHARGES</p><Link to = {`/edfeebasic/${id}`} onClick={window.location.reload}><img src = {next} alt = "next"/></Link></div>
                </div>
                
                    </div>
                  </div>
                </div>
         </div></div>   

         
            
        )
    }
}

