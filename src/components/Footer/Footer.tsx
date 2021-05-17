import React from 'react';

require('./Footer.css');

const Footer = () => {
    return (
        <footer className="footerContainer flex w-full h-8 justify-center items-center">
            <div className="footerCredit font-mono">
                Built by Vernon Neilly
            </div>
        </footer>
    )
}

export default Footer;
