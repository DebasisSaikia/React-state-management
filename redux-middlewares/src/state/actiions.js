import Axios from "axios";

export const fetchPosts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_POSTS_DATA" });

  try {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILED", error });
  }
};
