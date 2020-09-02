import React from 'react';
import {View} from 'react-native';

import Button from './Button';

import {storiesOf} from '../../../storybook/helpers/storiesOf';

const press = () => {
  console.log('press');
};

storiesOf('Components | Component', module)
  .addParameters({jest: ['Button']})
  .add('Button', () => (
    <View>
      <Button text="Button" onPress={press} />
    </View>
  ));
