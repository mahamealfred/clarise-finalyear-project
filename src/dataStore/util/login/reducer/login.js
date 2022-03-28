import { LOGIN } from "../action/login";
const initialState = [];
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = action.payload);
    default:
      return state;
  }
};
