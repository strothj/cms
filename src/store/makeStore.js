import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

let composeEnhancers = compose;

/* eslint-disable no-underscore-dangle */
if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
/* eslint-enable */

const makeStore = initialState => createStore(reducer, initialState, composeEnhancers(
  applyMiddleware(thunk),
));

export default makeStore;
