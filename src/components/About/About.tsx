import React, { LegacyRef } from 'react';

require('./About.css');

type AbtProps = {
    refObj: LegacyRef<HTMLDivElement> | undefined
};

const About = ({ refObj }: AbtProps) => {
    return (
        <div ref={refObj} className="aboutContainer">
            <div className="aboutTitleContainer flex flex-col xl:pl-72 xl:pt-12 lg:pl-40 md:pl-40 sm:pl-20 lg:pr-32 md:pr-32 sm:pr-32 md:whitespace-nowrap sm:whitespace-nowrap">
                <div className="aboutHeader flex">
                    <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl 
            text-3xl font-black'>About Me</h1>
                    <span className='aboutHeaderDash bg-green-200 lg:ml-8 md:ml-4 sm:ml-4 rounded-xl xl:mt-10 lg:mt-8 md:mt-7 sm:mt-5' />
                </div>
            </div>
            <div className="aboutBody flex xl:justify-center lg:justify-center md:justify-center xl:p-32 lg:p-32 md:p-24 sm:p-20 p-4">
                <div className="aboutText font-semibold">
                    <p>
                        Hello! My name is Vernon and I build and design responsive and sleek applications for the world to enjoy! I started this journey as a developer when I was 10 years old, with a dream to create my own website!
                        <br />
                        <br />
                        Now I strive to paint the internet with my applications, with my imagination and determination as the limit!
                        <br />
                        <br />
                        Technologies I use consistently:
                        <br />
                        <br />
                        <ul className='aboutTechnologies'>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </p>
                </div>
                <div className="aboutImg flex ml-12">
                    <div className="aboutImgContainer rounded-xl">
                        <div className="aboutImgOverlay">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
