import moxios from 'moxios';
import { testStore } from '../../../utils';
import { fetchPosts } from '../../redux/actions';

describe('FetchPosts action', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('Should update the store correctly', () => {
    const expectedState = [
      {
        title: 'Example title 1',
        body: 'Example body-content 1',
        id: 'example id 1',
      },
      {
        title: 'Example title 2',
        body: 'Example body-content 2',
        id: 'example id 2',
      },
      {
        title: 'Example title 3',
        body: 'Example body-content 3',
        id: 'example id 3',
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toEqual(expectedState);
    });
  });
});
