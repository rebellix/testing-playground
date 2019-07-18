import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from '../components/Button';

import { findByDataTest, checkProps } from '../../utils';

const setUp = (props = {}) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};

describe('SharedButton Component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        btnText: 'Sample Btn text',
        emitEvent: () => {},
      };
      expect(checkProps(SharedButton, expectedProps)).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let component;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        btnText: 'Sample Btn text',
        emitEvent: mockFunc,
      };
      component = setUp(props);
    });

    it('Should render a Button', () => {
      const button = findByDataTest(component, 'buttonComponent');
      expect(button.length).not.toBeFalsy();
    });

    it('Should emit an event', () => {
      const button = findByDataTest(component, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).not.toBeFalsy();
    });
  });
});
