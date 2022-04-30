import axios from "axios";
import { url } from "../../../constants/url";
export const POSTBUSINESSIDEA = "POSTBUSINESSIDEA";
export const GETBUSSINESSIDEAS = "GETBUSSINESSIDEAS";
export const postBusinessIdea = (
  name,
  owner,
  capital,
  bisinessDefinition,
  conditions,
  description,
  email,
  names
) => {
  let responceData = "";
  console.log(description);
  console.log("captital",capital)
  return async (dispatch) => {
    try {
      const responce = await axios.post(url.businessIdea, {
        name: name,
        owner: owner,
        capital:capital,
        bisinessDefinition: bisinessDefinition,
        conditions: conditions,
        description: description,
        email: email,
        names: names,
      });
      responceData = responce.data;
      console.log(responceData);
    } catch (error) {
      console.log(error);
      console.log(responceData);
    }
    dispatch({ type: POSTBUSINESSIDEA, payload: responceData });
    console.log(responceData);
  };
};
export const getBussinessIdeas = () => {
  let responceData = "";
  return async (dispatch) => {
    try {
      const responce = await axios.get(url.businessIdea);
      responceData = responce.data.data;
      console.log(responceData);
    } catch (error) {
      console.log("error is " + error);
    }
    console.log(responceData);
    dispatch({ type: GETBUSSINESSIDEAS, payload: responceData });
  };
};
