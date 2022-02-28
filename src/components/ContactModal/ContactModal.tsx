import React, { useState, useContext } from 'react';
import { send } from 'emailjs-com';

import { ModalContext, ModalProvider } from '../contexts/ModalContext';

require('./ContactModal.css');

const ContactModal = () => {

    const { dispatch } = useContext(ModalContext);

    const [formContent, setFormContent] = useState({
        from_name: '',
        message: '',
        reply_to: ''
    });

    const handleFormSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        send('service_ID', 'template_ID', formContent, 'user_id');
        dispatch({ type: 'false' });
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormContent({ ...formContent, [e.target.name]: e.target.value });
    };

    return (
        <div className="modalContainer flex items-center justify-center">
            <div className="modalWrapper rounded-lg bg-green-400">
                <div className="modalSidebar">
                </div>
                <div className="modalContent">
                    <div className="modalHeader">
                        <h1 className="font-black font-sans">Let's Get In Touch</h1>
                    </div>
                    <div className="modalBody">
                        <div className="modalBodyMessage">
                            <h1 className="font-black font-sans">Message</h1>
                            <textarea name="message" className="messageInput" value={formContent.message} onChange={handleFormChange} />
                        </div>
                        <div className="modalBodyInfo">
                            <div className="modalBodyName">
                                <h1 className="font-black font-sans">Name</h1>
                                <textarea name="from_name" className="infoInput" value={formContent.from_name} onChange={handleFormChange} />
                            </div>
                            <div className="modalBodyEmail">
                                <h1 className="font-black font-sans">Email</h1>
                                <textarea name="reply_to" className="infoInput" value={formContent.reply_to} onChange={handleFormChange} />
                            </div>
                        </div>
                    </div>
                    <div className="modalControls">
                        <button type="submit" className="modalSubmitBtn" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="modalBackground" onClick={() => dispatch({ type: 'false' })}>

            </div>
        </div>
    )
}

export default ContactModal;
