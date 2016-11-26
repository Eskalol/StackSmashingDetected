import React from 'react';
import {mount} from 'enzyme';
import {KeyValue} from './KeyValue';
import {Provider} from 'react-redux';
import configureStore from '../../store/configureStore';

const store = configureStore();

const props = {
  keyObject: {
    id: 1,
    value: "Test value",
    key: "Test key",
    loading: false,
    edit: false
  },
  actions: {
    getValue: jasmine.createSpy()
  },
  namespace: "Namespace name",
  loading: false
};

describe('Components', () => {
  describe('<KeyValue/>', () => {
    it('should render KeyValue correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <KeyValue {...props}/>
        </Provider>);
      expect(wrapper.find('div .row').length).toBe(2);
      expect(wrapper.find('div .col-lg-12').length).toBe(1);
      expect(wrapper.find('div .container').length).toBe(1);
    });
    it('should get value on mount', () => {
      const wrapper = mount(
        <Provider store={store}>
          <KeyValue {...props}/>
        </Provider>
     );
      expect(wrapper.find(KeyValue).props().actions.getValue).toHaveBeenCalled();
    });
  });
});
