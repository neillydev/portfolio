import React, { LegacyRef } from 'react';

require('./Contact.css');

type ContactProps = {
    refObj: LegacyRef<HTMLDivElement> | undefined;
    handleModalActive: (modalSet: boolean) => void;
}
const Contact = ({ refObj, handleModalActive }: ContactProps) => {
    return (
        <div ref={refObj} className="contactContainer flex flex-col mb-20 justify-center items-center">
            <div className="contactHeader flex justify-center">
                <span className='bg-green-200 mr-8 rounded-xl mt-10' />
                <h1 className="font-black md:text-6xl text-5xl">Let's Chat</h1>
                <span className='bg-green-200 ml-8 rounded-xl mt-10' />
            </div>
            <div className="contactBody flex justify-center m-16">
                <h1 className="font-sans font-semibold text-xl">Currently looking for new opportunities! Shoot me a message, and let's talk about your project!</h1>
            </div>
            <button className="contactBtn border-2 border-green-400 text-green-500 rounded font-bold w-36" onClick={() => handleModalActive(true)}>
                Contact Me
            </button>
        </div>
    )
}

export default Contact;