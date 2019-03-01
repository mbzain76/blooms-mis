import React from 'react';
import '../../styles/ClassListMenu.css';
import '../../styles/Home-menu.css';
import search from '../../search.png';
import mark from '../../mark.png';
import filter from '../../filter.png';
import {BrowserRouter,Link } from 'react-router-dom';




const KEYS_TO_FILTERS = ['firstName', 'middleName', 'lastName']

const title = {
   position: 'relative',
   top: '23px',
   left: '22%',
  width: '121px',
  height: '34px',
  fontSize: '30px',
  fontWeight: 'bold',
  fontStyle: 'normal',
  lineHeight: 1.23,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#000000'
}

const searchIcon = {
  position: 'absolute',
  top: '60px',
  left: '78.3%'
}

const checkIcon = {
   position: 'absolute',
   top: '60px',
   left: '83.3%'
}

const page = {
   position: 'absolute',
   top: '60px',
   left: '91.5%',
   
  width: '42px',
  height: '21px',
  fontSize: '18px',
  fontWeight: 300,
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: 1.28,
  letterSpacing: 'normal',
  textAlign: 'right',
  color: '#44943e'
}


const filterIcon = {
   position: 'absolute',
   top: '60px',
   left:'96%'
}
const Menu = (props) =>{

return (
  

<div className="menu-home">
            <div style={title}>Students</div>
            <input onChange={props.searching} style={{display: 'block'}} style={{
               
                  width: '250px',
                  height: '40px',
                  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.16)',
                  border: 'solid 0.2px #707070',
                  backgroundColor: '#ffffff',
                  position: 'absolute',
                  left: '64%',
                  top: '50px'

                
            }} type="search" placeholder="search"></input>
            <span style={searchIcon}><img  src={search} /></span>
            <span style={checkIcon}><img src={mark} onClick = {props.onCheck}/></span>
            <div style={{height: '25px', width: '3px', backgroundColor: '#44943e', position: 'absolute', left: '88.4%', top: '60px'}}></div>
            <div style={page}>class</div>
            <span style={filterIcon}><img style={{cursor: 'pointer'}} src={filter} onClick={props.filter} />
                            <ul id="filterDropList" style={{width: '179px'}}>
                <Link style={{width: '179px', textDecoration: 'none'}} to={"/home"}><li >class</li></Link>
                <Link style={{width: '179px', textDecoration: 'none'}} to={"/fee"} onClick={window.location.reload}><li>unpaid fees</li></Link>
                </ul>
              </span>
            
            </div>
   

         )
}

export default Menu;

       