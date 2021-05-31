import React from 'react';
import ProjectGitIcon from '../Icons/ProjectGitIcon';
import ProjectTwitterIcon from '../Icons/ProjectTwitterIcon';

require('./Socials.css');

const Socials = () => {
    return (
        <div className='socialsContainer'>
            <ul className="socialsList">
                <li className="githubSocial">
                    <button className="projSocial sideSocial">
                            <ProjectGitIcon />
                    </button>
                </li>
                <li className="githubSocial">
                    <button className="projSocial sideSocial">
                            <ProjectTwitterIcon />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Socials;
