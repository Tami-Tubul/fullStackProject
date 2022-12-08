import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import moviesReducer from "./moviesReducer";
import subscriptionsReducer from './subscriptionsReducer'

const rootReducer = combineReducers({
  usersReducer,
  moviesReducer,
  subscriptionsReducer
})

export default rootReducer;

