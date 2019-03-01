import React, {Component} from 'react';
import '../styles/StudentFeesPage.css';
import axios from 'axios';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import ClassFeeMenu from '../components/class-components/ClassFeeMenu';

import '../styles/ClassListMenu.css';
import FeeSubTab from '../components/class-components/FeeSubTab';



const titleStyles = {
  width: '15rem',
  height: '21px',
  fontSize: '18px',
  fontWeight: 600,
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000',
  
  marginLeft: '-3rem',  
}

const infoStyles = {
  width: '5rem',
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


export const basicTitle = {
  position: 'relative',
  left: '27px',
  top: '27px',
width: '254px',
height: '28px',
fontSize: '25px',
fontWeight: 500,
fontStyle: 'normal',
fontStretch: 'normal',
lineHeight: 1.2,
letterSpacing: 'normal',
textAlign: 'left',
color: '#000000'
}
export const optionalTitle = {
  position: 'relative',
  left: '27px',
  top: '52px',
width: '254px',
height: '28px',
fontSize: '25px',
fontWeight: 500,
fontStyle: 'normal',
fontStretch: 'normal',
lineHeight: 1.2,
letterSpacing: 'normal',
textAlign: 'left',
color: '#000000',
marginBottom: '85px'
}
export const chargesblock= {
  gridColumn: '1/-1',
  width: '100%',
  display: 'flex',
  position: 'relative',
  top: '60px',
  marginBottom: '55px',
}
export const chargesblockLast= {
  gridColumn: '1/-1',
  width: '100%',
  display: 'flex',
  position: 'relative',
  top: '60px',
  marginBottom: '55px',
  paddingBottom: '50px',
  borderBottom: 'solid 1px rgba(0,0,0,0.2)'
}

export const chargeType = {
  
  width: '45%',
  height: '21px',
  fontSize: '18px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.28,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000',
  position: 'relative',
  left : '27px'
  }
  
  export const chargeAmount = {
    
  width: '92px',
  height: '21px',
  fontSize: '18px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.28,
  letterSpacing: 'normal',
  textAlign: 'right',
  color: '#000000',
  position: 'relative',
  left: '42.5%'
  }
  


class GradeFeeStructure extends Component{
  constructor(props){
      super(props);
  }  
  
   state = {
    student: [],
    isOpen: 'none',
    classWhich: '',
    tabTitle: '',
    feesStructure: {
            dayCareTuition: 34000,
            dayCareLunch: 7000,
            dayCareSwimming: 1500,
            dayCareHalf: 600,
            dayCareFull: 800,
            personalInsurance: 1500,
            piano: 5000,
            guitar: 4500,
            skating: 4500,
            taekwodo: 4500,
            ballet: 4500,
            transportZone1: 8000,
            transportZone2: 9500,
            transportZone3: 12500,
            transportZone4: 14000,
            transportZone5: 17000,
            transportZone6: 20000,
            beginnerTuition: 35000,
            beginnerLunch: 7000,
            beginnerSwimming: 2500,
            pp1Tuition: 35000,
            pp1Lunch: 7500,
            pp1Swimming: 2500,
            pp2Tuition: 35000,
            pp2Lunch: 7500,
            pp2Swimming: 2500,
            grade1Tuition: 36000,
            grade1Lunch: 8000,
            grade1Swimming: 2500,
            grade2Tuition:  36000,
            grade2Lunch:  8000,
            grade2Swimming:  2500,
         
   }
   
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
       
        axios.get(`http://localhost:5000/students`).then(res =>{
            console.log(res)
            this.setState({
             student: res.data
            })
       })
          
    }

    
    chooseClass = () =>{
       switch(this.state.classWhich){
          case 'Day care':
          this.setState({
            tabTitle: 'Day care Fee Structure'
          });
          break;

          case 'Beginner':
          this.setState({
            tabTitle: 'Beginner Fee Structure'
          });
          break;
          
          case 'PP1':
          this.setState({
            tabTitle: 'PP1 Fee Structure'
          });
          break;

          case 'PP2':
          this.setState({
            tabTitle: 'PP2 Fee Structure'
          });
          break;
          
          case 'Grade 1':
          this.setState({
            tabTitle: 'Grade 1 Fee Structure'
          });
          break;

          case 'Grade 2':
          this.setState({
            tabTitle: 'Grade 2 Fee Structure'
          });
          break;
          
          
       }
    }
    render(){
        let choosenClass = localStorage.getItem('class')
        console.log(choosenClass)
        return(
               <div className="parentContainer">
        <GreyBar />
        <div className = "content">
    <ClassFeeMenu  path={choosenClass}/>
            
     <SideBar />
          <div className="main">

            <div className="componentContainer">
            
            <FeeSubTab  tabTitleProp={`${choosenClass} Fee Structure`} display={this.state.isOpen} handle={this.handleClick}/>
          
            <p style={basicTitle}>Basic charges</p>
              <div style={chargesblock} >
                  <p style={chargeType}>Tuition</p>
                  <p style={chargeAmount}>Ksh.{this.state.feesStructure.beginnerTuition} </p>
                </div>
                <div style={chargesblock}>
        
                    <p style={chargeType}>Lunch</p>
                     <p style={chargeAmount}>Ksh. {this.state.feesStructure.beginnerLunch}</p>
                 </div>
                <div style={chargesblock}>
                    <p style={chargeType}>Swimming</p>
                     <p style={chargeAmount}>Ksh.{this.state.feesStructure.beginnerSwimming}</p>
                </div>
               
                <div style={chargesblock}>
                        
                        <p style={chargeType}>Half-day day care</p>
                         <p style={chargeAmount}>Ksh.{this.state.feesStructure.dayCareHalf} </p>
                    </div>      
                <div style={chargesblock}>
                       
                        <p style={chargeType} >Full-day day care</p>
                        <p style={chargeAmount}>Ksh.{this.state.feesStructure.dayCareFull} </p>
                    </div>
                <div style={chargesblockLast}>
                           
                            <p style={chargeType}>Annual Insurance</p>
                             <p style={chargeAmount}>Ksh.{this.state.feesStructure.personalInsurance} </p>
                </div> 
                <p style={optionalTitle}>Optional charges</p>   
                <div style={chargesblock}>
                  
                  <p style={chargeType}>Piano</p>
                  <p style={chargeAmount}>Ksh.{this.state.feesStructure.piano} </p>
                </div>
                <div style={chargesblock}>
                   
                    <p style={chargeType}>Guitar</p>
                    <p style={chargeAmount}>Ksh.{this.state.feesStructure.guitar}</p>
                   </div>
                <div style={chargesblock}>
                  
                   <p style={chargeType}>Skating</p>
                   <p style={chargeAmount}>Ksh.{this.state.feesStructure.skating} </p>
                   </div>            
                <div style={chargesblock}>
                      
                        <p style={chargeType}> Tae kwo ndo</p>
                        <p style={chargeAmount}>Ksh.{this.state.feesStructure.taekwodo}</p>
                      </div> 
                <div style={chargesblockLast}>
                    
                      <p style={chargeType}>Ballet</p>
                       <p style={chargeAmount}>Ksh.{this.state.feesStructure.ballet} </p>
                     </div>                  
             
                          
                <p style={optionalTitle}>Transport charges</p>
                <div style={chargesblock}>
                        <p style={chargeType}>Zone 1-Delta to Joyland along the road.</p>
                        <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone1}</p>
                      </div>
                      <div style={chargesblock}>
                         
                          <p style={chargeType}>Zone 2-Mifereji, Kahigo,Foresight,Guango & Kigwaru</p>
                          <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone2}</p>
                         </div>
                      <div style={chargesblock}>
                         
                         <p style={chargeType}>Zone 3- Muchatha, Clifftop, Sacred Heart, Gacharage, Lane 29</p>
                         <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone3} </p>
                         </div>            
                      <div style={chargesblock}>
                            
                              <p style={chargeType}>Zone 4- Ndenderu, Gachie</p>
                              <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone4} </p>
                            </div> 
                      <div style={chargesblock}>
                            
                            <p style={chargeType}>Zone 5- Banana, Platinum, Runda Gate</p>
                             <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone5} </p>
                           </div>  
                      <div style={chargesblock}>
                            
                            <p style={chargeType}>Zone 6- Gigiri, Thigiri</p>
                            <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone6} </p>
                          </div>
                          
                          <p style={optionalTitle}>Sibling discounts</p>
                          <div style={chargesblock}>
                                
                                  <p style={chargeType}>No sibling</p>
                                  <p style={chargeAmount}>Ksh 00.00 </p>
                                </div>
                                <div style={chargesblock}>
                                   
                                    <p style={chargeType}>2nd sibling: 10% off tuition fees, 20% off transport fee</p>
                                    <p style={chargeAmount}>Ksh 00.00 </p>
                                   </div>
                                <div style={chargesblock}>
                                  
                                   <p style={chargeType} >3rd sibling and above: 15% off tuition fees, 20% off transport fee</p>
                                   <p style={chargeAmount}>Ksh 00.00 </p>
                                   </div>
                                   
                              
        </div>
      </div>
      </div></div>
        )
    }
}

export default GradeFeeStructure;