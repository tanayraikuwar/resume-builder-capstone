import changeTemplateData from "./mainReducer";
import changeTemplateIndex from "./templateIndexReducer";
import { combineReducers } from "redux";

let rootReducer = combineReducers({
    changeTemplateData,changeTemplateIndex
})

export default rootReducer;
