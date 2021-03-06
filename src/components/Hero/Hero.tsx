import React from 'react';
import { Link } from 'react-router-dom';

require('./Hero.css');

type HeroProps = {
    handleProjectBtn: () => void,
    handleContactBtn: () => void;
}
const Hero = ({ handleProjectBtn, handleContactBtn }: HeroProps) => {
    return (
        <div className='heroContainer flex sm:justify-center items-center'>
            <div className="heroTitleContainer bg-white flex flex-col xl:pl-52 xl:pt-52 lg:pl-32 lg:pt-32 md:pt-24 pt-16">
                <div className="flex flex-col md:mb-2 mb-2">
                    <span className='shadow-lg bg-green-400 lg:w-52 md:w-44 w-36 lg:h-8 md:h-6 h-5 rounded-sm flex items-center justify-center'>
                        <h1 className='font-mono font-semibold whitespace-nowrap lg:text-base md:text-sm text-xs'>Full Stack Developer</h1>
                    </span>
                </div>
                <h1 className='heroTitle xl:text-9xl md:text-8xl sm:text-5xl 
            text-5xl font-black'>
                VERNON
                <br />
                NEILLY
            </h1>
                <div className='heroFlare flex-col lg:mt-10 md:mt-6 sm:mt-6'>
                    <span className='bg-green-400 lg:w-72 md:w-48 sm:w-28 lg:h-1 md:h-1 sm:h-1 rounded-md' />
                    <span className='bg-green-400 lg:w-72 md:w-48 sm:w-28 lg:h-1 md:h-1 sm:h-1 rounded-md lg:mt-10 md:mt-6 sm:mt-6 lg:ml-24 md:ml-16 sm:ml-16' />
                </div>
                <div className="heroBtnContainer pt-16">
                    <button className="heroBtn border-2 rounded-lg font-bold w-44" onClick={() => handleProjectBtn()}>
                        Projects
                    </button>
                    <button className="heroBtn border-2 rounded-lg font-bold w-44 ml-16" onClick={() => handleContactBtn()}>
                        Let's Chat!
                    </button>
                </div>
            </div>
            <div className="codeContainer flex flex-col rounded shadow-xl border-2 self-center">
                <div className="codeHeader flex">
                    <div className="mockControls flex">
                        <span className="mockWindowControl bg-red-500 rounded-xl" />
                        <span className="mockWindowControl bg-yellow-500 rounded-xl" />
                        <span className="mockWindowControl bg-green-500 rounded-xl" />
                        <div className="mockWindowName flex w-16 h-4">
                            <p className="mockCodeFile text-xs text-gray-500">~/src/index.ts</p>
                        </div>
                    </div>
                </div>
                <div className="codeBody flex ml-16">
                    <ol className="code">
                        <li>
                            <span className="codeLine">
                                <span className="var">
                                    interface 
                                </span>
                                &nbsp;Person = {`{`} 
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                            &nbsp;&nbsp;&nbsp;&nbsp;name: string;
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                            &nbsp;&nbsp;&nbsp;&nbsp;occupation: string;
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                            &nbsp;&nbsp;&nbsp;&nbsp;yearsOfExperience: number;
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                                {`}`};
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                                <span className="var">
                                    var 
                                </span>
                                &nbsp;Vernon: Person = {`{`} 
                            </span>
                        </li>
                        <li>
                            <span className="codeLine line8">
                            &nbsp;&nbsp;&nbsp;&nbsp;name: "Vernon",
                            </span>
                        </li>
                        <li>
                            <span className="codeLine line9">
                            &nbsp;&nbsp;&nbsp;&nbsp;occupation: "Full Stack Developer",
                            </span>
                        </li>
                        <li>
                            <span className="codeLine line10">
                            &nbsp;&nbsp;&nbsp;&nbsp;yearsOfExperience: 10
                            </span>
                        </li>
                        <li>
                            <span className="codeLine">
                                {`}`};
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Hero;