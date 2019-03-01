import React, { Component } from 'react';
import './styles/App.css';
import './styles/Home.css';
import { Link } from 'react-router-dom';
import SideBar from './components/global-layout/SideBar';
import Menu from './components/home-page-components/Menu';
import GreyBar from './components/global-layout/GreyBar';
import Datastore from 'nedb';
import axios from 'axios';


const dbStudents = new Datastore({ filename: 'data/students.json', autoload: true });


let list = []
const pathPage="/class-email-selected";
class App extends Component {
    state = {
        checkIcon: 'none',
        checked: false,
        searchText: '',
        filteredList: [],
        students: [],
        dayCareStuds: [],
        beginnerStuds: [],
        pp1Studs: [],
        pp2Studs: [],
        grade1Studs: [],
        grade2Studs: []

    }

    componentDidMount(){
        localStorage.clear()
        axios.get('http://localhost:5000/students').then(res =>{
            console.log(res)
            this.setState({
             students: res.data
            })

            
   this.setState({
       dayCareStuds: this.state.students.filter(student => student.class === "Day care")
   })
    

 console.log(this.state.dayCareStuds.length)

   
 this.setState({
    beginnerStuds: this.state.students.filter(student => student.class === "Beginner")
})
 

console.log(this.state.beginnerStuds.length)


this.setState({
    pp1Studs: this.state.students.filter(student => student.class === "PP1")
})
 

console.log(this.state.pp1Studs.length)


this.setState({
    pp2Studs: this.state.students.filter(student => student.class === "PP2")
})
 

console.log(this.state.pp2Studs.length)


this.setState({
    grade1Studs: this.state.students.filter(student => student.class === "Grade 1")
})
 

console.log(this.state.grade1Studs.length)


this.setState({
    grade2Studs: this.state.students.filter(student => student.class === "Grade 2")
})
 

console.log(this.state.grade2Studs.length)
})


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


   //event for handling filter icon click
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

  //event for aligning the titles on check click
     onCheckTitles = () =>{
            if(this.state.checkIcon == 'block'){
                this.setState({
                    checkTitle: this.state.checkTitle + 1
                })

            }
            else if(this.state.checkIcon == 'none') {
                this.setState({
                    checkTitle: this.state.checkTitle
                })
            }
 

    for(let i = 0; i < document.getElementsByClassName('titles').length; i++){       
        document.getElementsByClassName('titles')[i].style.gridColumn = this.state.checkTitle;
          console.log(this.state.checkTitle) }
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

         
         
     

  render() {

       let classesList = (
           
       <React.Fragment>
            <Link className = "name" className="classLevel" name="Daycare" to={"/class"} style={{textDecoration: "none"}} onClick = {window.location.reload} id="daycare-card">
         <input className = 'checkMark' value="Day care" onClick={this.toggleCheck} style={{display: 'block'}} type="checkbox" />
        <p className = "titles" style={{
            position: 'relative', top: '-23px'
        }} id="daycare-cardTitle">Daycare</p>
        <p className="numberStudents" style={{
            position: 'relative', top: '-23px'
        }}>{this.state.dayCareStuds.length} students</p>
         </Link>  
        
        
        <Link className="classLevel" className = "name" to={"/beginner"} name="Beginner" style={{textDecoration: "none"}} onClick = {window.location.reload} id="beginner-card"> 
        <input className = 'checkMark' value="Beginner" onClick={this.toggleClick} type="checkbox" />
        <p className = "titles" style={{
            position: 'relative', top: '-23px'
        }} id="beginner-cardTitle">Beginner</p>
        <p className="numberStudents" style={{
            position: 'relative', top: '-23px'
        }}>{this.state.beginnerStuds.length} students</p>
        </Link>   
        
        
        <Link className="classLevel" to={"/pp1"} className = "name" name="PP1" style={{textDecoration: "none"}}  onClick = {window.location.reload} id="PP1-card">
         <input className = 'checkMark' type="checkbox"  value="PP1" onClick={this.toggleClick} />
         <p className = "titles" style={{
            position: 'relative', top: '-23px'
        }} id="PP1-cardTitle">PP1</p>
         <p className="numberStudents" style={{
            position: 'relative', top: '-23px'
        }}>{this.state.pp1Studs.length} students</p>
         </Link>    
        

        <Link className = "name" className="classLevel" to={"/pp2"} name="PP2" style={{textDecoration: "none"}} onClick = {window.location.reload} id="PP2-card">
         <input className = 'checkMark' type="checkbox"  value="PP2" onClick={this.toggleClick} />
         <p className = "titles" style={{
            position: 'relative', top: '-23px'
        }} id="PP2-cardTitle">PP2</p>
         <p className="numberStudents" style={{
            position: 'relative', top: '-23px'
        }}>{this.state.pp2Studs.length} students</p>
         </Link>    
        


         <Link className="classLevel" to={"/grade1"} className = "name" name="grade1" style={{textDecoration: "none"}} onClick = {window.location.reload} id="grade1-card">
         <input className = 'checkMark' type="checkbox" value="Grade 1" onClick={this.toggleClick} />
         <p className = "titles" style={{
            position: 'relative', top: '-23px'
        }} id="PP2-cardTitle">Grade 1</p>
         <p style={{
            position: 'relative', top: '-23px'
        }} className="numberStudents">{this.state.grade1Studs.length} students</p>
         </Link>   



         <Link className="classLevel" className = "name" to={"/grade2"} name="grade2" style={{textDecoration: "none"}} onClick = {window.location.reload} id="grade2-card">
         <input className = 'checkMark' type="checkbox" value="Grade 2" onClick={this.toggleClick} />
         <p className = "titles" style={{
            position: 'relative', top: '-23px'
        }} id="PP2-cardTitle">Grade 2</p>
         <p className="numberStudents" style={{
            position: 'relative', top: '-23px'
        }}>{this.state.grade2Studs.length} students</p>
         </Link>
       </React.Fragment>
         )


         
                return(
                   
           <div className="parentContainer">
       <GreyBar />
        <div className = "content">
          <Menu searching = {this.getSearch} onCheck = {this.onCheckClick} search = {this.toggleSearch} filter={this.onFilterClick}/>
          
           <SideBar page={pathPage} emailPath={"/student-email-selected"} check={this.getChecked}/>
          
          <div className="main">
          
            <div className="componentContainer">
                 
          {
             classesList 
        }
                
            </div>
        </div>
      </div>
               </div>
    
                )
        }}
        

  


export default App;
