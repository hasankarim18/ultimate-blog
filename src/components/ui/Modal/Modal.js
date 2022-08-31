import React, { Fragment } from 'react'
import classNamees from './modal.module.css'
import ReactDOM from 'react-dom'



const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={classNamees.backdrop} >Backdro</div>
    )
}

const ModalContent = (props) => {
    return (
        <div className={classNamees.modal}>
            <div className="content" >
                {props.children}
            </div>
            <div style={{ textAlign: 'right' }}>
                <button onClick={props.onClose} className={classNamees.close}>Close</button>
            </div>
        </div>
    )
}



const Modal = (props) => {
    const modal = document.getElementById('modal')
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modal)}
            {ReactDOM.createPortal(<ModalContent onClose={props.onClose} > {props.children} </ModalContent>, modal)}

        </Fragment>
    )
}

export default Modal