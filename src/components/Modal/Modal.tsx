import React from 'react';

require('./Modal.css');

type ModalProps = {
    handleModalActive: (modalSet: boolean) => void;
}

const Modal = ({ handleModalActive }: ModalProps) => {

    return (
        <div className="modalContainer">
            <div className="modalBackground">
                
            </div>
            <div className="modalLayer flex items-center justify-center" onClick={() => handleModalActive(false)}>
                <form>
                    <div className="modalBody rounded-lg bg-green-400"></div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
