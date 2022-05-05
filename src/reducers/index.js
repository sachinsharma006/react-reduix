//root reducer
import UpdateNumber from "./addMinus";
import mathOperations from "./mathFunctions";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  UpdateNumber,
  mathOperations
});

export default rootReducer;
