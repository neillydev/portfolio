import React, { useRef, useState, useContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import './styles.css';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { ModalContext } from './components/contexts/ModalContext'
import Socials from './components/Socials/Socials';
import ContactModal from './components/ContactModal/ContactModal';
require('./App.css');


const App = () => {
    const projRef = useRef<HTMLDivElement>(null);
    const abtRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const { state, dispatch } = useContext(ModalContext);

    const [hamburgerHelper, setHamburgerHelper] = useState(false);

    const handleProjectBtn = () => {
        if (projRef.current) {
            projRef.current.scrollIntoView();
        }
    }

    const handleAbtBtn = () => {
        if (abtRef.current) {
            abtRef.current.scrollIntoView();
        }
    }

    const handleContactBtn = () => {
        dispatch({ type: 'true' });
    }

    const handleHamburgerHelped = () => {
        setHamburgerHelper(!hamburgerHelper);
        document.body.style.overflow = hamburgerHelper ? 'scroll' : 'hidden';
        document.body.style.touchAction = hamburgerHelper ? '' : 'none';
    }

    return (
        <div className='container'>
            <NavBar
                handleProjectBtn={handleProjectBtn}
                handleAbtBtn={handleAbtBtn}
                handleContactBtn={handleContactBtn}
                handleHamburgerHelped={handleHamburgerHelped}
                hamburgerHelper={hamburgerHelper}
            />
            {hamburgerHelper ?
                <HamburgerMenu
                    handleProjectBtn={handleProjectBtn}
                    handleAbtBtn={handleAbtBtn}
                    handleContactBtn={handleContactBtn}
                    handleHamburgerHelped={handleHamburgerHelped}
                />
                : null}
            <Hero handleProjectBtn={handleProjectBtn} handleContactBtn={handleContactBtn} />
            <About refObj={abtRef} />
            <Projects refObj={projRef} />
            <Contact
                refObj={contactRef}
                handleContactBtn={handleContactBtn}
            />
            <Socials />
            <Footer />
            {
                state ?
                    <ContactModal />
                    :
                    null
            }
        </div>
    );
};

export default App;