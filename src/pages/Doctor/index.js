import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components/molecules';
import {fonts, colors} from '../../utils';
import {Gap} from '../../components/atoms';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.welcome}>
          Mau konsultasi dengan siapa hari ini?
        </Text>
        <View style={styles.scrollWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.doctorCategory}>
              <Gap width={16} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </View>
          </ScrollView>
        </View>

        <Text style={styles.labelSection}>Top Rated Doctors</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />
        <Text style={styles.labelSection}>Good News</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    marginTop: 30,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 209,
    color: colors.text.primary,
  },
  doctorCategory: {
    flexDirection: 'row',
  },
  scrollWrapper: {
    marginHorizontal: -16,
  },
  labelSection: {
    marginTop: 30,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
});
