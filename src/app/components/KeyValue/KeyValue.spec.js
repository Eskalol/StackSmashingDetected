import React from 'react';
import {shallow, mount} from 'enzyme';
import {KeyValue} from './KeyValue';

const props = {
  keyObject: {
    id: 1,
    value: "Test value",
    key: "Test key",
    loading: false
  },
  namespace: "Namespace name",
  loading: false,
  actions: {
    getMetaData: jasmine.createSpy(),
    toggleEdit: jasmine.createSpy(),
    deleteKeyValuePair: jasmine.createSpy(),
    getValue: jasmine.createSpy()
  }
};

describe('Components', () => {
  describe('<KeyValue/>', () => {
    it('should render KeyValue correctly', () => {
      const wrapper = shallow(<KeyValue {...props}/>);
      expect(wrapper.is('.row')).toBe(true);
      expect(wrapper.find('div .container').length).toBe(1);
      expect(wrapper.find('div .row').length).toBe(2);
      expect(wrapper.find('div .col-lg-12').length).toBe(1);
      expect(wrapper.find('div .col-sm-3').length).toBe(1);
      expect(wrapper.find('div .col-sm-8').length).toBe(1);
      expect(wrapper.find('div .col-sm-1').length).toBe(1);
      expect(wrapper.find('div .align-left').length).toBe(2);
      expect(wrapper.find('div .align-right').length).toBe(1);
      expect(wrapper.find('i .fa').length).toBe(3);
    });
    it('should be loading when fetching', () => {
      const _props = Object.assign({}, props, {
        keyObject: {
          ...props.keyObject,
          loading: true
        }
      });
      const wrapper = mount(<KeyValue {..._props}/>);
      expect(wrapper.find('div .loading-container').length).toBe(1);
      expect(wrapper.find('input .input-line').length).toBe(0);
      expect(wrapper.find('div .align-left > div').length).toBe(0);
    });
    it('it should call actions on click', () => {
      const wrapper = mount(
        <KeyValue {...props}/>
      );
      expect(wrapper.props().actions.getValue).toHaveBeenCalled();
      wrapper.find('i .fa-times').simulate('click');
      expect(wrapper.props().actions.deleteKeyValuePair).toHaveBeenCalled();
      wrapper.find('i .fa-pencil').simulate('click');
      expect(wrapper.props().actions.toggleEdit).toHaveBeenCalled();
      wrapper.find('i .fa-tag').simulate('click');
      expect(wrapper.props().actions.getMetaData).toHaveBeenCalled();
    });
  });
});
