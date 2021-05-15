import React, { LegacyRef } from 'react';
import Featured from '../Featured/Featured';

const styles = require('./Projects.css');

type ProjectProps = {
    refObj: LegacyRef<HTMLDivElement> | undefined
};

const Projects = ({ refObj }: ProjectProps) => {

    return (
        <div ref={refObj} className='projContainer flex flex-col'>
            <div className="flex flex-col xl:pl-72 xl:pt-32">
                <div className="projectsHeader flex">
                    <h1 className='lg:text-6xl md:text-5xl sm:text-4xl 
            text-3xl font-black'>Featured Projects</h1>
                    <span className='bg-green-200 lg:ml-8 rounded-xl mt-10' />
                </div>
            </div>
            <div className="featuresContainer flex justify-center">
                <Featured
                    projName='Covid Maps'
                    projDesc='An interactive map of real-time Covid-19 case data built with React JS and the Google Maps API'
                    projTechs={['React.JS', 'Google Maps API']}
                    gitLink='https://github.com/neillydev/covidmaps'
                    externalLink=''
                />
            </div>
        </div>
    )
}

export default Projects;
