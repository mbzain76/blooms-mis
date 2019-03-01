import React from 'react';

//styles for the component
const subText = {
    width: '442px',
    height: '39px',
    fontSize: '35px',
    lineHeight: 1.2,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#000000',
    marginTop: '33px', 
    marginLeft: '25px',
     width: '50rem'
}


const EmailSubTab = (props) =>{
    return(
           <div  className="pageTitleList" >
                    <p style={subText}>{props.tab}</p>
                 
               
                </div>
    )
}

export default EmailSubTab;