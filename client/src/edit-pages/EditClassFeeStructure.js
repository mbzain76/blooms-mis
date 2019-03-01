import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentFeesPage.css';
import '../styles/EditStudentFeesBasic.css';
import '../styles/StudentList.css';
import close from '../exit.png';
import axios from 'axios';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import EditFeeMenu from '../components/class-components/EditClassFeeMenu';
import FeeSubTab from '../components/class-components/FeeSubTab';
import ChangesSaved from '../components/edit-components/ChangesSaved';


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
 color: '#000000'
}

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


export default class EditClasFeeStructure extends Component{
    constructor(props){
        super(props);
    }  
     state = {
         student: {},
         isOpen: 'none',
         modal: 'none',
         popUp:'none'
     }

     
   //function to toggle popUp view
    showPopUp = () =>{
      this.setState({popUp: 'block'
    })
    }

    //function to hide popUp view
    hidePopUp = () =>{
      this.setState({
        popUp: 'none'
      })
    }
     
    handleClick = () =>{
        if(this.state.isOpen == 'none'){
           this.setState({
              isOpen: 'block'
           })
        }
        else if (this.state.isOpen == 'block')
        this.setState({
           isOpen: 'none'
        })
       console.log(this.state.isOpen)

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
            <EditFeeMenu />
                
         <SideBar />
         
         <div className="main">
         
         <ChangesSaved  hideView={this.hidePopUp} pathTo={`/abfees/${id}`} view={this.state.popUp}/>
                <div className="componentContainer">
                        <div id="center-modal" style={{display:`${this.state.modal}`}}>
                           <div id="top-text-container">
                           <p id="top-text">Save Edit?</p>
                           <img id = "funga" src={close} onClick={
                              () =>{
                                 this.setState({
                                    modal: 'none'
                                 })
                              }
                           }/>
                           </div>
                           <div id="middle-prompt">
                              <p id="middle-prompt-text">
                              You have made some changes to this financial form. Do you wish to 
save them?
                              </p>
                           </div>
                           <div id="buttons">
                              <div id ="b1">save</div>
                              <div id="b2">cancel</div>
                           </div>
                        </div>
                        <div className="mainContent">
                      <FeeSubTab display={this.state.isOpen} showPop={this.showPopUp} handle={this.handleClick} />
                
              
                    <p id ="charge-type">Basic charges</p>
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
                            <p id="tuition-text">Horse Riding</p>
                            <input type="text" placeholder="horse riding(Ksh)" style={textBox} />
                  
                            </div>
                            
                               <div id="edit-charges-block">
                            <p id="tuition-text">Half-day Care</p>
                            <input type="text" placeholder="Half-day Care(Ksh)" style={textBox} />
                  
                            </div>
                               <div id="edit-charges-block">
                            <p id="tuition-text">Full-day Care</p>
                            <input type="text" placeholder="Full-day care(Ksh)" style={textBox} />
                  
                            </div>
                            <div id="edit-charges-block">
                            <p id="tuition-text">Annual Insurance</p>
                            <input type="text" placeholder="Annual Insurance(Ksh)" style={textBox} />
                  
                            </div>
                           
                            <p id ="charge-type">Optional charges</p>    
                            <div id="edit-charges-block">
                                    <p id="tuition-text">Piano</p>
                                    <input type="text" placeholder="Piano(Ksh)" style={textBox} />
                          
                                    </div>
                                    
                                   <div id="edit-charges-block">
                                    <p id="tuition-text">Guitar</p>
                                    <input type="text" placeholder="Guitar(Ksh)" style={textBox} />
                          
                                    </div>
                                   <div id="edit-charges-block">
                                    <p id="tuition-text">Skating</p>
                                    <input type="text" placeholder="Skating(Ksh)" style={textBox} />
                          
                                    </div>
                                    
                                       <div id="edit-charges-block">
                                    <p id="tuition-text">Tae Kwo Do</p>
                                    <input type="text" placeholder="Tae Kwo Do(Ksh)" style={textBox} />
                          
                                    </div>
                                    
                                       <div id="edit-charges-block">
                                    <p id="tuition-text">Ballet</p>
                                    <input type="text" placeholder="Ballet(Ksh)" style={textBox} />
                          
                                    </div>
                                       <div id="edit-charges-block">
                                    <p id="tuition-text">Tennis</p>
                                    <input type="text" placeholder="Tennis(Ksh)" style={textBox} />
                          
                                    </div>

                                    <p id ="charge-type">Transport charges</p>                                  
                                    <div id="edit-charges-block">
                                            <p style={{width: '20rem', marginLeft: '-.5rem'}} id="tuition-text">Zone 1- Delta to Joyland, along the road</p>
                                            <input type="text" placeholder="Zone 1(Ksh)" style={textBox} />
                                  
                                            </div>
                                            
                                           <div id="edit-charges-block">
                                            <p id="tuition-text" style={{width: '20rem', marginLeft: '-.5rem'}}>Zone 2- Mifereji, Kahigo,Foresight,Guango & Kigwaru</p>
                                            <input type="text" placeholder="Zone 2(Ksh)" style={textBox} />
                                  
                                            </div>
                                           <div id="edit-charges-block">
                                            <p style={{width: '20rem', marginLeft: '-.5rem'}} id="tuition-text">Zone 3- Muchatha, Clifftop, sacred Heart, Gacharage, Lane 29</p>
                                            <input type="text" placeholder="Zone 3(Ksh)" style={textBox} />
                                  
                                            </div>
                                            
                                               <div id="edit-charges-block">
                                            <p id="tuition-text" style={{width: '20rem', marginLeft: '-.5rem'}}>Zone 4- Ndenderu, Gachie</p>
                                            <input type="text" placeholder="Zone 4(Ksh)" style={textBox} />
                                  
                                            </div>
                                            
                                               <div id="edit-charges-block">
                                            <p id="tuition-text" style={{width: '20rem', marginLeft: '-.5rem'}}>Zone 5- Banana, Platinum, Runda Gate</p>
                                            <input type="text" placeholder="Zone 5(Ksh)" style={textBox} />
                                  
                                            </div>
                                               <div id="edit-charges-block">
                                            <p id="tuition-text" style={{width: '20rem', marginLeft: '-.5rem'}}>Zone 6 - Gigiri, Thigiri</p>
                                            <input type="text" placeholder="Tennis(Ksh)" style={textBox} />
                                  
                                            </div>

                                            <p id ="charge-type">Sibling discounts</p>
                                            <div className="chargesblock" style={{marginTop: '45px'}}>
                                                    
                                                    <p id="tuition-name" style={{marginLeft: '-2rem', width: '20rem'}}>No sibling</p>
                                                    <p id="charge-text">Ksh 00.00 </p>
                                                  </div>
                                                  <div className="chargesblock" style={{ paddingTop: '2rem'}}>
                                                                                                           <p id="tuition-name" style={{marginLeft: '-2rem', width: '20rem'}}>2nd sibling: 10% off tuition fees, 20% off transport fee</p>
                                                      <p id="charge-text">Ksh 00.00 </p>
                                                     </div>
                                                  <div className="chargesblock" style={{ borderBottom: 'solid 1px rgba(0,0,0,0.1)', paddingBottom: '3rem', paddingTop: '2rem'}}>
                                                     
                                                     <p id="tuition-name" style={{width: '20rem', marginLeft: '-2rem'}}>3rd sibling and above: 15% off tuition fees, 20% off transport fee</p>
                                                     <p id="charge-text">Ksh 00.00 </p>
                                                     </div>
                             
                    </div>
                  </div>
                </div>
         </div></div>
        )
    }
}

