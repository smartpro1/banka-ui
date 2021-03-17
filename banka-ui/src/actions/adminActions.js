import axios from "axios";
import { GET_ERRORS} from "./types";

export const withdrawalAction = (transDetails)  => async dispatch =>{
   
    try {
      //const res = await axios.post(`/api/v1/users/withdraw-funds`, transDetails);
      return dispatch({
        type: "WITHDRAWAL",
        payload: "Successful",
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
     // const res = await axios.post(`/api/v1/users/deposit-funds`, transDetails);
     return dispatch({
        type: "DEPOSIT",
        payload: "Successful",
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  export const operationAction =  (operationDetails)  => async (dispatch) => {
    try {
     const res = await axios.post(`/api/v1/admins/operation`, operationDetails);
    return dispatch({
       type: "OPERATION", 
       payload: res.data
         });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  // export const operationAction = (operationDetails, history) => async (dispatch) => {
  //   console.log(operationDetails);
  //   try {
  //     const res = await axios.post(`/api/v1/admins/operation`, operationDetails);
      
  //     dispatch({
  //       type: OPERATION,
  //       payload: res.data,
  //     });
  //    history.push("/admin-success");
  //   } catch (err) {
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data,
  //     });
  //   }
  // };