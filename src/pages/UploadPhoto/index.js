import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {Button, Header, Gap} from '../../components';
import Link from '../../components/atoms/Link';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {uid, fullName, profession} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  const getImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Ooops, sepertinya anda tidak memilih foto',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
        setPhotoForDB(`data:${response.type};base64, ${response.data}`);
        console.log('Response : ', response);
      }
    });
  };

  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
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
    borderRadius: 110 / 2,
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
