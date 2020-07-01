import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({label, size, align}) => {
  return (
    <View>
      <Text style={styles.label(size, align)}>{label}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  label: (size, align) => ({
    fontFamily: 'Nunito-Regular',
    fontSize: size,
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
