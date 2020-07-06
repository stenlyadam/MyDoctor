import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {!disable && <IconSendLight />}
      {disable && <IconSendDark />}
    </View>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    height: 45,
    width: 45,
    borderRadius: 10,
    paddingLeft: 8.09,
    paddingBottom: 8.09,
    paddingRight: 3.09,
    paddingTop: 3.09,
  }),
});
