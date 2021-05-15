import React from 'react';
import { Link } from 'react-router-dom';
import ExtLink from '../Icons/ExtLink';
import ProjectGitIcon from '../Icons/ProjectGitIcon';

require('./Featured.css');

const Featured = () => {
    return (
        <div className="featuredContainer flex flex-col xl:pt-28">
            <div className="featuredSide flex flex-col items-end xl:pl-52">
                <div className="featuredTitle flex justify-end xl:pr-4 xl:pt-8">
                    <p className="font-mono text-green-500 justify-end">Featured Project</p>
                </div>
                <div className="featuredName flex justify-end xl:pr-4">
                    <p className="font-sans font-black text-2xl mb-8">Covid Maps</p>
                </div>
                <div className="featuredDescription flex border-2 border-green-400 bg-green-400 rounded-md flex-grow justify-center items-center shadow-xl">
                    <p className="featuredText flex font-medium font-sans text-green-100 p-4 text-right">
                        An interactive map of real-time Covid-19 case data built with React JS and the Google Maps API
                    </p>
                </div>
                <div className="featuredFooter">
                    <div className="technologyFooter flex font-mono">
                        <p className="technology">React.JS</p>
                        <p className="technology">Google Maps API</p>
                    </div>
                    <div className="socialFooter flex justify-end">
                        <button className="projSocial">
                            <ProjectGitIcon />
                        </button>
                        <button className="projSocial">
                            <ExtLink />
                        </button>
                    </div>
                </div>
            </div>
            <div className="imageContainer flex rounded-md absolute">
                <picture>
                    <img className="featureImg" src="https://camo.githubusercontent.com/4390730c6105344b42f84005ddb19ae85016f3354a1740e7812285a4463ceca2/68747470733a2f2f692e696d6775722e636f6d2f676c54516271552e706e67" alt="covidMaps" />
                </picture>
            </div>
        </div>
    )
}

export default Featured
