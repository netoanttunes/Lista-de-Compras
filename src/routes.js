import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import ingredientes from './Pages/ingredientes';
import quantidade from './Pages/quantidade';
import imprimir from './Pages/imprimir';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ingredientes} />
                <Route path="/quantidade" component={quantidade} />
                <Route path="/imprimir" component={imprimir} />
            </Switch>
        </BrowserRouter>
    )
}