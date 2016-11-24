import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer';

describe('Components', () => {
  describe('<Footer/>', () => {
    it('should render Footer correctly', () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.is('.footer')).toBe(true);
      expect(wrapper.find('div .row').length).toBe(1);
      expect(wrapper.find('div .col-sm-3').length).toBe(2);
      expect(wrapper.find('div .col-sm-5 > h3 > a[href="https://github.com/Eskalol/StackSmashingDetected"]').length).toBe(1);
      expect(wrapper.find('i .fa .fa-github').length).toBe(1);
      expect(wrapper.find('div .col-sm-5 > h3 > a[href="https://github.com/Eskalol/StackSmashingDetected"]').text()).toBe(' StackSmashingDetected');
    });
  });
});
