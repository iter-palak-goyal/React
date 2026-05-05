import {combineReducers, createStore} from 'redux';
import { reducerFunction } from '../reducer/ReducerProvider';
import { UserReducer } from '../reducer/UserReducer';

let rootReducer = combineReducers({count:reducerFunction, userred:UserReducer})
export let store = createStore(rootReducer)