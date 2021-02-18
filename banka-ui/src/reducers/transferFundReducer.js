import { TRANSFERFUND, UPDATEACCTBAL } from "../actions/types";

const initialState = {
  transferFund: {}
};

export const transferFundReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSFERFUND:
      return {
        ...state,
        transferFund: action.payload,
      };

    default:
      return state;
  }
};
