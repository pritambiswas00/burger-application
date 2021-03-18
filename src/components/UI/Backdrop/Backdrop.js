import React from 'react'
import BackdropCss from './Backdrop.css'
 

const Backdrop = (props)=>{
    return (
      props.show ?  <div className={BackdropCss.Backdrop} onClick={props.clicked}>

      </div> : null
    );
}

export default Backdrop;