import React from 'react';
import {mount, shallow} from 'enzyme';
import {EditValue} from './EditValue';

const props = {
  keyObject: {
    id: 1,
    value: "Test value",
    key: "Test key",
    loading: false,
    edit: false,
    overflow: false
  },
  actions: {
    toggleEditWrapper: jasmine.createSpy(),
    putValue: jasmine.createSpy()
  },
  namespace: "Namespace name"
};

describe('Components', () => {
  describe('<EditValue/>', () => {
    it('should render EditValue correctly', () => {
      const wrapper = shallow(<EditValue {...props}/>);
      expect(wrapper.find('div .col-sm-1').length).toBe(1);
      expect(wrapper.find('div .col-sm-3').length).toBe(1);
      expect(wrapper.find('div .col-sm-8').length).toBe(1);
      expect(wrapper.find('div .align-left').length).toBe(2);
      expect(wrapper.find('div .align-right').length).toBe(1);
      expect(wrapper.find('i .fa').length).toBe(2);
      expect(wrapper.find('h4').length).toBe(1);
      expect(wrapper.find('input .input-line').length).toBe(1);
      expect(wrapper.find('div .container').length).toBe(1);
    });
    it('should put value on submit', () => {
      const wrapper = mount(<EditValue {...props}/>);
      wrapper.find('i .fa-check').simulate('click');
      expect(wrapper.props().actions.putValue).toHaveBeenCalled();
    });
    it('should toggle edit wrapper', () => {
      const wrapper = mount(<EditValue {...props}/>);
      wrapper.find('i .fa-times').simulate('click');
      expect(wrapper.props().actions.toggleEditWrapper).toHaveBeenCalled();
    });
    it('should switch between input and textarea', () => {
      const _props = Object.assign({}, props, {
        keyObject: {
          ...props.keyObject,
          overflow: true
        }
      });
      const wrapper = shallow(<EditValue {..._props}/>);
      expect(wrapper.find('textarea .text-area').length).toBe(1);
    });
  });
});
