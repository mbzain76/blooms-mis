import React from 'react';
import '../../styles/ClassListMenu.css';

import search from '../../search.png';
import filter from '../../filter.png';
import mark from '../../mark.png';
import card from '../../card.png';
import back from '../../back.png';

import { Link} from 'react-router-dom';



const ClassListMenu = (props) =>{
    return(


<div className="menu-classes" >
              <Link to={"/home"} onClick={window.location.reload}>
              <img style={{position: 'absolute', left: '5%'}} id="back-img-class" src={back} alt="previous"/></Link>
            <div id="menu-title" style={{position: 'absolute', left: '9.9%'}}>{props.title}</div>
              <input  onChange={props.searching} style={{
               
               width: '250px',
               height: '40px',
               boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.16)',
               border: 'solid 0.2px #707070',
               backgroundColor: '#ffffff',
               position: 'absolute',
               left: '54.5%'

             
         }} className ="search" type="search" placeholder="search"></input>
            <span className="searchIcon" style={{position: 'absolute', left: '66.9%'}}><img src={search} style={{cursor: 'pointer'}} onClick={props.searchfunc}/></span>
            <span onClick={props.toggleCheck} style={{position: 'absolute', cursor:'pointer', left: '71.7%'}} className="markIcon"><img src={mark} /></span>
            <Link to={`${props.path}`} className="cardIcon" style={{position: 'absolute', left: '77.4%'}} onClick={window.location.reload}><span  onClick={window.location.reload} ><img src={card} /></span></Link>
           <div className="pageName" style={{position: 'absolute', left:'82%'}}>Name(Ascending)</div>
            <span className="filter" style={{position: 'absolute', left: '93.2%'}}><img src={filter} onClick={props.filter} />
              <ul style={{display: `${props.filterDisplay}`, zIndex: 10, width: '200px', position: 'relative', right: '3rem'}} id="filterList">
                
                <li>Name(Ascending)</li>
                <li>Name(Descending)</li>
                            </ul>
              </span>
           
          
            </div>
        
    )
}

export default ClassListMenu;