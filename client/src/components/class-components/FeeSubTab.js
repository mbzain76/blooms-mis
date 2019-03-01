import React from 'react';
import '../../styles/FeeSubTab.css';


const title = {
 position: 'relative',
 left: '27px',
 top: '15px',
 width: '358px',
 gridColumn: '1/-1',
 height: '95.5px',
 fontSize: '35px',
 fontWeight: 'normal',
 fontStyle: 'normal',
 fontStretch: 'normal',
 lineHeight: 1.2,
 letterSpacing: 'normal',
 textAlign: 'left',
 color: '#000000'
}

const FeeSubTab = (props) =>{
  
  console.log(props.tabTitleProp)
  return(
<section style={title}>
                 <p >{props.tabTitleProp}</p>
                   
             </section>

        
          
    )
}

export default FeeSubTab;