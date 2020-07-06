import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.avatarWrapper}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Shayna Melinda</Text>
      <Text style={styles.profession}>Product Designer</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
