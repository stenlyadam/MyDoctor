import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors} from '../../utils';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & flexsible
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
