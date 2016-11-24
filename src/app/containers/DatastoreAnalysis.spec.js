import React from 'react';
import {mount} from 'enzyme';
import {DatastoreAnalysis} from './DatastoreAnalysis';
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
  describe('<DatastoreAnalysis/>', () => {
    it('should fire actions correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <DatastoreAnalysis {...props}/>
        </Provider>
      );
      expect(wrapper.find(DatastoreAnalysis).props().actions.changeText).toHaveBeenCalledWith("Datastore > Analysis");
      expect(wrapper.find(DatastoreAnalysis).props().actions.analysisButton).toHaveBeenCalledWith(true);
      expect(wrapper.find(DatastoreAnalysis).props().actions.analysisListUrl).toHaveBeenCalledWith("/datastore", true);
    });
  });
});
