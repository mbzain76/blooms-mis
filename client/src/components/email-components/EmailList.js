import React from 'react';
//grab selected emeails from localStorage and convert to array
const selected = localStorage.getItem('selected-emails') 


const selectedEmailText = {
    
  width: '20rem',  
  height: '28px',
  fontSize: '25px',
  fontWeight: 300,
  lineHeight: 1.2,
  textAlign: 'left',
  color: '#000000',
  gridColumn: '1/-1',
  marginLeft: '25px',
  marginTop: '45px'
}  

const EmailList = () =>{
  let emails;
  if(selected.length >= 0 ){
      emails = selected.split(",")
  }
    
    let selectedClasses = emails.map( email => {
        return(
            <React.Fragment >
                <p style={selectedEmailText}>{email}</p>
            </React.Fragment>
            
        )
    })

  return selectedClasses;
}

export default EmailList;