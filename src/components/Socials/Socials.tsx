import React from 'react';
import ProjectGitIcon from '../Icons/ProjectGitIcon';
import ProjectLinkedIcon from '../Icons/ProjectLinkedIcon';
import ProjectTwitterIcon from '../Icons/ProjectTwitterIcon';

require('./Socials.css');

const handleLinkBtn = (extLink: string) => {
    window.open(extLink, '_blank');
}


const Socials = () => {
    return (
        <div className='socialsContainer'>
            <ul className="socialsList">
                <li className="githubSocial">
                    <button className="projSocial sideSocial" onClick={() => handleLinkBtn('https://github.com/neillydev')}>
                            <ProjectGitIcon />
                    </button>
                </li>
                <li className="githubSocial">
                    <button className="projSocial sideSocial" onClick={() => handleLinkBtn('https://www.linkedin.com/in/vernon-neilly-iii-2508a6190/')}>
                            <ProjectLinkedIcon />
                    </button>
                </li>
                <li className="githubSocial">
                    <button className="projSocial sideSocial" onClick={() => handleLinkBtn('https://twitter.com/neillydev')}>
                            <ProjectTwitterIcon />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Socials;
