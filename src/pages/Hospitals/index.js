import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ILHospitalBG,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components/molecules';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.backgroundImage}>
        <Text style={styles.title}>Hospitals page</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          name="Tingkatan paling atas"
          address="Jln. Surya Sejahtera 20"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
  backgroundImage: {
    height: 240,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.white,
  },
});
