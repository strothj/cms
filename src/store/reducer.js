import * as actions from './actions';

const handlers = {
  [actions.SET_ROUTE_NAME](state, { routeName }) {
    return { ...state, routeName };
  },

  [actions.FETCH_SITE_META_SUCCESS](state, { siteTitle, tagline }) {
    return { ...state, siteTitle, tagline };
  },

  [actions.FETCH_THEME_SUCCESS](state, { theme }) {
    return { ...state, theme };
  },
};

const reducer = (state = {}, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }

  return state;
};

export default reducer;
