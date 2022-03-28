import { combineReducers } from "redux";
import {
  postBusinessCatReducer,
  getBusinessCatReducer,
  getSingleBusinessCatReducer,
} from "./admin/reducer/businessCategory";
import {
  postBusinessIdeaReducer,
  getBusinessIdeaReducer,
} from "./user/reducer/businessIdea";
import { statusNames } from "./util/chart/reducer/chartData";
import { loginReducer } from "./util/login/reducer/login";
import { registerReducer } from "./util/register/reducer/register";
export const allReducers = combineReducers({
  PostBusinessCatReducer: postBusinessCatReducer,
  GetBusinessCatreducer: getBusinessCatReducer,
  GetSingleBusinessCatReducer: getSingleBusinessCatReducer,
  postBusinessIdeaReducer: postBusinessIdeaReducer,
  GetBusinessIdeaReducer: getBusinessIdeaReducer,
  StatusNames: statusNames,
  LoginReducer: loginReducer,
  RegisterReducer: registerReducer,
});
