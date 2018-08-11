import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

// Using thunk to manage async actions
const middleware = applyMiddleware(thunk, logger);
// Set the store with the reducers
const store = createStore(rootReducer, middleware);
// Setup Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
