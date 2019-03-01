import React, {Component} from 'react';
import './styles/App.css';
import SideBar from './components/global-layout/SideBar';
import GreyBar from './components/global-layout/GreyBar';
import Menu from './components/home-page-components/Menu';
import './styles/FeeView.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FullNameTab from './components/class-components/FullNameTab';
import UnpaidFeeSubTab from './components/class-components/UnpaidFeeSubTab';
import {createFilter} from 'react-search-input'




const KEYS_TO_FILTERS = ['firstName', 'middleName', 'lastName']


class FeeView extends Component{
    state = {
        
        checkIcon: 'none',
        checked: false,
        searchText: '',
        filteredList: [],
        display: 'none',
       students: [],
       unpaidStudents: [],
       searchText: '',
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
      axios.get('http://localhost:5000/students').then(res =>{
          console.log(res)
          this.setState({
           students: res.data
          })
          
        
      })
  }

  
      //event for handling clicking of checkbox icon
      onCheckClick = () =>{
        if(this.state.checkIcon == 'none'){
           this.setState({
           checkIcon: 'block'
       }) 
      }
      else if(this.state.checkIcon == 'block'){
          this.setState({
              checkIcon: 'none'
          })
      }
    for(let i = 0; i < document.getElementsByClassName('checkMark').length; i++){       
      document.getElementsByClassName('checkMark')[i].style.display = this.state.checkIcon;
        console.log(this.state.checkIcon) }
  } 
  
  
     //get search text 
     getSearch = (e) =>{
        this.setState({
            searchText: e.target.value
        })
        console.log(this.state.searchText)
      
     }  

         
    

 onFilterClick = () =>{
      if(this.state.display == 'none'){
           this.setState({
           display: 'block'
       }) 
      }
      else {
          this.setState({
              display: 'none'
          })
      }
      document.getElementById('filterDropList').style.display = this.state.display;
        console.log(this.state.display)   
  }

          //event for checking the checked fields
    getChecked = () =>{
        let inputs = [...document.getElementsByTagName('input')]
      let trueInputs =   inputs.filter( input => input.checked === true)
      let selectedInputs = []
      
      for(let i = 0; i < trueInputs.length; i++){
          console.log(trueInputs[i].value)
           selectedInputs.push(trueInputs[i].value) 
      }
      
      console.log(selectedInputs)

      localStorage.setItem('selected-emails', selectedInputs)

    }

    //event to toggle search view

    toggleSearch = () =>{
        this.state.checkIcon === "none" ? this.setState({checkIcon: "block"}) : this.setState({checkIcon: "none"})
        
        document.getElementsByTagName('input')[0].style.display = this.state.checkIcon
    }
    //event for toggling check state

    toggleCheck = () =>{
        this.state.checked === true ? this.setState({checked: false}) : this.setState({checked: true}) 
        console.log(this.state.checked)
    }



  render(){

    let unpaidStudents = this.state.students.filter(student =>{
        return student.previousTermBalance - student.amountPaid !== 0  
    }).map(student => {
        return(
            <Link  key = {student._id} style={{textDecoration: 'none'}} onClick={window.location.reload} className="studentBlock" to={`/abs/${student._id}` }>
            <input id="check" type="checkbox" 
            value={`${student.firstName} ${student.middleName} ${student.lastName}` } 
            style={{display: this.state.checkIcon}}  />
            <p style={{width:'35rem',
               display: 'block',
               height: '28px',
               fontSize: '25px',
               fontWeight: 300,
               fontStyle: 'normal',
               letterSpacing: 'normal',
               textAlign: 'left',
               color: '#000000',
               marginTop: '49px'
        }} id="studentName">{student.firstName} {student.middleName} {student.lastName}</p>
        </Link>
        )
    })



        const filteredStuds = this.state.students.filter(createFilter(this.state.searchText, KEYS_TO_FILTERS)).map(student =>{
        return(
        <Link style={{textDecoration: 'none'}} key = {student._id} onClick={window.location.reload} className="studentBlock" to={`/abs/${student._id}` }>
            <input id="check" type="checkbox" value={`${student.firstName} ${student.middleName} ${student.lastName}` } style={{display: this.state.checkIcon}}  />
            <p style={{width:'35rem',
               display: 'block',
               height: '28px',
               fontSize: '25px',
               fontWeight: 300,
               fontStyle: 'normal',
               letterSpacing: 'normal',
               textAlign: 'left',
               color: '#000000',
               marginTop: '49px'
        }} id="studentName">{student.firstName} {student.middleName} {student.lastName}</p>
        </Link>
        
        )
    })
    
    return(
            <div className="parentContainer">
      <GreyBar />
        <div className = "content"> 
        <Menu
         searching = {this.getSearch}
         onCheck = {this.onCheckClick}
         searchBar={this.state.checkIcon}
         search = {this.toggleSearch}
         filter={this.onFilterClick}
         />
            
          <SideBar  emailPath={"/student-email-selected"} check={this.getChecked} />
          <div className="main">
            <div className="componentContainer">
            <UnpaidFeeSubTab number={filteredStuds.length}/>
                <FullNameTab />
           {this.state.searchText.length > 0 ? filteredStuds : unpaidStudents }
              </div>
            </div>
        </div>
      </div>
            
    )
  }
}

export default FeeView;