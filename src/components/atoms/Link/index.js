import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

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
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
