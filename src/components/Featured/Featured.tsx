import React from 'react';
import { Link } from 'react-router-dom';
import ExtLink from '../Icons/ExtLink';
import ProjectGitIcon from '../Icons/ProjectGitIcon';

require('./Featured.css');

type FeatProps = {
    img: string,
    projName: string,
    projDesc: string,
    projTechs: string[],
    gitLink: string,
    externalLink: string
}

const handleLinkBtn = (extLink: string) => {
    window.open(extLink, '_blank');
}

const Featured = ({img, projName, projDesc, projTechs, gitLink, externalLink}: FeatProps) => {
    return (
        <div className="featuredContainer flex flex-col xl:pt-28 md:p-24 sm:p-20">
            <div className="featuredSide flex flex-col xl:pl-52">
                <div className="featuredTitle flex justify-end xl:pr-4 xl:pt-8 pt-8">
                    <p className="font-mono text-green-500 justify-end">Featured Project</p>
                </div>
                <div className="featuredName flex justify-end xl:pr-4 ">
                    <p className="font-sans font-black text-2xl mb-8">{projName}</p>
                </div>
                <div className="featuredDescription flex border-2 border-green-400 bg-green-400 rounded-md flex-grow justify-center items-center shadow-xl">
                    <p className="featuredText flex font-medium font-sans text-green-100 p-4 text-right">
                        {projDesc}
                    </p>
                </div>
                <div className="featuredFooter">
                    <div className="technologyFooter flex font-mono">
                        {
                            projTechs.map(tech => <p className="technology">{tech}</p>)
                        }
                    </div>
                    <div className="socialFooter flex xl:justify-end lg:justify-end md:justify-end justify-center">
                        <button className="projSocial" onClick={() => handleLinkBtn(gitLink)}>
                            <ProjectGitIcon />
                        </button>
                        <button className="projSocial" onClick={() => handleLinkBtn(externalLink)}>
                            <ExtLink />
                        </button>
                    </div>
                </div>
            </div>
            <div className="imageContainer flex rounded-md absolute">
                <picture>
                    <img className="featureImg" src={img} alt="featureImage" />
                </picture>
            </div>
        </div>
    )
}

export default Featured
