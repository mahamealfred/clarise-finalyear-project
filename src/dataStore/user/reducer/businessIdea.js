import { POSTBUSINESSIDEA, GETBUSSINESSIDEAS } from "../action/businessIdea";
const initialState = [];
export const postBusinessIdeaReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTBUSINESSIDEA:
      return (state = action.payload);
    default:
      return state;
  }
};
export const getBusinessIdeaReducer = (state = [], action) => {
  switch (action.type) {
    case GETBUSSINESSIDEAS:
      return (state = action.payload);
    default:
      return state;
  }
};
