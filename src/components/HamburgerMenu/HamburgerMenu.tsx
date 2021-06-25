import React from 'react'

require('./HamburgerMenu.css');

const HamburgerMenu = () => {
    return (
        <div className='hamburgerMenuContainer hamburgerOverlayAnimation flex flex-col items-center p-12'>
            <button className="mobileNavBtn mobileAbout font-sans font-bold text-4xl p-4">
                <p>About</p>
            </button>
            <button className="mobileNavBtn mobileProjects font-sans font-bold text-4xl p-4">
                <p>Projects</p>
            </button>
            <button className="mobileNavBtn mobileContact font-sans font-bold text-4xl p-4">
                <p>Contact</p>
            </button>
        </div>
    )
}

export default HamburgerMenu
