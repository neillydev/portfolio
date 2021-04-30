import React from 'react'
import {Link} from 'react-router-dom';

const styles = require('./Hero.css');

const Hero = () => {
    return (
        <div className='bg-white h-screen flex flex-col 
        justify-center'>
            <h1 className='heroTitle lg:text-9xl md:text-7xl sm:text-5xl 
            text-3xl font-black ml-28'>
                VERNON
                <br />
                NEILLY
            </h1>
            <div className='flex flex-col lg:ml-36 mt-10 md:ml-32 sm:ml-28'>
                <span className='bg-green-400 lg:w-80 md:w-48 sm:w-28 h-1.5 rounded-md' />
                <span className='bg-green-400 lg:w-80 md:w-48 sm:w-28 h-1.5 rounded-md lg:mt-10 md:mt-6 sm:mt-6 ml-16 ' />
            </div>
        </div>
    )
}

export default Hero
