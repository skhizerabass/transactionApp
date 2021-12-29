import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  Text,
  I18nManager,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {View, Icon} from 'native-base';
import { colors } from '../Sdk/colors';
import { THEME_FONT } from '../Sdk/fonts';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const SwallyBtn = (props) => {
  return (
    <LinearGradient     
        colors={!props.color ? ["#66E0C7", "#9FDECC"] :  ["#DE3531", "#F6B560"]}
        start={{x: 0.0, y: 2.5}} end={{x: 0.5, y: 1.0}} 
        style={styles.upperView}>
          <TouchableOpacity
            style={[styles.inputStyle, props.style]}
            onPress={props.onPress}
          >
              <Text style={styles.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};
export default SwallyBtn;
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: RFValue(20),
    color: colors.error,
  },
  inputStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical: 10,
  },
  upperView: {
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal:10,
    marginVertical:10
  },
  textStyle:{
    includeFontPadding:false,
      fontFamily:THEME_FONT,
      fontSize: RFValue(25),
      color: colors.black,
  }
});
