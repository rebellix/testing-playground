import React from 'react';
import App from '../components/App';
import { shallow } from 'enzyme';
import { testStore, findByDataTest } from '../../utils';

const setUp = (initState = {}) => {
  const mockStore = testStore(initState);
  const component = shallow(<App store={mockStore} />).childAt(0).dive();
  return component;
};

describe('App Component', () => {
  let component;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Some title 1',
          body: 'Some body 1',
          id: 'example id 1',
        },
        {
          title: 'Some title 2',
          body: 'Some body 2',
          id: 'example id 2',
        },
        {
          title: 'Some title 3',
          body: 'Some body 3',
          id: 'example id 3',
        },
      ],
    };
    component = setUp(initialState);
  });

  it('Should render without errors', () => {
    const app = findByDataTest(component, 'appComponent');
    expect(app.length).not.toBeFalsy();
  });

  it('exampleMethod should update the state as expected', () => {
    const classInstance = component.instance();
    classInstance.exampleMethod_updatesState();
    const { state } = classInstance;
    expect(state.hideButton).toBe(true);
  });

  it('exampleMethod should return new value', () => {
    const classInstance = component.instance();
    const newValue = classInstance.exampleMethod_returnsValue(6);
    expect(newValue).toBe(7);
  });
});
