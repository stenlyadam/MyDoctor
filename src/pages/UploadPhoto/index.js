import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto, IconAddPhoto} from '../../assets';
import {Button, Header, Gap} from '../../components';
import Link from '../../components/atoms/Link';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    justifyContent: 'space-around',
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
  },
  avatar: {
    height: 110,
    width: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 6,
    right: 8,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    marginTop: 26,
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    marginTop: 4,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
