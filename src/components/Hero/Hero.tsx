import React from 'react'
import { Link } from 'react-router-dom';

require('./Hero.css');

const Hero = () => {
    return (
        <div className='heroContainer bg-white flex flex-col xl:pl-52 xl:pt-52'>
            <div className="flex flex-col md:mb-2 sm:mb-2">
                <span className='shadow-lg bg-green-400 lg:w-52 md:w-44 sm:w-36 lg:h-8 md:h-6 sm:h-5 rounded-sm flex items-center justify-center'>
                    <h1 className='font-mono font-semibold lg:text-base md:text-sm sm:text-xs'>Full Stack Developer</h1>
                </span>
            </div>
            <h1 className='heroTitle lg:text-9xl md:text-7xl sm:text-5xl 
            text-3xl font-black'>
                VERNON
                <br />
                NEILLY
            </h1>
            <div className='flex flex-col lg:mt-10 md:mt-6 sm:mt-6'>
                <span className='bg-green-400 lg:w-72 md:w-48 sm:w-28 lg:h-1.5 md:h-1 sm:h-1 rounded-md' />
                <span className='bg-green-400 lg:w-72 md:w-48 sm:w-28 lg:h-1.5 md:h-1 sm:h-1 rounded-md lg:mt-10 md:mt-6 sm:mt-6 lg:ml-24 md:ml-16 sm:ml-16' />
            </div>
        </div>
    )
}

export default Hero
