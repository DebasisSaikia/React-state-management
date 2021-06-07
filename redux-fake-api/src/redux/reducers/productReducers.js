import { ActionTypes } from "../constants/actions-type";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
