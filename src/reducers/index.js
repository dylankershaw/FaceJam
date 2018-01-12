import { combineReducers } from "redux";

import emotionsReducer from "./emotions";
import songReducer from "./song";

const rootReducer = combineReducers({
  emotions: emotionsReducer,
  song: songReducer
});

export default rootReducer;
