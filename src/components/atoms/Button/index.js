import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({type, title, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),

  title: (type) => ({
    color: type === 'secondary' ? '#112340' : 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  }),
});
