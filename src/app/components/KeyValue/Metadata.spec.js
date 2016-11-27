import React from 'react';
import {mount, shallow} from 'enzyme';
import {Metadata} from './Metadata';

const props = {
  keyObject: {
    id: 1,
    value: "Test value",
    key: "Test key",
    metadata: {
      created: "2015",
      id: "3",
      lastUpdated: "2000",
      externalAccess: "No"
    }
  },
  actions: {
    toggleMetadataWrapper: jasmine.createSpy()
  },
  namespace: "Namespace name"
};

describe('Components', () => {
  describe('<Metadata/>', () => {
    it('should render Metadata correctly', () => {
      const wrapper = shallow(<Metadata {...props}/>);
      expect(wrapper.find('div .row').length).toBe(3);
      expect(wrapper.find('div .col-lg-12').length).toBe(1);
      expect(wrapper.find('div .container-header').length).toBe(1);
      expect(wrapper.find('div .container').length).toBe(1);
      expect(wrapper.find('div .col-md-3').length).toBe(4);
      expect(wrapper.find('i .fa').length).toBe(1);
      expect(wrapper.find('h4').length).toBe(5);
    });
    it('should toggle metadata', () => {
      const wrapper = mount(<Metadata {...props}/>);
      wrapper.find('i .fa-arrow-left').simulate('click');
      expect(wrapper.props().actions.toggleMetadataWrapper).toHaveBeenCalled();
    });
  });
});
