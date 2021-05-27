import React, {useRef, useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import './styles.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Modal from './components/Modal/Modal';
require('./App.css');


const App = () => {
    const env = process.env.NODE_ENV;
    const projRef = useRef<HTMLDivElement>(null);
    const abtRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const [modalActive, setModalActive] = useState(false);
    
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

    const handleContactBtn = () => {
        if(contactRef.current){
            contactRef.current.scrollIntoView();
        }
    }

    const handleModalActive = (modalSet: boolean) => {
        setModalActive(modalSet);
    }

    return (
        <div className='container'>
            <NavBar handleProjectBtn={handleProjectBtn} handleAbtBtn={handleAbtBtn} handleContactBtn={handleContactBtn} />
            <Hero handleProjectBtn={handleProjectBtn} />
            <About refObj={abtRef}/>
            <Projects refObj={projRef} />
            <Contact refObj={contactRef} handleModalActive={handleModalActive} />
            { modalActive ? <Modal handleModalActive={handleModalActive} /> : null}
            <Footer />
        </div>
    );
};

export default App;