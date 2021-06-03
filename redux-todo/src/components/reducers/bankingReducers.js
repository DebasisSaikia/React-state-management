const initialValue = {
  balance: 0,
  isSaving: false,
};
export const bankingReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.amount };

    case "WITHDRAW":
      return { ...state, balance: state.balance - action.amount };

    case "COLLECT_INTEREST":
      return { ...state, balance: state.balance * 1.03 };

    case "DELETE_ACCOUNT":
      return { ...state, balance: 0 };

    case "CHANGE_ACCOUNT":
      return { ...state, isSaving: !state.isSaving };

    default:
      return state;
  }
};
