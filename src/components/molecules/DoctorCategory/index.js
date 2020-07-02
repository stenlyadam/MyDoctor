import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.labelDoctor}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    padding: 12,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.primary,
  },
  labelDoctor: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.text.primary,
  },
});
