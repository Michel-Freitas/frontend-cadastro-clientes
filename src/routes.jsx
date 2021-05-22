import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Cliente from './pages/Cliente';
import ClienteForm from './pages/Cliente/Form';
import ClienteView from './pages/Cliente/ClientView';
import Endereco from './pages/Endereco';

const Routes = props => {
    return (
        <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/clientes"  exact component={Cliente}/>
            <Route path="/clientes_cadastro"  exact component={ClienteForm}/>
            <Route path="/clientes_cadastro/:id"  exact component={ClienteForm}/>
            <Route path="/cliente/:id" exact component={ClienteView} />
            <Route path="/enderecos"  exact component={Endereco}/>
        </Switch>
    )
}

export default Routes