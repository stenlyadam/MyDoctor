import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginRight: 16,
    alignItems: 'flex-end',
  },
  content: {
    padding: 12,
    paddingRight: 18,
    maxWidth: '60%',
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.primary,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    paddingTop: 8,
    textAlign: 'right',
  },
});
