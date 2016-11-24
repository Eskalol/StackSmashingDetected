import React from 'react';
import {mount} from 'enzyme';
import {NamespaceAnalysis} from './NamespaceAnalysis';
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
  describe('<NamespaceAnalysis/>', () => {
    it('should fire actions correctly', () => {
      const wrapper = mount(
        <Provider store={store}>
          <NamespaceAnalysis {...props}/>
        </Provider>
      );
      expect(wrapper.find(NamespaceAnalysis).props().actions.changeText).toHaveBeenCalledWith(`${props.namespaceName} > Analysis`);
      expect(wrapper.find(NamespaceAnalysis).props().actions.analysisButton).toHaveBeenCalledWith(true);
      expect(wrapper.find(NamespaceAnalysis).props().actions.analysisListUrl).toHaveBeenCalledWith(`/namespace?name=${props.namespaceName}`, true);
    });
  });
});
