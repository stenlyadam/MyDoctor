import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    paddingLeft: 16,
    paddingVertical: 16,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
