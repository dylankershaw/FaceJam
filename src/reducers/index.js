import { combineReducers } from "redux";

import emotionReducer from "./emotion";

const rootReducer = combineReducers({
  emotion: emotionReducer
});

export default rootReducer;
