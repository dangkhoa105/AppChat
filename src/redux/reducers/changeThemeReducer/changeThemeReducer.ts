import {
  CHANGE_THEME,
  CHANGE_THEME_SUCCESS,
  CHANGE_THEME_FAIL,
} from '../../actions/types';
import {lightTheme} from '../../../res';

// light theme
const initialState = {
  theme: {...lightTheme},
};

// dark theme
// const initialState = {
//   theme: {...lightTheme},
// };

export const changeThemeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_THEME:
      return;
    case CHANGE_THEME_SUCCESS:
      return;
    case CHANGE_THEME_FAIL:
      return;
    default:
      return state;
  }
};
