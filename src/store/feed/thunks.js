import axios from "axios";
import { allPostsFetched, onePostFetched } from "./slice";

const apiUrl = `https://codaisseur-coders-temporary.herokuapp.com/`;

export const fetchAllPosts = async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}posts`);
  //   console.log(response, "thunks work");
  dispatch(allPostsFetched(response.data));
};

export const fetchPostById = (id) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}posts/${id}`);
  //   console.log(response.data, "2nd thunk works");
  dispatch(onePostFetched(response.data));
};

// fetchAllPosts();

// fetchPostById();
