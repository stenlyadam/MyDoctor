import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 20,
    fontFamily: 'Nunito-SemiBold',
  },
});
