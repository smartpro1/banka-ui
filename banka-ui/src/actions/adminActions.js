import axios from "axios";
import { GET_ERRORS, WITHDRAWAL, DEPOSIT} from "./types";

export const withdrawalAction = (transDetails)  => async dispatch =>{
   
    try {
      const res = await axios.post(`/api/v1/users/withdraw-funds`, transDetails);
      dispatch({
        type: WITHDRAWAL,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  export const depositAction = (transDetails) => async (dispatch) => {
    try {
      const res = await axios.post(`/api/v1/users/deposit-funds`, transDetails);
      dispatch({
        type: DEPOSIT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };