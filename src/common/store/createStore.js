import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default (preloadedState) => {
  console.log(preloadedState);
  const storeParams = [reducer];
  if (preloadedState) storeParams.push(preloadedState);

  return createStore(
    ...storeParams,

    // Redux Devtools Extension
    // eslint-disable-next-line no-underscore-dangle
    global.window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    // Async middleware
    applyMiddleware(thunk),
  );
};
