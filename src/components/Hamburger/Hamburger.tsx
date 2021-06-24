import React, { useState, useEffect } from 'react';
import Exit from '../Icons/Exit';

require('./Hamburger.css');

type HamburgerProps = {
    handleHamburgerHelped: () => void,
    hamburgerHelper: boolean
}

const Hamburger = ({handleHamburgerHelped, hamburgerHelper}: HamburgerProps) => {
    return (
        <div className={`hamburgerContainer relative flex justify-end cursor-pointer ${hamburgerHelper && 'hamburgerAnim'}`} onClick={handleHamburgerHelped}>
            <div className="hamburgerLines">
                {hamburgerHelper ?
                    <Exit />
                    :
                    [
                        <div className='hamburgerTop' />,
                        <div className='hamburgerMeat' />,
                        <div className='hamburgerBottom' />
                    ]
                }
            </div>
        </div>
    )
};

export default Hamburger;
