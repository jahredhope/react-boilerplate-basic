// Link.react-test.js
import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

test('Button sets a base button class and passes through children', () => {
  const component = renderer.create(
    <Button>mock-child</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button passes through unknown props', () => {
  const component = renderer.create(
    <Button form={'mock-form'}>mock-child</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button sets class based on type', () => {
  const component = renderer.create(
    <Button type={'danger'}>mock-child</Button>
  );
  let tree = component.toJSON();
  expect(tree.props.className).toMatch(/(^|\s)mock-style-button-danger($|\s)/)
  expect(tree).toMatchSnapshot();
});
