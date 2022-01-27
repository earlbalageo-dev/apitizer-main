import { combineReducers } from "redux";
import { modelReducer } from "./modelReducer";
const reducers = combineReducers({
  model: modelReducer,
});

export default reducers;
