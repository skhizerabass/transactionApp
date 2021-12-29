import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  Text,
  I18nManager,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Icon } from 'native-base';
import { colors } from '../Sdk/colors';
import { THEME_FONT } from '../Sdk/fonts';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const Text_Input = (props) => {
  return (
    <LinearGradient colors={!props.gradient ? ['white', 'white'] : ["#66E0C7", "#9FDECC"]} style={styles.upperView}>
      <TextInput
        style={[styles.inputStyle, props.style]}
        selection={props.selection}
        placeholder={props.placeholder}
        placeholderTextColor={!props.gradient ? 'black' : '#65988E'}
        value={props.value}
        onFocus={props.onFocus}
        autoFocus={props.autoFocus}
        autoCapitalize={props.autoCapitalize}
        editable={props.editable}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={props.onSubmitEditing}
        ref={props.ref}
        blurOnSubmit={props.blurOnSubmit}
      />
      {props.error ? (
        <Icon name="error" type="MaterialIcons" style={styles.iconStyle} />
      ) :
        null}
    </LinearGradient>
  );
};
export default Text_Input;
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: RFValue(16),
    color: colors.error,
  },
  inputStyle: {
    flex: 1,
    color: colors.black,
    fontSize: RFValue(16),
    fontFamily: THEME_FONT,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  upperView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5
  },
});
