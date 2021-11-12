import { combineReducers } from "redux";
import tipReducer from "./tipReducer";

export default combineReducers({
   tip: tipReducer
})