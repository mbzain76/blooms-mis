import React, {Component} from 'react';
import '../styles/App.css';
import '../styles/StudentList.css';
import SideBar from '../components/global-layout/SideBar';
import GreyBar from '../components/global-layout/GreyBar';
import DaycareList from '../components/class-components/DaycareList';
import axios from 'axios';
import ClassListMenu from '../components/class-components/CLassListMenu';
import ClassListSubTab from '../components/class-components/ClassListSubTab';
import FullNameTab from '../components/class-components/FullNameTab';




class PP2 extends Component{
   
     state={
        filter: 'none',
        students: [],
        display: 'none',
        checkIcon: 'none',
        searchText: '',
       pp2Studs: []
    }

 

    componentDidMount(){
        axios.get('/students').then(res =>{
            console.log(res)
            this.setState({
             students: res.data
            })
            
   this.setState({
    pp2Studs: this.state.students.filter(student => student.class === "PP2")
})
 

console.log(this.state.pp2Studs.length)
        })
    }
   
       //event for handling clicking of checkbox icon
       onCheckClick = () =>{
        if(this.state.checkIcon == 'none'){
           this.setState({
           checkIcon: 'block'
       }) 
      }
      else {
          this.setState({
              checkIcon: 'none'
          })
      }
    for(let i = 0; i < document.getElementsByClassName('checkMark').length; i++){       
      document.getElementsByClassName('checkMark')[i].style.display = this.state.checkIcon;
        console.log(this.state.checkIcon) }
  } 

    // function dealing with the filter dropdown menu
    onFilterClick = () =>{
        this.state.filter === 'none' ? this.setState({ filter: 'block'}) : this.setState({ filter: 'none'});
        document.getElementById('filterList').style.display = this.state.filter;
        console.log(this.state.filter)
    }
    
      //event to toggle search view

      toggleSearch = () =>{
        this.state.display === "none" ? this.setState({display: "block"}) : this.setState({display: "none"})
        
        document.getElementsByTagName('input')[0].style.display = this.state.display
    }
 
      //get search text 
      getSearch = (e) =>{
        this.setState({
            searchText: e.target.value
        })
        console.log(this.state.searchText)
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
    render(){
     
        localStorage.clear();
      
        localStorage.setItem('class', 'PP2')     
        return(
  
                          <div className="parentContainer">
        <GreyBar />
        <div className = "content">
        <ClassListMenu title="Students / PP2" path={"/beginner-fee-structure"} searched = {this.state.searchText} searching={this.getSearch} filterDisplay = {this.state.filter} filter = {this.onFilterClick} searchfunc = {this.toggleSearch} searchBar = {this.state.display} toggleCheck={this.onCheckClick}/>
            
        <SideBar  emailPath={"/student-email-selected"} check={this.getChecked}/>

          <div className="main">
            <div className="componentContainer">
                <ClassListSubTab number = { this.state.pp2Studs.length}tab="PP2" />
               <FullNameTab />
                <DaycareList  filtered={this.state.pp2Studs} retrieveS = {this.getChecked} view = {this.state.searchText} checkVisible = {this.state.checkIcon} classLevel="PP2" students = {this.state.students}/>
              
              </div>
            </div>
        </div>
      </div>       
     
        )
    }
}

export default PP2;
