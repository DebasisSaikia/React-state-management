export const deposit = (amount) => {
  return { type: "DEPOSIT", amount: Number(amount) };
};

export const withdraw = (amount) => {
  return { type: "WITHDRAW", amount: Number(amount) };
};

export const collectInterest = () => {
  return { type: "COLLECT_INTEREST" };
};

export const deleteAccount = () => {
  return { type: "DELETE_ACCOUNT" };
};
export const toggleAccount = () => {
  return { type: "CHANGE_ACCOUNT" };
};
export const toggleAuth = () => {
  return { type: "TOGGLE_AUTH" };
};
