import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Input, Button, Gap} from '../../components';
import Link from '../../components/atoms/Link';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Gap height={40} />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <Input label="Email Address" />
      <Gap height={40} />
      <Input label="Password" />
      <Gap height={10} />
      <Link label="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link label="Create New Account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    maxWidth: 153,
  },
});
