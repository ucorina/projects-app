import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './pages/HomePage';

import { ApolloProvider } from 'react-apollo';
import { client } from './apollo-config';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <HomePage />
        </Router>
    </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
