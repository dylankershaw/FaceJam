import { combineReducers } from "redux";

import emotionsReducer from "./emotions";

const rootReducer = combineReducers({
  emotions: emotionsReducer
});

export default rootReducer;
