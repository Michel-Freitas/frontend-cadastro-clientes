import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Cliente from './pages/Cliente';
import Endereco from './pages/Endereco';

const Routes = props => {
    return (
        <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/clientes"  exact component={Cliente}/>
            <Route path="/enderecos"  exact component={Endereco}/>
        </Switch>
    )
}

export default Routes