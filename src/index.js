import React from 'react';
import ReactDOM from 'react-dom';

import './semantic/dist/semantic.min.css';
import './index.css';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import { ApolloProvider } from 'react-apollo';
import { client } from './apollo-config';

import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/project/:slug" component={ProjectPage} />
            </Switch>
        </Router>
    </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
