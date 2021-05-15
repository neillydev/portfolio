import React, { LegacyRef } from 'react';

require('./About.css');

type AbtProps = {
    refObj: LegacyRef<HTMLDivElement> | undefined
};

const About = ({ refObj }: AbtProps) => {
    return (
        <div ref={refObj} className="aboutContainer">
            <div className="flex flex-col xl:pl-72 xl:pt-32">
                <div className="aboutHeader flex">
                    <h1 className='lg:text-6xl md:text-5xl sm:text-4xl 
            text-3xl font-black'>About Me</h1>
                    <span className='bg-green-200 lg:ml-8 rounded-xl mt-10' />
                </div>
            </div>
        </div>
    )
}

export default About;
