import React from 'react';
import {mount} from 'enzyme';
import {Namespace} from './Namespace';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const props = {
  namespaceName: "SuperCoolNamespace",
  actions: {
    changeText: jasmine.createSpy(),
    analysisButton: jasmine.createSpy(),
    analysisListUrl: jasmine.createSpy()
  }
};

describe('Containers', () => {
  describe('<Namespace/>', () => {
    it('should fire actions correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <Namespace {...props}/>
        </Provider>
      );
      expect(wrapper.find(Namespace).props().actions.changeText).toHaveBeenCalledWith(`${props.namespaceName}`);
      expect(wrapper.find(Namespace).props().actions.analysisButton).toHaveBeenCalledWith(true);
      expect(wrapper.find(Namespace).props().actions.analysisListUrl).toHaveBeenCalledWith(`/namespace-analysis?name=${props.namespaceName}`, false);
    });
  });
});
