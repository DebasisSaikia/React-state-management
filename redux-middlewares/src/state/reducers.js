const initialState = {
  items: [],
  loading: false,
  error: null,
};

const initialState = [];
export const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_DATA":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_POSTS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
