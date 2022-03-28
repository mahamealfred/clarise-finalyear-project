import axios from "axios";
import { url } from "../../../constants/url";
export const POSTBUSINESSCATEGPRY = "POSTBUSINESSCATEGPRY";
export const GETBUSINESSCATEGORY = "GETBUSINESSCATEGORY";
export const GETSINGLEBUSINESSCATEGORY = "GETBUSINESSCATEGORY";
export const postBusinessCategory = (name, categoryType, condition) => {
  let responceData = "";
  return async (dispatch) => {
    try {
      const responce = await axios.post(url.businessDefinition, {
        name: name,
        category: categoryType,
        conditions: condition,
      });
      responceData = responce.data;
      console.log(responceData);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: POSTBUSINESSCATEGPRY, payload: responceData });
  };
};

export const getBusinessCategory = () => {
  let responceData = "";
  return async (dispatch) => {
    try {
      const responce = await axios.get(url.businessDefinition);
      responceData = responce.data;
      // console.log(responceData);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: GETBUSINESSCATEGORY, payload: responceData });
  };
};
export const getSingleBusinessCategory = (businessCategoryId) => {
  let responceData = "";
  console.log(businessCategoryId);
  return async (dispatch) => {
    try {
      const responce = await axios.get(
        `${url.businessDefinition}/${businessCategoryId}`
      );
      responceData = responce.data;
      // console.log(responceData);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: GETSINGLEBUSINESSCATEGORY, payload: responceData });
    // console.log(responceData);
  };
};
