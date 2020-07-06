import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components/molecules';
import {colors, fonts} from '../../utils';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => (
          <List
            key={doctor.id}
            profile={doctor.profile}
            name={doctor.name}
            desc={doctor.desc}
          />
        ))}
      </View>
    </View>
  );
};

export default Messages;

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
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginLeft: 16,
    marginTop: 30,
    marginBottom: 16,
  },
});
