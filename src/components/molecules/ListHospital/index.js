import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.image} />
      <View>
        <Text style={styles.title}>LRumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: 151,
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
  image: {
    height: 60,
    width: 80,
    marginRight: 16,
    borderRadius: 11,
  },
});
