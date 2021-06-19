import * as actions from './actions';

const initialState = {
  theme: 'light',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const setTheme = (theme) => {
  window.localStorage.setItem('theme', theme);
  return (dispatch) => {
    dispatch({
      type: actions.SET_THEME,
      payload: theme,
    });
  };
};

export default userReducer;
