import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default createStore(
  reducer,

  // Redux Devtools Extension
  // eslint-disable-next-line no-underscore-dangle
  global.window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  // Async middleware
  applyMiddleware(thunk),
);
