import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Platform,
    Text,
    I18nManager,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Icon } from 'native-base';
import { colors } from '../Sdk/colors';
import { THEME_FONT, THEME_NUMBER_FONT } from '../Sdk/fonts';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const CategoryBox = (props) => {
    return (
        <View>
            <View style={styles.container}>
            </View>
            <Text style={styles.text}>{props.item.name}</Text>
        </View>
    );
};
export default CategoryBox;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFEF',
        height: RFValue(95),
        width: RFValue(95),
        borderRadius: 20
    },
    innerContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        width: '100%'
    },
    innerText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(10),
        color: colors.black,
    },
    innerRateText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(10),
        color: '#41AD8E',
    },
    text: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(15),
        color: colors.black,
        marginTop: 5,
        alignSelf: 'center',
        width: RFValue(90)
    }
});
