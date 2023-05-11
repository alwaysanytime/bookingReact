import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { commonReducer } from "./commonReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
});
