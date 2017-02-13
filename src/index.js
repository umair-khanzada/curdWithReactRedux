import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Games from './components/Games';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Router, Route, browserHistory } from 'react-router'

import './index.css';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/games" component={Games} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
