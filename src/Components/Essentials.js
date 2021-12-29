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

const CustomEssentails = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.add ? true : false}>
            {props.add ?
                <LinearGradient opacity={0.9} colors={props.index == 1 ? ["#398E76", "#66E0C7"] : ['#DE3531', '#F6B560']}
                    start={{ x: 0.0, y: 1.4 }} end={{ x: 0.9, y: 1.3 }}
                    style={[styles.container, { justifyContent: 'center' }]}
                >

                    <TouchableOpacity onPress={props.addPress} style={styles.addContainer}>
                        <Icon style={styles.addIcon} type='Ionicons' name='add-outline' />
                    </TouchableOpacity>
                </LinearGradient>
                :
                <LinearGradient opacity={0.9} colors={props.index == 1 ? ["#398E76", "#66E0C7"] : ['#DE3531', '#F6B560']}
                    start={{ x: 0.0, y: 1.4 }} end={{ x: 0.9, y: 1.3 }}
                    style={styles.container}
                >
                    <Text numberOfLines={1} style={styles.categoryText}>{props.category}</Text>
                    <Text style={styles.balanceText}>{props.balance}</Text>

                </LinearGradient>
            }
        </TouchableOpacity>
    );
};
export default CustomEssentails;

const styles = StyleSheet.create({
    container: {
        width: width * 0.5,
        height: height * 0.4,
        borderRadius: 30,
        padding: 10,
        paddingHorizontal:20
    },
    categoryText: {
        fontSize: RFValue(22),
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

    addIcon: {
        fontSize: RFValue(60),
        color: 'white',
        alignSelf: 'center'
    },
});
