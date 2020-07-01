import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.page}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    color: colors.text.primary,
  },
});
