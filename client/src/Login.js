import React, {Component} from 'react';
import GreyBar from './components/global-layout/GreyBar';
import './styles/input.css';


export default class Login extends Component{
    //very simple authentication implementation as I try to learn this Auth0 shit
    state={
        email: 'info@bloomsfieldschool.co.ke',
        password: 'Bl00m5Field',
        pass : 'password'
    }
    
    tooglePass = () =>{
        if (this.state.pass === "password" ){
            this.setState({
                pass: 'text'
            })
            
            this.setState({
                pass: 'password'
            })
        }
    }
 

    render(){
        return(
            <React.Fragment>
                <div style = {{
                    width: '100vw',
                    height: '768px',
                    backgroundColor: '#f5f6fa'
                }}>
                    <GreyBar />
                    <div name="avatar-circle" style = {{
                          position: 'absolute',
                          top: '17.6%',
                          left: '40vw',
                          width: '205.3px',
                          height: '205.3px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0,0,0,0.1)'
                    }}>
                    </div>
                    <p name="email-title" style={{
                        position: 'absolute',
                        top: '47%',
                        left: '34.8%',
                            width: '112px',
                            height: '22px',
                            fontSize: '18px',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.22,
                            letterSpacing: 'normal',
                            textAlign: 'left',
                            color: '#000000'
                          
                    }}>Email address</p>
                    <input name="email-box" id="email" type="email"  style={{
                        position: 'absolute',
                      top: '53.8%',
                      left: '34.8%',
                        width: '376px',
                            height: '42px',
                            opacity: 0.5,
                            border: 'solid 1px #000000',
                            fontSize: '18px',
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.22,
                            letterSpacing: 'normal',
                            textAlign: 'left',
                            color: '#000000',
                            paddingLeft: '10px'
                        
                          
                    }} />

                    <p name="password-title" style={{
                        
                            width: '78px',
                            height: '22px',
                            position: 'absolute',
                            top: '61.5%',
                            left: '34.8%',
                            fontSize: '18px',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.22,
                            letterSpacing: 'normal',
                            textAlign: 'left',
                            color: '#000000'
                          
                    }}>Password</p>

                    <input id="password" name="password-text-box"  type={this.state.pass} style={{
                        position: 'absolute',
                        top: '68.2%',
                        left: '34.8%',
                            width: '376px',
                            height: '42px',
                            opacity: 0.3,
                            border: 'solid 1px #000000',
                            fontSize: '18px',
                            fontWeight: 'normal',
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.22,
                            letterSpacing: 'normal',
                            textAlign: 'left',
                            color: '#000000',
                            paddingLeft: '10px'
                        
                          
                    }}/>


                    <div name = "button" onClick={
                           () =>{

                            if(document.getElementById('email').value === this.state.email && document.getElementById('password').value === this.state.password){
                                window.location.href="/home"
                            }
                    
                            else {
                                alert("Please fill in the correct credentials")
                            }
                        }
                    } style={{
                            width: '125px',
                            height: '40px',
                            backgroundColor: '#44943e',
                            position: 'absolute',
                            top: '79.3%',
                            left: '43vw',
                            fontSize: '17px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.21,
                            letterSpacing: 'normal',
                            textAlign: 'center',
                            paddingTop: '15px',
                            color: '#ffffff'
                          
                    }}>
                        LOG IN
                    </div>


                </div>
            </React.Fragment>
        )
    }
}
