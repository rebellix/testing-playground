import { types } from './types';
import axios from 'axios';

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

export const fetchPosts = () => async (dispatch) => {
  await axios
    .get(postsEndpoint)
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
