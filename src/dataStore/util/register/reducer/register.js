import { REGISTER } from "../action/register";
const initialState = [];
export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return (state = action.payload);
    default:
      return state;
  }
};
