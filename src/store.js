import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import reducer from "./Redux/reducer";

let store = createStore(reducer,applyMiddleware(logger))


export default store