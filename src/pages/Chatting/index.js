import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
        type="dark-profile"
      />
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>

      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  date: {
    paddingVertical: 20,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
