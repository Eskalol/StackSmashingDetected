import React from 'react';
import {mount, shallow} from 'enzyme';
import {Value} from './Value';

const props = {
  keyObject: {
    id: 1,
    value: "Test value",
    key: "Test key",
    loading: false,
    edit: false,
    overflow: false,
    showValue: false
  },
  actions: {
    toggleShowValueWrapper: jasmine.createSpy(),
    toggleEditWrapper: jasmine.createSpy(),
    getMetaData: jasmine.createSpy(),
    deleteKeyValuePair: jasmine.createSpy()
  },
  namespace: "Namespace name"
};

describe('Components', () => {
  describe('<Value/>', () => {
    it('should render Value correctly', () => {
      const wrapper = shallow(<Value {...props}/>);
      expect(wrapper.find('div .col-sm-1').length).toBe(1);
      expect(wrapper.find('div .col-sm-3').length).toBe(1);
      expect(wrapper.find('div .col-sm-8').length).toBe(1);
      expect(wrapper.find('div .align-left').length).toBe(2);
      expect(wrapper.find('div .align-right').length).toBe(1);
      expect(wrapper.find('i .fa').length).toBe(3);
      expect(wrapper.find('h4').length).toBe(1);
      expect(wrapper.find('div .container').length).toBe(1);
    });
    it('should handle metadata', () => {
      const wrapper = mount(<Value {...props}/>);
      wrapper.find('i .fa-times').simulate('click');
      expect(wrapper.props().actions.deleteKeyValuePair).toHaveBeenCalled();
    });
    it('should handle delete', () => {
      const wrapper = mount(<Value {...props}/>);
      wrapper.find('i .fa-tag').simulate('click');
      expect(wrapper.props().actions.getMetaData).toHaveBeenCalled();
    });
    it('should handle edit', () => {
      const wrapper = mount(<Value {...props}/>);
      wrapper.find('i .fa-pencil').simulate('click');
      expect(wrapper.props().actions.toggleEditWrapper).toHaveBeenCalled();
    });
    it('should handle overflow toggles', () => {
      const _props = Object.assign({}, props, {
        keyObject: {
          ...props.keyObject,
          overflow: true
        }
      });
      const __props = Object.assign({}, props, {
        keyObject: {
          ...props.keyObject,
          overflow: true,
          showValue: true
        }
      });
      const wrapper = mount(<Value {..._props}/>);
      wrapper.find('i .fa-chevron-circle-down').simulate('click');
      expect(wrapper.props().actions.toggleShowValueWrapper).toHaveBeenCalled();
      const _wrapper = mount(<Value {...__props}/>);
      _wrapper.find('i .fa-chevron-circle-up').simulate('click');
      expect(_wrapper.props().actions.toggleShowValueWrapper).toHaveBeenCalled();
    });
  });
});
