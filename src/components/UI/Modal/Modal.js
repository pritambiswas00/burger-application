import React from 'react'
import ModalCss from './Modal.css'
import Aux from '../../../HOC/Aux'
import Backdrop from '../Backdrop/Backdrop'

const  Modal = (props)=>(
    <Aux>
       <Backdrop show={props.show} clicked={props.cancelModal}/>
      <div className={ModalCss.Modal}
       style={{
           transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
           opacity: props.show ? '1' : '0'
       }}
       >
           {props.children}
       </div>
    </Aux>

)

export default Modal 
