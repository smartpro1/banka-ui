import axios from "axios";
import jwtDecode from "jwt-decode";
import { GET_ERRORS, LOGIN, FULLNAME, TRANSFERFUND} from "./types";

import { setJwtToken } from "../securityUtils/setJwtToken";

export const signupAction = (userDetails, history, fullname) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/users/signup`, userDetails);
    dispatch({
      type: FULLNAME,
      payload: fullname,
    });
    history.push("/dashboard");
    history.push("/reg-successful");
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
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const logoutAction = () => (dispatch) => {
  // When the person logs out, we remove jwt from localStorage as well as the header
  localStorage.removeItem("jwtToken");
  dispatch({
    type: LOGIN,
    payload: {},
  });
  window.location.href = "/";
};

export const buttonAction = () => {
  console.log("button action called");
};

export const changePinAction = (pinCredentials, history) => async (
  dispatch
) => {
  try {
    await axios.post(`/api/v1/users/change-pin`, pinCredentials);
    history.push("/change-pin-success");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const forgotPasswordAction = (email, history) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/users/forgot-password`, email);
    alert("A password reset mail has been sent to your email address");
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const forgotPinAction = (email, history) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/users/forgot-password`, email);
    alert("A password reset mail has been sent to your email address");
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const resetPasswordAction = (password, history) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/users/reset-password`, password);
    alert("password reset successful");
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const transferFundsAction = (transferDetails, history) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/v1/users/transfer-funds`, transferDetails);
    dispatch({
      type: TRANSFERFUND,
      payload: res.data,
    });
    history.push("/transfer-success");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};


