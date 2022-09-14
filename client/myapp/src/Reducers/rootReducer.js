import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import moviesReducer from "./moviesReducer";


const rootReducer = combineReducers({
  usersReducer,
  moviesReducer
})

export default rootReducer;

