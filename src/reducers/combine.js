import showReducer from "./show";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  show: showReducer
});

export default allReducer;
