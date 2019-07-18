import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

import { findByDataTest } from '../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    expect(component).toBeDefined();
  });

  it('Should have a wrapper', () => {
    const wrapper = findByDataTest(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByDataTest(component, 'logoImg');
    expect(logo).toBeDefined();
  });
});
