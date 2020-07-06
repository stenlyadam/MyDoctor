import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser} from '../../../assets';
import {fonts, colors} from '../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.professsion}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  professsion: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
  profile: {
    marginHorizontal: 12,
  },
});
