import { applyMiddleware, createStore } from "redux";
import { reduceruser } from "./Reducer";
import  {thunk} from "redux-thunk";
// import thunk from "thunk";
export let store = createStore(reduceruser, applyMiddleware(thunk))