import React from 'react';

require('./Contact.css');

const Contact = () => {
    return (
        <div className="contactContainer flex flex-col mb-20 justify-center items-center">
            <div className="contactHeader flex justify-center">
                <h1 className="font-black text-6xl">Let's Chat</h1>
            </div>
            <div className="contactBody flex justify-center m-24">
                <h1 className="font-sans font-normal text-xl">Currently looking for new opportunities! Shoot me a message, and let's get the ball rolling!</h1>
            </div>
            <button className="contactBtn border-2 border-green-400 text-green-500 rounded font-bold w-44">
                Contact Me
            </button>
        </div>
    )
}

export default Contact;
