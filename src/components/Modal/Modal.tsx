import React, {useState} from 'react';

require('./Modal.css');

type ModalProps = {
    handleModalActive: (modalSet: boolean) => void;
}

const Modal = ({ handleModalActive }: ModalProps) => {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <>
        { modalOpen ?
        <div className="modalContainer">
            <div className="modalBackground" onClick={() => handleModalActive(false)}>

            </div>
        </div>
        : null
        }
        </>
    )
}

export default Modal;
