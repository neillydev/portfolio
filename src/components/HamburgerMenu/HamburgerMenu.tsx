import React from 'react'

require('./HamburgerMenu.css');

const HamburgerMenu = () => {
    return (
        <div className='hamburgerMenuContainer hamburgerOverlayAnimation flex flex-col items-center p-12'>
            <button className="mobileNavBtn mobileAbout hamburgerTextAnimation font-sans font-bold text-4xl p-8 ">
                <p>About</p>
            </button>
            <button className="mobileNavBtn mobileProjects hamburgerTextAnimation font-sans font-bold text-4xl p-8">
                <p>Projects</p>
            </button>
            <button className="mobileNavBtn mobileContact hamburgerTextAnimation font-sans font-bold text-4xl p-8">
                <p>Contact</p>
            </button>
        </div>
    )
}

export default HamburgerMenu
