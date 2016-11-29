import React from 'react';
import {shallow, mount} from 'enzyme';
import {AddKeyValue} from './AddKeyValue';

const props = {
  namespace: "Namespace name",
  actions: {
    postValue: jasmine.createSpy()
  },
  keyObject: {
    key: "yaa",
    value: "yaa"
  }
};

describe('Components', () => {
  describe('<AddKeyValue/>', () => {
    it('should render AddKeyValue correctly', () => {
      const wrapper = shallow(<AddKeyValue {...props}/>);
      expect(wrapper.is('.row')).toBe(true);
      expect(wrapper.find('div .container').length).toBe(1);
      expect(wrapper.find('div .row').length).toBe(2);
      expect(wrapper.find('div .col-lg-12').length).toBe(1);
      expect(wrapper.find('div .col-sm-3').length).toBe(1);
      expect(wrapper.find('div .col-sm-8').length).toBe(1);
      expect(wrapper.find('div .col-sm-1').length).toBe(1);
      expect(wrapper.find('div .align-left').length).toBe(2);
      expect(wrapper.find('input .input-line').length).toBe(2);
      expect(wrapper.find('i .fa').length).toBe(2);
    });
    it('it should not call actions on click when the fields are empty', () => {
      const wrapper = mount(<AddKeyValue {...props}/>);
      wrapper.find('i .fa-check').simulate('click');
      expect(wrapper.props().actions.postValue).not.toHaveBeenCalled();
    });
  });
});
