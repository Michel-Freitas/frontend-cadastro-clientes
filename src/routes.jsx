import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './views/home/Dashboard';
import ListClient from './views/client/ListClient';
import RegisterClient from './views/client/RegisterClient';
import DetailsClient from './views/client/DetailsClient';

const Routes = props => {
    return (
        <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/clientes"  exact component={ListClient}/>
            <Route path="/registerclient"  exact component={RegisterClient}/>
            <Route path="/detailcliente/:idClient"  exact component={DetailsClient}/>
            <Route path="/editclient/:idClient"  exact component={RegisterClient}/>
        </Switch>
    )
}

export default Routes