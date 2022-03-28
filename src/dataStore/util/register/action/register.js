import axios from "axios";
import { url } from "../../../../constants/url";
import { asyncHandler } from "../../../../util/asyncHandler";
export const REGISTER = "REGISTER";

export const register = (name, address, email, userName, password) => {
  return asyncHandler(async (dispatch) => {
    const responce = await axios.post(`${url.register}`, {
      name: name,
      userName: userName,
      email: email,
      password: password,
      address: address,
    });

    dispatch({ type: REGISTER, payload: responce.data });
  });
};
