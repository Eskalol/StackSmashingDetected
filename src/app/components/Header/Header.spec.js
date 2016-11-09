import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {Header} from './Header';

function setup() {
  const props = {
    ht: "Test header"
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

      expect(output.props.children.type).toBe('div');
      expect(output.props.children.props.className).toBe('header-content');

      const row = output.props.children.props.children;
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
    });
  });
});
