import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface Props {
  onPress: () => void;
  text: string;
  style?: object | Array<object>;
  leftComp?: React.ReactNode;
  rightComp?: React.ReactNode;
}

const Example = (props: Props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.button, props.style]}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 80,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  text: {
    margin: 4,
    color: 'white',
  },
});
export default Example;
