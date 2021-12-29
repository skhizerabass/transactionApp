import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  Text,
  I18nManager,
  Dimensions,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Icon} from 'native-base';
import { colors } from '../Sdk/colors';
import { THEME_FONT } from '../Sdk/fonts';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const ProfileInput = (props) => {
  return (
    <View style={styles.upperView}>
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
            keyboardType={props.keyboardType}
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
    </View>
  );
};
export default ProfileInput;

const styles = StyleSheet.create({
  upperView: {
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:Platform.OS == 'ios' ? 20 : 10
  },
  iconStyle: {
    fontSize: RFValue(20),
    color: colors.error,
  },
  inputStyle: {
    color: colors.black,
    fontSize: RFValue(20),
    // fontFamily: THEME_FONT,
    borderBottomWidth:1
  },
});
