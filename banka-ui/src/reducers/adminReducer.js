import {WITHDRAWAL, DEPOSIT, OPERATION } from "../actions/types";

const initialState = {
  withdrawal: "",
  deposit: "",
  operation: ""
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case WITHDRAWAL:
      return {
        ...state,
        withdrawal: action.payload,
      };

      case DEPOSIT:
      return {
        ...state,
        deposit: action.payload,
      };

      case OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    default:
      return state;
  }
};
