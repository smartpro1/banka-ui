import { LOGIN } from "../actions/types";

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

    default:
      return state;
  }
};
