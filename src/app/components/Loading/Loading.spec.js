import React from 'react';
import {shallow} from 'enzyme';
import Loading from './Loading';

describe('Components', () => {
  describe('<Loading/>', () => {
    it('should render Loading correctly', () => {
      const wrapper = shallow(<Loading/>);
      expect(wrapper.is('.loading-container')).toBe(true);
      expect(wrapper.find('div .loading-container > img[src="/assets/rolling.svg"] .loading').length).toBe(1);
    });
  });
});
