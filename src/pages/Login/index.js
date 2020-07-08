import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Input, Button, Gap, Loading} from '../../components';
import Link from '../../components/atoms/Link';
import {colors, useForm, storeData} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        console.log('Success: ', success);

        Fire.database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then((res) => {
            console.log(res.val());
            if (res.val()) {
              storeData('user', res.val());
              navigation.navigate('MainApp');
            }
          });

        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo />
          <Gap height={40} />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Gap height={40} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={40} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    maxWidth: 153,
  },
});
