import React from 'react';
import {mount} from 'enzyme';
import {NamespaceList} from './NamespaceList';

const props = {
  items: ['stuff', 'imba', 'lol'],
  isFetching: false,
  actions: {
    fetchNamespaces: jasmine.createSpy()
  }
};

describe('Components', () => {
  describe('<NamespaceList/>', () => {
    it('should render NamespaceList correctly', () => {
      const wrapper = mount(<NamespaceList {...props}/>);
      expect(wrapper.find('div .row > div .col-lg-12 > a > div .container .hover > div .align-left > h3').length).toBe(3);
      expect(wrapper.find('div .loading-container').length).toBe(0);
    });
    it('should not render list when fetching', () => {
      const _props = Object.assign({}, props, {
        isFetching: true
      });
      const wrapper = mount(<NamespaceList {..._props}/>);
      expect(wrapper.find('div .loading-container').length).toBe(1);
      expect(wrapper.find('div .row > div .col-lg-12 > a > div .container .hover > div .align-left > h3').length).toBe(0);
    });
    it('should call fetchNamespaces', () => {
      const wrapper = mount(<NamespaceList {...props}/>);
      expect(wrapper.props().actions.fetchNamespaces).toHaveBeenCalled();
    });
  });
});
