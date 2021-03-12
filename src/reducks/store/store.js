import { createStore as reduxCrateStore, combineReducers, applyMiddleware } from "redux";
import { conditionsReducers } from "../conditions";
import { shopReducers } from "../shop";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

export default function createStore(history) {
  return reduxCrateStore(
    combineReducers({
      router: connectRouter(history),
      conditions: conditionsReducers,
      shop: shopReducers,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
