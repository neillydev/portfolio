import React, { LegacyRef } from 'react';

const styles = require('./Projects.css');

type ProjectProps = {
    refObj: LegacyRef<HTMLDivElement> | undefined
};

const Projects = ({ refObj }: ProjectProps) => {

    return (
        <div ref={refObj} className='projContainer flex xl:pl-52'>
            <div className="flex flex-col">
                <h1 className='lg:text-6xl md:text-5xl sm:text-4xl 
            text-3xl font-black'>Latest Projects</h1>
                <div className="barContainer flex flex-col">
                    <span className='bg-green-400 lg:w-72 md:w-48 sm:w-28 lg:h-1.5 md:h-1 sm:h-1 rounded-md lg:mt-8 md:mt-6 sm:mt-6' />
                    <span className='bg-green-400 lg:ml-24 lg:w-72 md:w-48 sm:w-28 lg:h-1.5 md:h-1 sm:h-1 rounded-md lg:mt-8 md:mt-6 sm:mt-6' />
                </div>
            </div>
        </div>
    )
}

export default Projects;
