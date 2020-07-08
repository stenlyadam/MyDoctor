import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components/molecules';
import {fonts, colors, getData} from '../../utils';
import {Gap} from '../../components/atoms';
import {
  JSONCategoryDoctor,
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.doctorCategory}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map((item) => (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                ))}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.labelSection}>Top Rated Doctors</Text>
            <RatedDoctor
              name="Alexa Rachel"
              onPress={() => navigation.navigate('DoctorProfile')}
              desc="Pediatrician"
              avatar={DummyDoctor1}
            />
            <Gap height={16} />
            <RatedDoctor
              name="Sunny Frank"
              onPress={() => navigation.navigate('DoctorProfile')}
              desc="Dentist"
              avatar={DummyDoctor2}
            />
            <Gap height={16} />
            <RatedDoctor
              name="Poe Minn"
              onPress={() => navigation.navigate('DoctorProfile')}
              desc="Podiatrist"
              avatar={DummyDoctor3}
            />
            <Text style={styles.labelSection}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
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
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
