import axios from "axios";
import jwtDecode from "jwt-decode";
import { GET_ERRORS } from "./types";

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
