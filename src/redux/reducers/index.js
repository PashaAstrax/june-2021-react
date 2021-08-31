import {rootReducer} from "./rootReducer";
import {someReducer} from "./someReducer";
import {combineReducers} from "redux";

const reducer = combineReducers({rootReducer, someReducer});

export {reducer}