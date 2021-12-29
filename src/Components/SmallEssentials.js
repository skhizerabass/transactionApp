import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Platform,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Icon } from 'native-base';
import { THEME_FONT, THEME_FONT_SEMIBOLD } from '../Sdk/fonts';
import { colors } from '../Sdk/colors';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const SmallEssentails = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient opacity={0.9} colors={props.index == 1 ? ["#398E76", "#66E0C7"] : ['#DE3531', '#F6B560']}
                start={{ x: 0.0, y: 1.4 }} end={{ x: 0.9, y: 1.3 }}
                style={styles.container}
            >
                <View style={styles.rangeContainer}>
                    <LinearGradient colors={["#66E0C7", "#9FDECC"]} style={styles.iconContainer}>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};
export default SmallEssentails;

const styles = StyleSheet.create({
    container: {
        width: width * 0.4,
        height: height * 0.3,
        borderRadius: 30,
        padding: 10
    },
    categoryText: {
        fontSize: RFValue(27),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background,
        alignSelf: 'flex-start'
    },
    balanceText: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        fontSize: RFValue(25),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background,
    },
    rangeContainer: {
        position: 'absolute',
        bottom: 10,
        zIndex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    iconContainer: {
        width: '100%',
        height:RFValue(30),
        borderRadius: RFValue(50/2),
    },
});
