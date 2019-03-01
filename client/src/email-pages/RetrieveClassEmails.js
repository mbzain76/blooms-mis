import React from 'react';
import '../styles/RetrieveClassEmailsStyles.css';
 const RetrieveClassEmails = () =>{
    return(
        <div id="container-box">
          <div id="center-box">
             <div id="center-content"> 
                 <p id="retrieve-text">
                Retrieving email addresses
                    </p> 
                    <p id="progress-numbers">40/40</p>
                    <div id="progress-bar"></div>   
                </div>
            
            
          </div>
        </div>
    )
}

export default RetrieveClassEmails;