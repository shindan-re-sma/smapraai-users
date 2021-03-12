import * as Actions from "./actions";
import initialState from "../store/initialState";

export const conditionsReducers = (state = initialState.conditions, action) => {
  switch (action.type) {
    case Actions.SET_CONDITIONS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
