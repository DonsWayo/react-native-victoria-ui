import React from 'react';
import {View} from 'react-native';

import CircularProgress from './CircularProgress';

import {storiesOf} from '../../../storybook/helpers/storiesOf';

const press = () => {
  console.log('press');
};

storiesOf('Components | Component', module)
  .addParameters({jest: ['CircularProgress']})
  .add('CircularProgress', () => (
    <View>
      <CircularProgress text="Button" onPress={press} />
    </View>
  ));
