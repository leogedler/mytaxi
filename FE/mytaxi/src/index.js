import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './Root';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Landing from './components/landing';
import MytaxiView from './components/mytaxiView';
import Car2goView from './components/car2go';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Landing} />
                <Route path="/mytaxi" exact component={MytaxiView} />
                <Route path="/car2go" exact component={Car2goView} />
            </App>
        </BrowserRouter>
    </Root>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
