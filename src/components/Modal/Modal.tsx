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
                    <div className="modalLayerContainer rounded-lg bg-green-400">
                        <div className="modalHeader flex justify-center">
                            <h1 className="text-white font-black font-sans p-4 text-3xl">Contact Me</h1>
                        </div>
                        <div className="modalBody">
                            <div className="modalSubjectHeader p-4">
                                <h5 className="subjectHeader text-white text-lg font-bold">
                                    SUBJECT
                                </h5>
                                <div className="inputContainer">
                                    <input type="text" className="modalInputSubject rounded" />
                                </div>
                            </div>
                            <div className="modalBodyHeader p-4">
                                <h5 className="bodyHeader text-white text-lg font-bold">
                                    BODY
                                </h5>
                                <div className="inputContainer">
                                    <input type="text" className="modalInputBody rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
