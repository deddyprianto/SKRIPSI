import { STATE_AWAL } from "../const/stateCondition";

export const initial = {
  login: null,
};
export const reduce = (state, action) => {
  switch (action.type) {
    case STATE_AWAL:
      return { ...state, login: action.payload };
    default:
      return state;
  }
};
