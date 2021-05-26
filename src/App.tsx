import React, {useRef} from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import './styles.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
require('./App.css');


const App = () => {
    const env = process.env.NODE_ENV;
    const projRef = useRef<HTMLDivElement>(null);
    const abtRef = useRef<HTMLDivElement>(null);
    
    const handleProjectBtn = () => {
        if(projRef.current){
            projRef.current.scrollIntoView();
        }
    }
    const handleAbtBtn = () => {
        if(abtRef.current){
            abtRef.current.scrollIntoView();
        }
    }
    return (
        <div className='container'>
            <NavBar handleProjectBtn={handleProjectBtn} handleAbtBtn={handleAbtBtn} />
            <Hero handleProjectBtn={handleProjectBtn} />
            <About refObj={abtRef}/>
            <Projects refObj={projRef} />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;