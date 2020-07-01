import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12,
  },
});
