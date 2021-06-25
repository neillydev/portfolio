import React from 'react'

require('./HamburgerMenu.css');

type HamburgerMenuProps = {
    handleProjectBtn: () => void,
    handleAbtBtn: () => void,
    handleContactBtn: () => void,
    handleHamburgerHelped: () => void
}

const HamburgerMenu = ({handleProjectBtn, handleAbtBtn, handleContactBtn, handleHamburgerHelped}: HamburgerMenuProps) => {
    return (
        <div className='hamburgerMenuContainer hamburgerOverlayAnimation flex flex-col items-center p-12'>
            <button className="mobileNavBtn mobileAbout hamburgerTextAnimation font-sans font-bold text-4xl p-8 " 
                onClick={() => {
                    handleAbtBtn();
                    handleHamburgerHelped();
                }
            }>
                <p>About</p>
            </button>
            <button className="mobileNavBtn mobileProjects hamburgerTextAnimation font-sans font-bold text-4xl p-8" 
                onClick={() => {
                    handleProjectBtn();
                    handleHamburgerHelped();
                }}>
                <p>Projects</p>
            </button>
            <button className="mobileNavBtn mobileContact hamburgerTextAnimation font-sans font-bold text-4xl p-8" 
                onClick={() => {
                    handleContactBtn();
                    handleHamburgerHelped();
                }}>
                <p>Contact</p>
            </button>
        </div>
    )
}

export default HamburgerMenu
