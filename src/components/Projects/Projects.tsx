import React, { LegacyRef } from 'react';
import Featured from '../Featured/Featured';

const styles = require('./Projects.css');

type ProjectProps = {
    refObj: LegacyRef<HTMLDivElement> | undefined
};

const Projects = ({ refObj }: ProjectProps) => {

    return (
        <div ref={refObj} className='projContainer flex flex-col'>
            <div className="projectsHeaderContainer flex flex-col xl:pt-32 lg:pr-32 md:pr-32 sm:pr-32 md:whitespace-nowrap sm:whitespace-nowrap">
                <div className="projectsHeader flex">
                    <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl 
            text-3xl font-black'>Featured Projects</h1>
                    <span className='bg-green-200 lg:ml-8 md:ml-4 sm:ml-4 rounded-xl xl:mt-10 lg:mt-8 md:mt-7 sm:mt-5' />
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
