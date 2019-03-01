import React from 'react';
import { Link} from 'react-router-dom';
import next from '../../next.png';
import '../../styles/Info-text.css';




const Info = (props) =>{
  
     
    return(

      
       <form  id = "Info-Block">
               
          <div id="class-level" >
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }} >class</h5>       
             <select stye={{
               
     width: '843px',
     height: '42px',
       opacity: 0.7,
     border: 'solid 1px rgba(0,0,0,0.5)'
             }} name="classes">
  <option value="Day care">Day care</option>
  <option value="Beginner">Beginner</option>
  <option value="PP1">PP1</option>
  <option value="PP2">PP2</option>
  <option value="Grade 1">Grade 1</option>
  <option value="Grade 2">Grade 2</option>
</select>
            </div>
          <div id="firstName">
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>First Name</h5>
             <input type="text" placeholder="First Name"  />
            </div>
          <div id="middleName">
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }} >Middle Name</h5>
             <input type="text" placeholder="Middle Name"  />
            </div>
          <div id="lastName">
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>Last Name</h5>
             <input type="text" placeholder="Last Name"  />
            </div>
          <div id="gender">
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>sex</h5>
             <input type="text" placeholder="sex"  />
            </div>
          <div id="dob">
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>Date of Birth</h5>
             <input type="text" placeholder="DD/MM/YY"  />
            </div>
          <div id="nationality">
            <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>Nationality</h5>
             <input type="text" placeholder="Nationality" />
            </div>
          <div id="por">
              <h5 style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>Place of Residence</h5>            
             <input type="text" placeholder="Place of Residence" />
              </div>
                   
                <div id="transport">
            <h5  style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 1.22,
                letterSpacing: 'normal',
                textAlign: 'left',
                color: '#000000'
              
            }}>Picking Point Transport</h5>            
             <input type="text" placeholder="Picking Point"  />
          </div>
                 <div id = "bottom-navigation">
               <div style={{
                
                  width: '125px',
                  height: '40px',
                  backgroundColor: '#44943e',
                 
                  position: 'absolute',
                  left: '58.2%'
               }}><p style={{
                 position:'relative',
                 left: '38px',
                  width: '49px',
                  height: '17px',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontStretch: 'normal',
                  lineHeight: 1.21,
                  letterSpacing: 'normal',
               
                  color: '#ffffff'
                
               }}>DELETE</p></div>
          <div id = "navigation-bottom-next">
            <p style={{position: 'relative', bottom: '10px'}}>FATHER</p><Link to={"/addf"} onClick={window.location.reload}>
        <img onClick= {

         props.basic

        }
          
          
          src = {next} alt = "next"/></Link></div>
          
        </div>
            </form>
    
)
  
}




export default Info;