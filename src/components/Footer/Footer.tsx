import React from 'react';
import Repo from '../Icons/Repo';

require('./Footer.css');

const Footer = () => {
    return (
        <footer className="footerContainer flex w-full justify-center items-center">
            <div className="footerDiv flex justify-center items-center rounded-lg bg-green-400 h-16 w-72">
                <a href='https://github.com/neillydev' rel='noopener noreferrer' target='_blank'>
                    <div className="footerCredit font-mono text-gray-100 text-sm">
                        Built by Vernon Neilly III
                    </div>
                    <div className="">
                        <span className=''>

                        </span>
                        <span>

                        </span>
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
