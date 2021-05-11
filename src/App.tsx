import React, {useRef} from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import './styles.css';
require('./App.css');

const App = () => {
    const env = process.env.NODE_ENV

    const projRef = useRef<HTMLDivElement>(null);
    const handleProjectBtn = () => {
        if(projRef.current){
            projRef.current.scrollIntoView();
        }
    }

    return (
        <>
            <NavBar handleProjectBtn={handleProjectBtn} />
            <Hero />
            <Projects refObj={projRef} />
        </>
    );
};

export default App;