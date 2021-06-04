export const myLogger = (store) => (next) => (action) => {
  return next(action);
};

export const secLogger = (store) => (next) => (action) => {
  return next(action);
};

export const limitNum = (store) => (next) => (action) => {
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};
