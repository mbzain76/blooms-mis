import React, {Component} from 'react';
import '../styles/App.css';
import axios from 'axios';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import AboutBottomNav from '../components/about-components/AboutBottomNav';
import AboutMenu from '../components/about-components/AboutMenu';
import settings from '../settings.png';


const subTabContainer = {
    gridColumn: '1/-1',
    width: '100%',
    backgroundColor: 'white',
    height: '95.5px',
    borderBottom: 'solid 1px rgba(0,0,0,0.1)'
}

const tabTitle = {
    
  width: '136px',
  height: '39px',
  fontSize: '35px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.2,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000',
  position: 'absolute',
  left: '9.1%',
  top: '18%'
}
const tabterm = {
    position: 'relative',
    top: '20.5px',
    display: 'grid',
    width: '250px',
    height: '25px',
    left: '85.4%',
    bottom: '15px',
    gridTemplateColumns: '105px 45px',
    gridColumnGap: '15px',
    height: '21px',
    fontSize: '18px',
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.28,
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

export const checkbox = {
   position: 'relative',
   left: '27px',

  width: '25px',
  height: '25px',
  objectFit: 'contain',
  opacity: 0.5,
  fontSize: '25px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.2,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#44943e'

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
  left : '71px',
  top: '-12.5px'
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
  position: 'absolute',
  left: '89%',
  top: '-12.5px'
}

//variables for bottom nav
const prevText = "MEDICAL"
const nextText = "BASIC"
const pathNext = "/abs"
const pathPrev = "/abmed"
//variab;e to go to edit path for page
const pathName = '/edfeebasic';


/* these two statement grab the url of the page then assign the id to a variable that will be used in the axios get function to fetch that student's information  */
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') +1);


class StudentFeesPage extends Component{
  constructor(props){
      super(props);
  }  
   state = {
       student: {},
       balance: 0,
       amountPaid: 0,
       checked: false,
       checkedFull: false,
       checkedHalf: false,
       checkedPiano: false,
       checkedGuitar: false,
       checkedSkating: false,
       checkedTae: false,
       checkedBallet: false,
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
   


   componentDidMount(){
       
        axios.get(`/students/${this.props.match.params.id}`).then(res =>{
            console.log(res)
            this.setState({
             student: res.data
            })
       })
       this.getSumOfCharges()
       this.setCheckedBallet()
       this.setCheckedPiano()
       this.setCheckedGuitar()
       this.setCheckedSkating()
       this.setCheckedTae()

    }

   setCheckedPiano = () =>{
     if(this.state.student.piano === true){
       this.setState({
         checkedPiano: true
       })
     }

     else if(this.state.student.piano === false){
       this.setState({
         checkedPiano: false
       })
     }
   }

   setCheckedGuitar = () =>{
    if(this.state.student.guitar === true){
      this.setState({
        checkedGuitar: true
      })
    }

    else if(this.state.student.guitar === false){
      this.setState({
        checkedGuitar: false
      })
    }
  }

  setCheckedSkating = () =>{
    if(this.state.student.skating === true){
      this.setState({
        checkedSkating: true
      })
    }

    else{
      this.setState({
        checkedSkating: false
      })
    }
  }

  setCheckedTae = () =>{
    if(this.state.student.taekwodo === true){
      this.setState({
        checkedTae: true
      })
    }

    else if(this.state.student.taekwodo === false){
      this.setState({
        checkedTae: false
      })
    }
  }

  setCheckedBallet = () =>{
    if(this.state.student.ballet === true){
      this.setState({
        checkedBallet: true
      })
    }

    else if(this.state.student.ballet === false){
      this.setState({
        checkedBallet: false
      })
    }
  }

 

 getSumOfCharges = () =>{
let total = this.chooseLunch() + this.chooseDayCareFull() + this.chooseDayCareHalf() + this.chooseSwimming() + this.chooseTuition() + this.choosePiano() + this.chooseSkating() + this.chooseBallet() + this.chooseTae() + this.chooseGuitar() + this.chooseTransport1() + this.chooseTransport2() + this.chooseTransport3() + this.chooseTransport4() + this.chooseTransport5() + this.chooseTransport6()    
axios.put('/students'+ id, {
  class: this.state.student.class,
  firstName: this.state.student.firstName,
  middleName: this.state.student.middleName,
  lastName:  this.state.student.lastName,
  sex:  this.state.student.sex,
  datOfBirth: this.state.student.dateOfBirth,
  nationality: this.state.student.nationality,
  fatherFirstName: this.state.student.fatherFirstName,
  fatherMiddleName: this.state.student.fatherMiddleName,
  fatherLastName: this.state.student.fatherLastName,
  fatherContact: this.state.student.fatherContact,
  motherFirstName: this.state.student.motherFirstName,    
  motherMiddleName: this.state.student.motherMiddleName,    
  motherLastName: this.state.student.motherLastName,       
  motherContact: this.state.student.motherContact,    
  email: this.state.student.email,
  postalAddress: this.state.student.postalAddress,
  doctorContact: this.state.student.doctorContact,
  doctorName: this.state.student.doctorName,
  photoURL: this.state.student.photoURL,
  termFeesPayer: this.state.student.termFeesPayer,
  termFeesPayerNumber: this.state.student.termFeesPayerNumber,
  feePaid: this.state.student.feePaid,
  termFeesTotal: this.state.student.termFeesTotal,
  prefferedHospital: this.state.student.prefferedHospital,
  doctorEmail: this.state.student.doctorEmail,
  guardianName: this.state.student.guardianName,
  guardianContact: this.state.student.guardianContact,
  halfDayCare: this.state.student.halfDayCare,
  fullDayCare: this.state.student.fullDayCare,
  annnualInsurance: this.state.student.annnualInsurance,
  piano: this.state.student.piano,
  guitar: this.state.student.guitar,
  skating: this.state.student.skating,
  taekwondo: this.state.student.taekwondo,
  ballet: this.state.student.ballet,
  transportZone1: this.state.student.transportZone1,
  transportZone2: this.state.student.transportZone2,
  transportZone3: this.state.student.transportZone3,
  transportZone4: this.state.student.transportZone4,
  transportZone5: this.state.student.transportZone5,
  transportZone6: this.state.student.transportZone6,
  termTotal: this.state.student.termTotal,
  previousTermBalance: total,
  amountPaid: this.state.student.amountPaid,
  
} ) 
return total
}

 chooseTuition = () =>{
  switch(this.state.student.class){
    case 'Day care':
     return this.state.feesStructure.dayCareTuition;
     break;

     case 'Beginner':
     return this.state.feesStructure.beginnerTuition;
     break; 

     case 'PP1':
     return this.state.feesStructure.pp1Tuition;
     break;

     case 'PP2':
     return this.state.feesStructure.pp2Tuition;
     break;

     case 'Grade 1':
     return this.state.feesStructure.grade1Tuition;
     break;

     case 'Grade 2':
     return this.state.feesStructure.grade2Tuition;
     break;
  }

}


 chooseLunch = () =>{
  switch(this.state.student.class){
    case 'Day care':
     return this.state.feesStructure.dayCareLunch;
     break;

     case 'Beginner':
     return this.state.feesStructure.beginnerLunch;
     break; 

     case 'PP1':
     return this.state.feesStructure.pp1Lunch;
     break;

     case 'PP2':
     return this.state.feesStructure.pp2Lunch;
     break;

     case 'Grade 1':
     return this.state.feesStructure.grade1Lunch;
     break;

     case 'Grade 2':
     return this.state.feesStructure.grade2Lunch;
     break;
  }
 }

 chooseDayCareFull = () =>{
  if(this.state.student.dayCareFull === true){
    return this.state.feesStructure.dayCareFull
  }

  else{
    return 0
  }

}


chooseDayCareHalf = () =>{
  if(this.state.student.dayCareHalf === true){
    return this.state.feesStructure.dayCareHalf
  }

  else{
    return 0
  }

}

 chooseSwimming = () =>{
  switch(this.state.student.class){
    case 'Day care':
     return this.state.feesStructure.dayCareSwimming;
     break;

     case 'Beginner':
     return this.state.feesStructure.beginnerSwimming;
     break; 

     case 'PP1':
     return this.state.feesStructure.pp1Swimming;
     break;

     case 'PP2':
     return this.state.feesStructure.pp2Swimming;
     break;

     case 'Grade 1':
     return this.state.feesStructure.grade1Swimming;
     break;

     case 'Grade 2':
     return this.state.feesStructure.grade2Swimming;
     break;
  }
 }

 
 choosePiano = () =>{
    if(this.state.student.piano === true){
      return this.state.feesStructure.piano
    }

    else{
      return 0
    }

 }

 chooseGuitar = () =>{
  if(this.state.student.guitar === true){
    return this.state.feesStructure.guitar
  }

  else{
    return 0
  }

}

chooseSkating = () =>{
  if(this.state.student.skating === true){
    return this.state.feesStructure.skating
  }

  else{
    return 0
  }

}

chooseTae = () =>{
  if(this.state.student.taekwodo === true){
    return this.state.feesStructure.taekwodo
  }

  else{
    return 0
  }

}


chooseBallet = () =>{
  if(this.state.student.ballet === true){
    return this.state.feesStructure.ballet
  }

  else{
    return 0
  }

}

chooseTransport1 = () =>{
  if(this.state.student.transportZone1 === true){
    return this.state.feesStructure.transportZone1
  }

  else{
    return 0
  }

}

chooseTransport2 = () =>{
  if(this.state.student.transportZone2 === true){
    return this.state.feesStructure.transportZone2
  }

  else{
    return 0
  }

}

chooseTransport3 = () =>{
  if(this.state.student.transportZone3 === true){
    return this.state.feesStructure.transportZone3
  }

  else{
    return 0
  }

}

chooseTransport4 = () =>{
  if(this.state.student.transportZone4 === true){
    return this.state.feesStructure.transportZone4
  }

  else{
    return 0
  }

}

chooseTransport5 = () =>{
  if(this.state.student.transportZone5 === true){
    return this.state.feesStructure.transportZone5
  }

  else{
    return 0
  }

}

chooseTransport6 = () =>{
  if(this.state.student.transportZone6 === true){
    return this.state.feesStructure.transportZone6
  }

  else{
    return 0
  }

}

callFunc = (callMe) =>{
  return callMe()
}


enterPressed = (event) =>{
  let code = event.keyCode || event.which;
  if(code === 13) { //13 is the enter keycode
    
    axios.put(`/students/${id}`, {
        class: this.state.student.class,
        firstName: this.state.student.firstName,
        middleName: this.state.student.middleName,
        lastName:  this.state.student.lastName,
        sex:  this.state.student.sex,
        datOfBirth: this.state.student.dateOfBirth,
        nationality: this.state.student.nationality,
        fatherFirstName: this.state.student.fatherFirstName,
        fatherMiddleName: this.state.student.fatherMiddleName,
        fatherLastName: this.state.student.fatherLastName,
        fatherContact: this.state.student.fatherContact,
        motherFirstName: this.state.student.motherFirstName,    
        motherMiddleName: this.state.student.motherMiddleName,    
        motherLastName: this.state.student.motherLastName,       
        motherContact: this.state.student.motherContact,    
        email: this.state.student.email,
        postalAddress: this.state.student.postalAddress,
        doctorContact: this.state.student.doctorContact,
        doctorName: this.state.student.doctorName,
        photoURL: this.state.student.photoURL,
        termFeesPayer: this.state.student.termFeesPayer,
        termFeesPayerNumber: this.state.student.termFeesPayerNumber,
        feePaid: this.state.student.feePaid,
        termFeesTotal: this.state.student.termFeesTotal,
        prefferedHospital: this.state.student.prefferedHospital,
        doctorEmail: this.state.student.doctorEmail,
        guardianName: this.state.student.guardianName,
        guardianContact: this.state.student.guardianContact,
        halfDayCare: this.state.student.halfDayCare,
        fullDayCare: this.state.student.fullDayCare,
        annnualInsurance: this.state.student.annnualInsurance,
        piano: this.state.student.piano,
        guitar: this.state.student.guitar,
        skating: this.state.student.skating,
        taekwondo: this.state.student.taekwondo,
        ballet: this.state.student.ballet,
        transportZone1: this.state.student.transportZone1,
        transportZone2: this.state.student.transportZone2,
        transportZone3: this.state.student.transportZone3,
        transportZone4: this.state.student.transportZone4,
        transportZone5: this.state.student.transportZone5,
        transportZone6: this.state.student.transportZone6,
        termTotal: this.state.student.termTotal,
        previousTermBalance: this.state.student.previousTermBalance,
        amountPaid: event.target.value,
        
       }).then((res) =>{
       console.log(`updated amount: ${res.data}`);
       console.log(res.data)
    }).catch(err =>{
      console.log(err)
    })
  }
  
  this.setState({amountPaid: event.target.value})

}

getBalance = () =>{
  let dueBalance = this.getSumOfCharges() - this.state.amountPaid
  axios.put('/students/' + id,{
    class: this.state.student.class,
    firstName: this.state.student.firstName,
    middleName: this.state.student.middleName,
    lastName:  this.state.student.lastName,
    sex:  this.state.student.sex,
    datOfBirth: this.state.student.dateOfBirth,
    nationality: this.state.student.nationality,
    fatherFirstName: this.state.student.fatherFirstName,
    fatherMiddleName: this.state.student.fatherMiddleName,
    fatherLastName: this.state.student.fatherLastName,
    fatherContact: this.state.student.fatherContact,
    motherFirstName: this.state.student.motherFirstName,    
    motherMiddleName: this.state.student.motherMiddleName,    
    motherLastName: this.state.student.motherLastName,       
    motherContact: this.state.student.motherContact,    
    email: this.state.student.email,
    postalAddress: this.state.student.postalAddress,
    doctorContact: this.state.student.doctorContact,
    doctorName: this.state.student.doctorName,
    photoURL: this.state.student.photoURL,
    termFeesPayer: this.state.student.termFeesPayer,
    termFeesPayerNumber: this.state.student.termFeesPayerNumber,
    feePaid: this.state.student.feePaid,
    termFeesTotal: this.state.student.termFeesTotal,
    prefferedHospital: this.state.student.prefferedHospital,
    doctorEmail: this.state.student.doctorEmail,
    guardianName: this.state.student.guardianName,
    guardianContact: this.state.student.guardianContact,
    halfDayCare: this.state.student.halfDayCare,
    fullDayCare: this.state.student.fullDayCare,
    annnualInsurance: this.state.student.annnualInsurance,
    piano: this.state.student.piano,
    guitar: this.state.student.guitar,
    skating: this.state.student.skating,
    taekwondo: this.state.student.taekwondo,
    ballet: this.state.student.ballet,
    transportZone1: this.state.student.transportZone1,
    transportZone2: this.state.student.transportZone2,
    transportZone3: this.state.student.transportZone3,
    transportZone4: this.state.student.transportZone4,
    transportZone5: this.state.student.transportZone5,
    transportZone6: this.state.student.transportZone6,
    termTotal: this.state.student.termTotal,
    previousTermBalance: dueBalance,
    amountPaid: this.state.student.amountPaid,
    
   })
  return dueBalance 
}
render(){

  console.log(this.state.student.piano, this.state.student.guitar, this.state.student.skating)
  
  

  return(
               <div className="parentContainer">
        <GreyBar />
        <div className = "content">
         <AboutMenu class="unpaid fees" pupil={this.state.student}/>
            
     <SideBar />
          <div className="main">
            <div className="componentContainer">
               <section style={subTabContainer}>
               <p style={tabTitle}>Financial</p>
                   <div style={tabterm}>
                   <p  >Term 1-2018</p>
                   <img  style={{position: 'relative', top: '15px'}} src={settings}/>
                   </div>
               
               </section>


               <p style={basicTitle}>Basic charges</p>
              <div style={chargesblock} >
                  <input style={checkbox} checked= 'true' type="checkbox" />
                  <p style={chargeType}>Tuition</p>
                  <p style={chargeAmount} value={this.state.student.tuition} >Ksh.{this.chooseTuition()} </p>
                </div>
                <div style={chargesblock}>
                  <input style={checkbox} type="checkbox" checked= 'true'/>
                    <p style={chargeType}>Lunch</p>
                     <p style={chargeAmount}>Ksh.{this.chooseLunch()}  </p>
                 </div>
                <div style={chargesblock}>
                  <input style={checkbox} type="checkbox"  checked= 'true'/>
                    <p style={chargeType}>Swimming</p>
                     <p style={chargeAmount}>Ksh.{this.chooseSwimming()}</p>
                </div>
              
                <div style={chargesblock}>
                        <input type="radio" id="checkHalf" style={checkbox} /> 
                        <p style={chargeType}>Half-day day care</p>
                         <p style={chargeAmount}>Ksh.{this.state.feesStructure.dayCareHalf} </p>
                    </div>      
                <div style={chargesblock}>
                        <input type="radio"  id="checkFull"style={checkbox}/>
                        <p style={chargeType}>Full-day day care</p>
                        <p style={chargeAmount}>Ksh.{this.state.feesStructure.dayCareFull}</p>
                    </div>
                <div style={chargesblockLast}>
                            <input type="checkbox"  style={checkbox} checked={this.state.checked}/>
                            <p style={chargeType}>Annual Insurance</p>
                             <p style={chargeAmount}>Ksh.{this.state.feesStructure.personalInsurance}</p>
                </div> 
                <p style={optionalTitle}>Optional charges</p>   
                <div style={chargesblock}>
                  <input type="checkbox" checked={this.state.checkedPiano} id="piano" style={checkbox}/>
                  <p style={chargeType}>Piano</p>
                  <p style={chargeAmount}>Ksh.{this.state.feesStructure.piano} </p>
                </div>
                <div style={chargesblock}>
                    <input type="checkbox" checked = {this.state.checkedGuitar}  style={checkbox}/>
                    <p style={chargeType}>Guitar</p>
                    <p style={chargeAmount}>Ksh.{this.state.feesStructure.guitar} </p>
                   </div>
                <div style={chargesblock}>
                   <input type="checkbox"  style={checkbox}  checked = {this.state.checkedSkating}/>
                   <p style={chargeType}>Skating</p>
                   <p style={chargeAmount}>Ksh.{this.state.feesStructure.skating} </p>
                   </div>            
                <div style={chargesblock}>
                        <input type="checkbox"  style={checkbox} checked = {this.state.checkedTae}/>
                        <p style={chargeType}>Tae kwo ndo</p>
                        <p style={chargeAmount}>Ksh.{this.state.feesStructure.taekwodo} </p>
                      </div> 
                <div style={chargesblockLast}>
                      <input type="checkbox"  style={checkbox} checked = {this.state.checkedBallet}/>
                      <p style={chargeType}>Ballet</p>
                       <p style={chargeAmount}>Ksh.{this.state.feesStructure.ballet}</p>
                     </div>                  
                  
                          
                <p style={optionalTitle}>Transport charges</p>
                <div style={chargesblock}>
                        <input type="radio" style={checkbox} />
                        <p style={chargeType}>Zone 1-Delta to Joyland along the road.</p>
                        <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone1} </p>
                      </div>
                      <div style={chargesblock}>
                          <input type="radio" style={checkbox}/>
                          <p style={chargeType}>Zone 2-Mifereji, Kahigo,Foresight,Guango & Kigwaru</p>
                          <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone2} </p>
                         </div>
                      <div style={chargesblock}>
                         <input type="radio" style={checkbox}/>
                         <p  style={chargeType}>Zone 3- Muchatha, Clifftop, Sacred Heart, Gacharage, Lane 29</p>
                         <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone3} </p>
                         </div>            
                      <div style={chargesblock}>
                              <input type="radio" style={checkbox}/>
                              <p style={chargeType}>Zone 4- Ndenderu, Gachie</p>
                              <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone4}</p>
                            </div> 
                      <div style={chargesblock}>
                            <input type="radio" style={checkbox}/>
                            <p style={chargeType}>Zone 5- Banana, Platinum, Runda Gate</p>
                             <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone5} </p>
                           </div>  
                      <div style={chargesblockLast} >
                            <input type="radio" style={checkbox}/>
                            <p style={chargeType}>Zone 6- Gigiri, Thigiri</p>
                            <p style={chargeAmount}>Ksh.{this.state.feesStructure.transportZone6} </p>
                          </div>
                          
                          <p style={optionalTitle}>Sibling discounts</p>
                          <div style={chargesblock}>
                                  <input type="radio" style={checkbox} />
                                  <p style={chargeType}>No sibling</p>
                                  <p style={chargeAmount}>Ksh 00.00 </p>
                                </div>
                                <div style={chargesblock}>
                                    <input type="radio" style={checkbox}/>
                                    <p style={chargeType}>2nd sibling: 10% off tuition fees, 20% off transport fee</p>
                                    <p style={chargeAmount}>Ksh 00.00 </p>
                                   </div>
                                <div style={chargesblockLast} >
                                   <input type="radio" style={checkbox}/>
                                   <p style={chargeType}>3rd sibling and above: 15% off tuition fees, 20% off transport fee</p>
                                   <p style={chargeAmount}>Ksh 00.00 </p>
                                   </div>
                                   
                                <div className="totals" style={{marginTop: '3rem'}}>
                                <p id="total-text" style={{width: '25rem'}}>Total for Term 1-2018</p>
                           <p id="total-amount" style={{position:'absolute', left: '86.4%'}}>Ksh. {this.getSumOfCharges()} </p>
                        </div> 
                        <div className="totals" style={{marginTop: '25px'}}>
                                <p id="total-text">Previous Terms</p>
                                <p id="total-amount" style={{position:'absolute', left: '86.4%'}}>Ksh 00.00</p>
                             </div> 
                            <div className="totals"   style={{marginTop: '25px'}}>
                                    <p id="total-text">Total Due</p>
                                    <p id="total-amount" style={{position:'absolute', left: '86.4%'}}>Ksh {this.getBalance()}</p>
                                 </div>                 
                                 <div className="totals" style={{marginTop: '57px', borderBottom: 'solid 1px rgba(0,0,0,0.3)', paddingBottom: '1.5rem'}}>
                                        <p id="total-text">Amount Paid</p>
                                       <input placeholder={this.state.student.amountPaid} type="text" onChange={(e)=>{
                                         console.log(e.target.value)
                                       
                                       }}

                                       onKeyPress={this.enterPressed}
                                       style={{
                                         gridColumn: '-1', 
                                         marginRight: '10px',
                                        
                                          width: '236px',
                                          height: '42px',
                                          
                                          border: 'solid 1px rgba(0,0,0,0.3)',
                                          backgroundColor: '#ffffff'
                                        
                                       }}/>
                                     </div> 
                                     <AboutBottomNav nextPath={pathNext} prevPath={pathPrev} prev={prevText} next={nextText} identifier={this.props.match.params.id}/>                    
        </div>
      </div>
      </div></div>
        )
    }
}

export default StudentFeesPage;
