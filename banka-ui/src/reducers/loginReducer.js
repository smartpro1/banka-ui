import { LOGIN, UPDATETRANSACTION } from "../actions/types";

const initialState = {
  isValidToken: false,
  loginCredentials: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const isPayload = action.payload ? true : false;
      return {
        ...state,
        isValidToken: isPayload,
        loginCredentials: action.payload,
      };

    case UPDATETRANSACTION: 
      state.loginCredentials.transactions = action.payload;
      return {
       ...state,
      }

    default:
      return state;
  }
};
