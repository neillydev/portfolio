import React from 'react';
import { Link } from 'react-router-dom';

import TwitterIcon from '../Icons/TwitterIcon';
import GitIcon from '../Icons/GitIcon';

const styles = require('./NavBar.css');

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm
        font-sans font-bold'
        role='navigation'>
            <Link to='/' className='pl-8'>
                &lt; Vernon Neilly /&gt;
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 items-center xl:flex lg:flex md:flex sm:hidden hidden">
                <button className="navBtn m-8 flex justify-content items-center">
                    <TwitterIcon />
                    <p className="font-sans font-semibold text-sm ml-4">Twitter</p>
                    <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                </button>
                <button className="navBtn m-8 flex justify-content items-center">
                    <GitIcon />
                    <p className="font-sans font-semibold text-sm ml-4">Github</p>
                    <span className='btnHov absolute rounded h-1 bg-green-500 mt-12' />
                </button>
            </div>
        </nav>
    )
}

export default NavBar
