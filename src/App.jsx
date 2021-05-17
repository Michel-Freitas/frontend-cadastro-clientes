import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

const App = props => {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
        </BrowserRouter>
    )
}

export default App