import * as actions from '../actions';

const app = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_ROUTE_NAME:
      return Object.assign({}, { routeName: action.routeName });

    case actions.FETCH_SITE_META_SUCCESS:
      return Object.assign({}, state, {
        siteTitle: action.siteTitle,
        tagline: action.tagline,
      });

    default: return state;
  }
};

export default app;
