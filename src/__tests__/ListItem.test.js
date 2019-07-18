import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../components/ListItem';

import { findByDataTest, checkProps } from '../../utils';

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};

describe('ListItem Component', () => {
  describe('Checking propTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Sample title',
        content: 'Sample content',
      };
      expect(checkProps(ListItem, expectedProps)).toBeUndefined();
    });
  });

  describe('Renders correctly', () => {
    let component;

    beforeEach(() => {
      const props = {
        title: 'Sample title',
        content: 'Sample content',
      };
      component = setUp(props);
    });

    it('Should render a ListItem', () => {
      const listItem = findByDataTest(component, 'listItemComponent');
      expect(listItem.length).not.toBeFalsy();
    });

    it('Should render a ListItem title', () => {
      const title = findByDataTest(component, 'componentTitle');
      expect(title.length).not.toBeFalsy();
    });

    it('Should render a ListItem content', () => {
      const content = findByDataTest(component, 'componentContent');
      expect(content.length).not.toBeFalsy();
    });
  });

  describe(`Doesn't render`, () => {
    let component;

    beforeEach(() => {
      const props = {
        content: 'Sample content',
      };
      component = setUp(props);
    });

    it('Should not render a ListItem', () => {
      const listItem = findByDataTest(component, 'listItemComponent');
      expect(listItem.length).toBeFalsy();
    });
  });
});
