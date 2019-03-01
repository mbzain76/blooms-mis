import React from 'react';
import {Link} from 'react-router-dom';
import back from '../../back.png';
import '../../styles/AboutMenu.css';


const menuContainer = {
    gridColumn: '2/-1',
    width: '100vw',
  backgroundColor: '#ffffff'
}

const backImg = {
    marginLeft: '2%',
    marginTop: '31px'
}
const pathContainer = {
    marginLeft: '81px',
    width: '1000px',
    display: 'flex',
    position: 'relative',
    bottom: '70px'
}
const pathStyle = {
    
  height: '34px',
  opacity: 0.5,
  fontSize: '30px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.23,
  letterSpacing: 'normal',
  textAlign: 'left',
  color:' #000000'
}
const nameStyle ={
    width: '350px',
    marginLeft: '10px',
    paddingBottom: '2px',
  height: '34px',
  fontSize: '30px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.23,
  letterSpacing: 'normal',
  textAlign: 'left',
  color:' #000000'
}

const AboutMenu = (props) =>{
    console.log(props.pupil)

   const chooseText = () =>{
        switch(props.pupil.class){
            case 'Day care':
            return "Students / Day care /";
            break;

            case 'Beginner':
            return "Students / Beginner /";
            break;

            case 'PP1':
            return "Students / PP1 /";
            break;

            case 'PP2':
            return "Students / PP2 /" ;
            break;

            case 'Grade 1':
            return "Students / Grade 1 /";
            break;

            case 'Grade 2':
            return "Students / Grade 2 /";
            break;

        }
    }


 return(

<div style={menuContainer}>
             <Link to={"/class"} onClick={window.location.reload} ><img  style={backImg} src={back} alt="previous"/></Link>
            <div style={pathContainer}>
            <p  style={pathStyle}>{chooseText()}</p> 
            <h4 style={nameStyle}> {` ${props.pupil.firstName} ${props.pupil.middleName} ${props.pupil.lastName}`}
            </h4>
            </div>
             
          
            </div>

         
 )}

export default AboutMenu;