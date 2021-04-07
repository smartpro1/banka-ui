import axios from "axios";
import { GET_ERRORS, TRACK_TRANSACTIONS, GET_TRANSACTION_BY_ID} from "./types";

export const withdrawalAction = (transDetails)  => async dispatch =>{
   
    try {
      const res = await axios.post(`/api/v1/users/withdraw-funds`, transDetails);
      console.log({res})
      return dispatch({
        type: "WITHDRAWAL",
        payload: res.data,
      });
    } catch (err) {
      console.log({err});
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  export const depositAction = (transDetails) => async (dispatch) => {
    try {
      const res = await axios.post(`/api/v1/users/deposit-funds`, transDetails);
      console.log({res})
     return dispatch({
        type: "DEPOSIT",
        payload: res.data,
      });
      
    } catch (err) {
      console.log({err});
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

  export const trackTransactionsAction = (dateRange, history) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/v1/admins/track-transactions`, dateRange);
      dispatch({
        type: TRACK_TRANSACTIONS,
        payload: res.data,
      });
      history.push("/tracked-transactions");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    }
  };

  export const getTransactionByIdAction = (transactionId, history) => async (dispatch) => {
    try {
      const res = await axios.get(`/api/v1/admins/get-transaction/${transactionId}`);
      dispatch({
        type: GET_TRANSACTION_BY_ID,
        payload: res.data,
      });
      history.push("/get-transaction-by-id");
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    }
  };

  // export const getTransactionAction = (transactionId, history) => async (dispatch) => {
  //   try {
  //     const res = await axios.get(`/api/v1/admins/track-transactions`, transactionId);
  //     dispatch({
  //       type: GET_TRANSACTION,
  //       payload: res.data,
  //     });
  //     history.push("/get-transaction");
  //   } catch (err) {
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err,
  //     });
  //   }
  // };