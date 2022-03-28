import axios from "axios";
import { url } from "../../../../constants/url";
import { asyncHandler } from "../../../../util/asyncHandler";
export const LOGIN = "LOGIN";
export const login = (userName, password) => {
  return asyncHandler(async (dispatch) => {
    const responce = await axios.post(`${url.authentication}`, {
      userName: userName,
      password: password,
    });
    let user = responce.data;
    // console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("email", user.email);
    console.log(user.email);
    localStorage.setItem("name", user.names);
    if (user.role === "user") {
      localStorage.setItem("userType", "user");
      window.location.reload();
    } else if (user.role === "admin") {
      localStorage.setItem("userType", "admin");
      window.location.reload();
    } else {
      localStorage.setItem("userType", "unknown");
    }
    console.log(user.message);

    dispatch({ type: LOGIN, payload: user });
  });
};
