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

const Bar = (props) => {
    return (
        <View>
            <LinearGradient colors={!props.bad ? ["#66E0C7", "#9FDECC"] : ["#DE3531", "#F6B560"]}
                start={{ x: 0.0, y: 4 }} end={{ x: 0.5, y: 1.5 }}
                style={styles.upperView}>
                <Text style={{ fontSize: 18, paddingLeft: 20 }}>{props.title}</Text>
            </LinearGradient>
            <TouchableOpacity style={[styles.points, { backgroundColor: !props.bad ? '#41AD8E' : '#DE3531', }]}>
                <Text style={styles.pointsText}>{!props.bad ? '+1' : '-1'}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Bar;

const styles = StyleSheet.create({
    upperView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 30,
        paddingVertical: 15
    },
    points: {
        position: 'absolute',
        right: 0,
        width: 36,
        height: 36,
        zIndex: 1,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36 / 2
    },
    pointsText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(14),
        color: 'white'
    }
});
