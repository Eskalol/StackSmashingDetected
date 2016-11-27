import React from 'react';
import {mount} from 'enzyme';
import {KeyValueList} from './KeyValueList';
import {Provider} from 'react-redux';
import configureStore from '../../store/configureStore';

const store = configureStore();

const props = {
  items: [],
  actions: {
    getKeys: jasmine.createSpy()
  },
  namespace: "Namespace name",
  add: false,
  loading: false
};

describe('Components', () => {
  describe('<KeyValueList/>', () => {
    it('should render KeyValueList correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <KeyValueList {...props}/>
        </Provider>);
      expect(wrapper.find('div .row').length).toBe(1);
      expect(wrapper.find('div .col-lg-12').length).toBe(1);
      expect(wrapper.find('i .fa').length).toBe(1);
    });
    it('should get keys on mount', () => {
      const wrapper = mount(
        <Provider store={store}>
          <KeyValueList {...props}/>
        </Provider>
     );
      expect(wrapper.find(KeyValueList).props().actions.getKeys).toHaveBeenCalled();
    });
  });
});
