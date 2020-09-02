import React from 'react';
import CircularProgress from './CircularProgress';

import renderer from 'react-test-renderer';

test('CircularProgress Renders', () => {
  const presss = () => {
    console.log('press');
  };
  const circularProgress = <CircularProgress text="test" onPress={presss} />;
  const tree = renderer.create(circularProgress).toJSON();
  expect(tree).toMatchSnapshot();
});
