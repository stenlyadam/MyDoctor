import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Input} from '../../components';
import {Header} from '../../components/molecules';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config';
import Loading from '../../components/molecules/Loading';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {set} from 'react-native-reanimated';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);

    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        console.log('Success: ', success);

        const data = {
          fullName: form.fullName,
          professon: form.profession,
          email: form.email,
        };

        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        setLoading(false);
        setForm('reset');
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
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button
              title="Continue"
              // onPress={() => navigation.navigate('UploadPhoto')}
              onPress={onContinue}
            />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingTop: 0,
  },
});
