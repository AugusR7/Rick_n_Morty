import { combineReducers } from "redux";
import charactersReducer from "./characters";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

export default rootReducer;
