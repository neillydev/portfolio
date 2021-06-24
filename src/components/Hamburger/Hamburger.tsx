import React, { useState, useEffect } from 'react';
import Exit from '../Icons/Exit';

require('./Hamburger.css');

const Hamburger = () => {
    const [hamburgerHelper, setHamburgerHelper] = useState(false);

    return (
        <div className={`hamburgerContainer relative flex justify-end cursor-pointer ${hamburgerHelper && 'hamburgerAnim'}`} onClick={() => setHamburgerHelper(!hamburgerHelper)}>
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
