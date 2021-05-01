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
            <div className="pr-8 xl:flex lg:flex md:flex sm:hidden hidden">
                <div className="m-8">
                    <TwitterIcon />
                </div>
                <div className="m-8">
                    <GitIcon />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
