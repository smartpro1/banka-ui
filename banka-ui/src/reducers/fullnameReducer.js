import { FULLNAME } from "../actions/types";

const initialState = {
  fullname: ""
};

export const fullnameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FULLNAME:
      return {
        fullname: action.payload,
      };

    default:
      return state;
  }
};
