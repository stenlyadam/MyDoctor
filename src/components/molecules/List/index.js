import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 16,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 18,
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
