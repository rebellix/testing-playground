import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../components/Headline';

import { findByDataTest, checkProps } from '../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {

  describe('Has props', () => {
    let component;

    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test description',
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      expect(component).toBeDefined();
    });

    it('Should have a single header', () => {
      const wrapper = findByDataTest(component, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('Should have a description paragraph', () => {
      const wrapper = findByDataTest(component, 'description');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        description: 'Test Description',
        arr: [
          {
            fName: 'test first name',
            lName: 'test last name',
            email: 'test@email.com',
            age: 18,
            oStatus: false,
          },
        ],
      };
      expect(checkProps(Headline, expectedProps)).toBeUndefined();
    });
  });

  describe('Has NO props', () => {
    let component;

    beforeEach(() => {
      component = setUp();
    });

    it('Should not render', () => {
      const wrapper = findByDataTest(component, 'description');
      expect(wrapper.length).toBe(0);
    });
  });

});
