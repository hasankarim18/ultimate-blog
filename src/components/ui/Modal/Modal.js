import React, { Fragment } from 'react'
import classes from './modal.module.css'
import ReactDOM from 'react-dom'



const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={classes.backdrop} >Backdro</div>
    )
}

const ModalContent = (props) => {
    return (
        <div className={classes.modal}>
            <div className="content" >
                {props.children}
            </div>
            <div style={{ textAlign: 'right' }}>
                <button onClick={props.onClose} className={classes.close}>Close</button>
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