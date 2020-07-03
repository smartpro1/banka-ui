import axios from "axios";
import jwtDecode from "jwt-decode";
import { GET_ERRORS, LOGIN } from "./types";

import { setJwtToken } from "../securityUtils/setJwtToken";

export const signupAction = (userDetails, history) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/users/signup`, userDetails);
    alert("user successfully registered");
    history.push("/");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const loginAction = (userCredentials, history) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/v1/users/login`, userCredentials);

    //extract token from res.data
    const { token } = res.data;
    // store the token in local storage
    localStorage.setItem("jwtToken", token);
    // set the token in the header using a function defined somewhere else
    setJwtToken(token);
    // decode token on React side
    const decodedJwtToken = jwtDecode(token);
    dispatch({
      type: LOGIN,
      payload: decodedJwtToken,
    });
    history.push("/dashboard");
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const logoutAction = () => (dispatch) => {
  // When the person logs out, we remove jwt from localStorage as well as the header
  localStorage.removeItem("jwtToken");
  setJwtToken(false);
  dispatch({
    type: LOGIN,
    payload: {},
  });
  window.location.href = "/";
};
