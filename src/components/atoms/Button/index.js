import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

export default function Button({type, title, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),

  title: (type) => ({
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  }),
});
