import React from 'react';
import { Layout } from './Layout';
import renderer from 'react-test-renderer';

test('Layout sets a base Layout class and passes through children', () => {
  const component = renderer.create(
    <Layout />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
