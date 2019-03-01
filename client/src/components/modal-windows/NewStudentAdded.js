import React, {Component} from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import axios from 'axios';

const popUpContainer = {
    width: '100vw',
    height: '100vh',
    display: 'grid', 
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
}

const popUpBox = {
    margin: 'auto',
  width: '295px',
  height: '158.7px',
  backgroundColor: '#f2f2f2',
  display: 'grid',
  gridTemplateRows: '1fr 1fr 1fr'


}

const title = {
    marginTop: '11px',
   marginLeft: '13px', 
  fontSize: '15px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.33,
  textAlign: 'left',
  color: '#000000'
}

const button = {
    marginLeft: '162px',
  width: '120px',
  height: '32px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  textAlign: 'center'
}


 const identifier = localStorage.getItem('id');



class NewStudentAdded extends Component{
    state={
        firstName: '',
        middleName: '',
        lastName: ''
    }

    componentDidMount(){
       
        axios.get(`http://localhost:5000/students/${identifier}`).then(res =>{
            console.log(res)
            this.setState({
                firstName: res.data.firstName,
                middleName: res.data.middleName,
                lastName: res.data.lastName
            })
       
       })
   
    }

    render(){


        return(

<div style={popUpContainer}>
    
    <div style={popUpBox}>
             <p style={title}>A new student added</p>
             <p style={title}>{this.state.firstName} {this.state.middleName} {this.state.lastName}</p>
             <Link to={'/home'}><div style={button}>OK</div></Link>
         </div> 
            </div>
          

            
        )

    }
    
    
}


export default NewStudentAdded;