import React from 'react'

require('./Hamburger.css');

const Hamburger = () => {
    return (
        <div className="hamburgerContainer relative flex justify-end cursor-pointer">
            <div className='hamburgerTop'/>
            <div className='hamburgerMeat'/>
            <div className='hamburgerBottom'/>
        </div>
    )
};

export default Hamburger;
