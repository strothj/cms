import * as actions from '../actions';

const theme = (state = {}, action) => {
  switch (action.type) {
    case actions.FETCH_THEME_SUCCESS:
      return Object.assign({}, state, {
        headerImage: action.headerImage,
      });

    default: return state;
  }
};

export default theme;
