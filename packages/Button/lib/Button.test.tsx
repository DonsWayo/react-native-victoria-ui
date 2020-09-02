import React from 'react';
import Button from './Button';

import renderer from 'react-test-renderer';

test('Button Renders', () => {
  const presss = () => {
    console.log('press');
  };
  const button = <Button text="test" onPress={presss} />;
  const tree = renderer.create(button).toJSON();
  expect(tree).toMatchSnapshot();
});
