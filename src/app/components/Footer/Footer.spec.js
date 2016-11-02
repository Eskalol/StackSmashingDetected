import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Footer from './Footer';

function setup() {
  const props = jasmine.createSpy();

  const renderer = TestUtils.createRenderer();
  renderer.render(<Footer {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Footer', () => {
    it('should render correctly', () => {
      const {output} = setup();
      expect(output.type).toBe('footer');
      expect(output.props.className).toBe('footer');

      expect(output.props.children.type).toBe('div');
      expect(output.props.children.props.className).toBe('row');

      const [col1, col2, col3] = output.props.children.props.children;

      expect(col1.type).toBe('div');
      expect(col1.props.className).toBe('col-sm-3');

      expect(col2.type).toBe('div');
      expect(col2.props.className).toBe('col-sm-5');

      expect(col2.props.children.type).toBe('h3');

      const a = col2.props.children.props.children;
      expect(a.type).toBe('a');

      const [i, text] = a.props.children;

      expect(i.type).toBe('i');
      expect(i.props.className).toBe('fa fa-github');

      expect(text).toBe(' StackSmashingDetected');

      expect(col3.type).toBe('div');
      expect(col3.props.className).toBe('col-sm-3');
    });
  });
});
