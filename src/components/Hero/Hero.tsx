import React from 'react'
import { Link } from 'react-router-dom';

const styles = require('./Hero.css');

const Hero = () => {
    return (
        <div className='bg-white flex flex-col sm:mt-52'>
            <div className="flex flex-col lg:ml-28 lg:mb-4 md:ml-28 md:mb-2 sm:ml-28 sm:mb-2">
                <span className='shadow-lg bg-green-400 lg:w-52 md:w-44 sm:w-36 lg:h-8 md:h-6 sm:h-5 rounded-sm flex items-center justify-center'>
                    <h1 className='font-mono font-semibold lg:text-base md:text-sm sm:text-xs'>Full Stack Developer</h1>
                </span>
            </div>
            <h1 className='heroTitle lg:text-9xl md:text-7xl sm:text-5xl 
            text-3xl font-black ml-28'>
                VERNON
                <br />
                NEILLY
            </h1>
            <div className='flex flex-col lg:ml-36 lg:mt-10 md:mt-6 sm:mt-6 md:ml-32 sm:ml-28'>
                <span className='bg-green-400 lg:w-80 md:w-48 sm:w-28 lg:h-1.5 md:h-1 sm:h-1 rounded-md' />
                <span className='bg-green-400 lg:w-80 md:w-48 sm:w-28 lg:h-1.5 md:h-1 sm:h-1 rounded-md lg:mt-10 md:mt-6 sm:mt-6 ml-16' />
            </div>
        </div>
    )
}

export default Hero
