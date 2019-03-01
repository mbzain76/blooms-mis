import React from 'react';
import '../../styles/Info-text.css';

export const titleStyles = {
  width: '15rem',
  marginBottom: '10px',
  height: '21px',
  fontSize: '18px',
  fontWeight: 600,
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000'
}
export const infoStyles = {
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




const AboutContent = (props) =>{
  
  return(
            <div id = "Info-Block">
                    
                <div id="class-level">
                  <h5 style = {titleStyles}>{props.f1}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.class}</h6>
                  </div>
                <div id="firstName">
                  <h5 style = {titleStyles}>{props.f2}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.firstName}</h6>
                  </div>
                <div id="middleName">
                  <h5 style = {titleStyles}>{props.f3}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.middleName}</h6>
                  </div>
                <div id="lastName">
                  <h5 style = {titleStyles}>{props.f4}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.lastName}</h6>
                  </div>
                <div id="gender">
                  <h5 style = {titleStyles}>{props.f5}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.sex}</h6>
                  </div>
                <div id="dob">
                  <h5 style = {titleStyles}>{props.f6}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.dateOfBirth}</h6>
                  </div>
                <div id="nationality">
                  <h5 style = {titleStyles}>{props.f7}</h5>
                  <h6 style = {infoStyles}>{props.studentInfo.nationality}</h6>
                  </div>
                <div id="por">
                    <h5 style = {titleStyles}>{props.f8}</h5>            
                  <h6 style = {infoStyles}>{props.studentInfo.residentialAddress}</h6>
                    </div>
                         
                      <div id="transport">
                  <h5 style = {titleStyles}>{props.f9}</h5>            
                  <h6 style = {infoStyles}></h6>      
                </div>
                 <div id="picking">
                  <h5 style = {titleStyles}>{props.f10}</h5>            
                  <h6 style = {infoStyles}>{props.studentInfo.pickingPoint}</h6>      
                </div>
                  </div>
    )
}

export default AboutContent;