import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {Header} from './Header';

function setup() {
  const props = {
    ht: "Test header",
    analysisUrl: "/someUrl",
    analysis: false,
    analysisButton: true
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Header {...props}/>);
  const output = renderer.getRenderOutput();

  return output;
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const output = setup();
      expect(output.type).toBe('header');
      expect(output.props.className).toBe('header');

      const [headerChild1, headerChild2] = output.props.children;

      // Tests for header child1
      expect(headerChild1.type).toBe('div');
      expect(headerChild1.props.className).toBe('header-content');

      const row = headerChild1.props.children;
      expect(row.type).toBe('div');
      expect(row.props.className).toBe('row');

      const [col1, col2, col3] = row.props.children;

      expect(col1.type).toBe('div');
      expect(col1.props.className).toBe('col-sm-3');

      expect(col2.type).toBe('div');
      expect(col2.props.className).toBe('col-sm-5');
      expect(col2.props.children.type).toBe('h1');
      expect(col2.props.children.props.children).toBe('Test header');

      expect(col3.type).toBe('div');
      expect(col3.props.className).toBe('col-sm-4');

      const [i, input] = col3.props.children;

      expect(i.type).toBe('i');
      expect(i.props.className).toBe('fa fa-search fa-2x');
      expect(input.type).toBe('input');
      expect(input.props.className).toBe('input-box');
      expect(input.props.id).toBe('search');
      expect(input.props.placeholder).toBe('Search...');

      // Test for header child2
      expect(headerChild2.type).toBe('div');
      expect(headerChild2.props.className).toBe('analysis-button');

      const [a] = headerChild2.props.children;

      expect(a.type).toBe('a');
      expect(a.props.href).toBe('/someUrl');

      const chartIcon = a.props.children;

      expect(chartIcon.type).toBe('i');
      expect(chartIcon.props.className).toBe('fa fa-bar-chart fa-2x fa-background');
    });
  });
});
