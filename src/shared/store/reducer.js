import * as actions from './actions';

const initialState = {
  siteMeta: null,
};

export default (prevState, action) => {
  const state = prevState || initialState;

  switch (action.type) {
    case actions.SITE_META_SETUP_REQUIRED:
    case actions.SITE_META_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.siteMeta = action.meta;
      return newState;
    }

    case actions.SITE_META_ERROR: {
      const newState = Object.assign({}, state);
      newState.siteMeta = { error: action.error };
      return newState;
    }

    default: return state;
  }
};
