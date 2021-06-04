import Axios from "axios";
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);

  dispatch({
    type: "FETCH_DATA",
    payload: response.data,
  });
};
