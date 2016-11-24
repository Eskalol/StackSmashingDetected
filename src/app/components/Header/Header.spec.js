import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './Header';

const props = {
  ht: "Test header",
  analysisUrl: "/someUrl-analysis",
  analysis: false,
  analysisButton: true
};

describe('Components', () => {
  describe('<Header/>', () => {
    it('should render header correctly', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.is('.header')).toBe(true);

      expect(wrapper.find('div .header-content').length).toBe(1);
      expect(wrapper.find('div .col-sm-5 > h1').text()).toBe(props.ht);
      expect(wrapper.find('div .row').length).toBe(1);
      expect(wrapper.find('div .col-sm-3').length).toBe(1);
      expect(wrapper.find('div .col-sm-4').length).toBe(1);
      expect(wrapper.find('div .col-sm-5 #header-text > h1').length).toBe(1);
    });
    it('should render serach correctly', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('input #search').length).toBe(1);
      expect(wrapper.find('i .fa .fa-search .fa-2x').length).toBe(1);
    });
    it('should render analysis button correctly', () => {
      const wrapper = shallow(<Header {...props}/>);
      expect(wrapper.find('div .analysis-button').length).toBe(1);
      expect(wrapper.find('a[href="/someUrl-analysis"]').length).toBe(1);
      expect(wrapper.find('i .fa .fa-bar-chart .fa-2x .fa-background').length).toBe(1);
      expect(wrapper.find('i .fa .fa-table .fa-2x .fa-background').length).toBe(0);
    });
    it('should render table button correctly', () => {
      const _props = Object.assign({}, props, {
        analysis: true,
        analysisUrl: "/someUrl"
      });
      const wrapper = shallow(<Header {..._props}/>);
      expect(wrapper.find('div .analysis-button').length).toBe(1);
      expect(wrapper.find('a[href="/someUrl"]').length).toBe(1);
      expect(wrapper.find('i .fa .fa-bar-chart .fa-2x .fa-background').length).toBe(0);
      expect(wrapper.find('i .fa .fa-table .fa-2x .fa-background').length).toBe(1);
    });
    it('should not render analysis or table button', () => {
      const _props = Object.assign({}, props, {
        analysisButton: false
      });
      const wrapper = shallow(<Header {..._props}/>);
      expect(wrapper.find('div .analysis-button').length).toBe(1);
      expect(wrapper.find('a[href="/someUrl-analysis"]').length).toBe(0);
      expect(wrapper.find('i .fa .fa-bar-chart .fa-2x .fa-background').length).toBe(0);
      expect(wrapper.find('i .fa .fa-table .fa-2x .fa-background').length).toBe(0);
    });
  });
});
