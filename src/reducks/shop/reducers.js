import * as Actions from "./actions";
import initialState from "../store/initialState";

export const shopReducers = (state = initialState.shop, action) => {
  switch (action.type) {
    case Actions.SET_SHOP:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};
