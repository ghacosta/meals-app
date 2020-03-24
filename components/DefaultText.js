import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
  return (
    <Text style={props.isTitle ? styles.title : styles.text}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  }
});

export default DefaultText;
