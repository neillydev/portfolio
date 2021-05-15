import React from 'react';

require('./Featured.css');

const Featured = () => {
    return (
        <div className="featuredContainer flex flex-col">
            <div className="featuredSide flex flex-col items-end xl:pl-52">
                <div className="featuredTitle flex justify-end xl:pr-4 xl:pt-8">
                    <p className="font-mono text-green-500 justify-end">Featured Project</p>
                </div>
                <div className="featuredName flex justify-end xl:pr-4">
                    <p className="font-sans font-black text-2xl mb-8">Covid Maps</p>
                </div>
                <div className="featuredDescription flex border-2 border-green-500 bg-green-400 rounded-md flex-grow justify-center items-center shadow-xl">
                    <p className="featuredText flex font-normal font-sans text-green-100 p-4 text-right">
                        An interactive map of real-time Covid-19 case data built with React JS
                    </p>
                </div>
                <div className="featuredFooter">

                </div>
            </div>
            <div className="imageContainer flex border-2 border-green-400 rounded-md absolute"></div>
        </div>
    )
}

export default Featured
