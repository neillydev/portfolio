import React, { useContext } from 'react';

import {ModalContext, ModalProvider} from '../contexts/ModalContext';

require('./Modal.css');

const Modal = () => {

    const { dispatch } = useContext(ModalContext);
    return (
        <div className="modalContainer flex items-center justify-center">
            <div className="modalLayer flex items-center justify-center">
                <form>
                    <div className="modalLayerContainer rounded-lg bg-green-400">
                        <div className="modalHeader flex justify-center">
                            <h1 className="text-white font-black font-sans p-4 text-3xl">Contact Me</h1>
                        </div>
                        <div className="modalBody">
                            <div className="modalHeader p-4">
                                <h5 className="subjectHeader text-white text-lg font-bold">
                                    SUBJECT
                                </h5>
                                <div className="inputContainer">
                                    <input type="text" className="modalInputSubject rounded" />
                                </div>
                            </div>
                            <div className="modalHeader p-4">
                                <h5 className="bodyHeader text-white text-lg font-bold">
                                    BODY
                                </h5>
                                <div className="inputContainer">
                                    <textarea className="modalInputBody rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="modalBackground" onClick={() => dispatch( { type: 'false' } )}>

                </div>
            </div>
        </div>
    )
}

export default Modal;
