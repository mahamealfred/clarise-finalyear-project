import {
  POSTBUSINESSCATEGPRY,
  GETBUSINESSCATEGORY,
  GETSINGLEBUSINESSCATEGORY,
} from "../action/businessCategory";
const initialState = [];
let SingleBusiness = "";
export const postBusinessCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTBUSINESSCATEGPRY:
      return (state = action.payload);
    default:
      return state;
  }
};
export const getBusinessCatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETBUSINESSCATEGORY:
      return (state = action.payload);
    default:
      return state;
  }
};
export const getSingleBusinessCatReducer = (state = SingleBusiness, action) => {
  switch (action.type) {
    case GETSINGLEBUSINESSCATEGORY:
      return (state = action.payload);
    default:
      return state;
  }
};
