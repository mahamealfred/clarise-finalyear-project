import { GET_IDEA_STATUS_VALUES } from "../action/chartData";
const initialState = [];

export const statusNames = (state = initialState, action) => {
  switch (action.type) {
    case GET_IDEA_STATUS_VALUES:
      return (state = action.payload);
    default:
      return state;
  }
};
