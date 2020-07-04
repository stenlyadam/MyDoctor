import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCatUmum, ILCatPsikiater, ILCatObat} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category}) => {
  const Icon = () => {
    switch (category) {
      case 'dokter umum':
        return <ILCatUmum style={styles.illustration} />;
      case 'psikiater':
        return <ILCatPsikiater style={styles.illustration} />;
      case 'dokter obat':
        return <ILCatObat style={styles.illustration} />;
      default:
        return <ILCatUmum style={styles.illustration} />;
    }
  };
  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.labelDoctor}>{category}</Text>
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
