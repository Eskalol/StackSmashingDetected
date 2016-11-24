import React from 'react';
import {shallow} from 'enzyme';
import {Namespace} from './Namespace';

const props = {
  namespace: "Cool"
};

describe('Components', () => {
  describe('<Namespace/>', () => {
    it('should render Namespace correctly', () => {
      const wrapper = shallow(<Namespace {...props}/>);
      expect(wrapper.is('.row')).toBe(true);
      expect(wrapper.find('div .col-lg-12').length).toBe(1);
      expect(wrapper.find('div .col-lg-12 > a[href="/namespace?name=Cool"]').length).toBe(1);
      expect(wrapper.find('div .container .hover').length).toBe(1);
      expect(wrapper.find('div .align-left').length).toBe(1);
      expect(wrapper.find('div .container .hover > div .align-left > h3').text()).toBe(props.namespace);
    });
  });
});
