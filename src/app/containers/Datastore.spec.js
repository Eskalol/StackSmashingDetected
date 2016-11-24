import React from 'react';
import {mount} from 'enzyme';
import {Datastore} from './Datastore';
import NamespaceList from '../components/Namespace/NamespaceList';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const props = {
  actions: {
    changeText: jasmine.createSpy(),
    analysisButton: jasmine.createSpy(),
    analysisListUrl: jasmine.createSpy()
  }
};

describe('Containers', () => {
  describe('<Datastore/>', () => {
    it('should fire actions correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <Datastore {...props}/>
        </Provider>
      );
      expect(wrapper.find(NamespaceList).length).toBe(1);
      expect(wrapper.find(Datastore).props().actions.changeText).toHaveBeenCalledWith("Datastore");
      expect(wrapper.find(Datastore).props().actions.analysisButton).toHaveBeenCalledWith(true);
      expect(wrapper.find(Datastore).props().actions.analysisListUrl).toHaveBeenCalledWith("/datastore-analysis", false);
    });
  });
});
