import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import './styles.css';

const App = () => {
    const env = process.env.NODE_ENV

    return (
        <>
            <NavBar />
            <Hero />
        </>
    );
};

export default App;