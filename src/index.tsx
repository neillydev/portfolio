import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from './components/contexts/ModalContext';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <ModalProvider>
        <App />
    </ModalProvider>
    </BrowserRouter>, 
    document.getElementById('root'));