import { types } from '../redux/actions/types';
import postsReducer from '../redux/reducers/posts';

describe('Posts reducer', () => {
  it('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if action type is received', () => {
    const posts = [
      { title: 'Test Title 1' },
      { title: 'Test Title 2' },
      { title: 'Test Title 3' },
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
