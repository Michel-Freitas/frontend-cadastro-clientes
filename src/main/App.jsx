import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import PageHeader from '../components/template/PageHeader';

const App = props => {
    return (
        <BrowserRouter>
            <PageHeader />
            <Routes />
        </BrowserRouter>
    )
}

export default App