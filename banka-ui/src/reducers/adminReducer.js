
import { TRACK_TRANSACTIONS, GET_TRANSACTION_BY_ID } from "../actions/types";



const initialState = {
  trackedTransactions: [],
  getTransactionsById: []
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
      case TRACK_TRANSACTIONS:
      return {
        ...state,
        trackedTransactions: action.payload,
      };

      case GET_TRANSACTION_BY_ID:
      return {
        ...state,
        getTransactionsById: action.payload,
      };

    default:
      return state;
  }
};
