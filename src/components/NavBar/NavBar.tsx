import React, {useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '../Hamburger/Hamburger';

import TwitterIcon from '../Icons/TwitterIcon';
import GitIcon from '../Icons/GitIcon';

require('./NavBar.css');

type NavProps = {
    handleProjectBtn: () => void,
    handleAbtBtn: () => void,
    handleContactBtn: () => void,
    handleHamburgerHelped: () => void,
    hamburgerHelper: boolean
}

const handleGitBtn = () => {
    window.open('https://github.com/neillydev', '_blank');
}

const handleTwitterBtn = () => {
    window.open('https://twitter.com/neillydev', '_blank');
}

const NavBar = ({handleProjectBtn, handleAbtBtn, handleContactBtn, handleHamburgerHelped, hamburgerHelper}: NavProps) => {
    return (
        <nav className='flex items-center h-16 bg-white text-black relative shadow-sm
        font-sans font-bold'
            role='navigation'>
            <div className="flex items-center w-screen justify-between">
                <Link to='/' className='xl:pl-32 lg:pl-28 md:pl-12 pl-8 xl:text-lg lg:text-lg md:text-lg sm:text-sm text-xs whitespace-nowrap'>
                    &lt; Vernon Neilly /&gt;
                </Link>
                {/* <div className="flex justify-end w-screen pr-8 cursor-pointer lg:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </div> */}
                <Hamburger handleHamburgerHelped={handleHamburgerHelped} hamburgerHelper={hamburgerHelper} />
            </div>
            <div className="flex flex-end">
                <div className='items-center 2xl:pr-16 xl:pr-16 lg:pr-4 md:pr-4 sm:pr-4 xl:flex lg:flex md:hidden sm:hidden hidden'>
                    <button className="navBtn xl:m-8 m-4 flex justify-content items-center" onClick={() => handleAbtBtn()}>
                        <p className="font-sans font-bold text-md">About</p>
                        <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                    </button>
                    <button className="navBtn xl:m-8 m-4 flex items-center justify-content" onClick={() => handleProjectBtn()}>
                        <p className="font-sans font-bold text-md">Projects</p>
                        <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                    </button>
                    <button className="navBtn xl:m-8 m-4 flex justify-content items-center" onClick={() => handleContactBtn()}>
                        <p className="font-sans font-bold text-md">Contact</p>
                        <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                    </button>
                </div>
                <div className="xl:pr-12 lg:pr-4 md:pr-4 sm:pr-4 pr-4 items-end xl:flex lg:flex md:hidden sm:hidden hidden">
                    <button className="navBtn m-8 flex justify-content items-center" onClick={() => handleTwitterBtn()}>
                        <TwitterIcon />
                        <p className="font-sans font-semibold text-sm ml-4">Twitter</p>
                        <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                    </button>
                    <button className="navBtn m-8 flex justify-content items-center" onClick={() => handleGitBtn()}>
                        <GitIcon />
                        <p className="font-sans font-semibold text-sm ml-4">Github</p>
                        <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

/*  */

export default NavBar
