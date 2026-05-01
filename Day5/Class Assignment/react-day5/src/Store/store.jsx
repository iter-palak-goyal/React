import { combineReducers, createStore } from "redux";
import { reducerFunction } from "../Reducer/ReducerProvider";
import { userReducer } from "../Reducer/UserReducer";

let rootReducer = combineReducers({
  count: reducerFunction,
  userred: userReducer,
});

export let store = createStore(rootReducer);
