import { STATE_LOGIN, STATE_SNACKBAR } from "../const/stateCondition";

export const initial = {
  login: null,
  snackBar: false,
};
export const reduce = (state, action) => {
  switch (action.type) {
    case STATE_LOGIN:
      return { ...state, login: action.payload };
    case STATE_SNACKBAR:
      return { ...state, snackBar: action.payload };
    default:
      return state;
  }
};
