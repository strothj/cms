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

  [actions.FETCH_RECENT_SUCCESS](state, { recent }) {
    return { ...state, recent };
  },

  [actions.FETCH_POSTS_SUCCESS](state, { posts }) {
    return { ...state, posts };
  },
};

const reducer = (state = {}, action) => {
  if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action);
  }

  return state;
};

export default reducer;
