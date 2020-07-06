import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {DummyDoctor1} from '../../../assets';

const Others = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginRight: 16,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  content: {
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.white,
  },
  date: {
    fontFamily: fonts.primary.normal,
    fontSize: 11,
    color: colors.text.secondary,
    paddingTop: 8,
    textAlign: 'left',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
});
