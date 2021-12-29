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
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_MEDIUM } from '../Sdk/fonts';
import { colors } from '../Sdk/colors';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const CreditCard = (props) => {
    return (
        <View opacity={0.9} >
            <LinearGradient colors={props.green ? ["#398E76", "#66E0C7"] : ['#DE3531', '#F6B560']}
                start={{ x: 0.0, y: 1.6 }} end={{ x: 0.9, y: 1.5 }}
                style={styles.card}>
                {
                    props.edit ?
                        <TouchableOpacity onPress={props.editPress} style={styles.editContainer}>
                            <Image source={require('../../assets/Images/equalizer.png')} style={styles.iconTop} />
                        </TouchableOpacity>
                        : null}
                {props.icon ?
                    <Image source={require('../../assets/Images/pizza.png')} style={styles.pizzaIcon} />
                    : null
                }
                <Text style={styles.currentBalance}>{props.month ? 'every month:' : 'current balance:'}</Text>
                <Text style={styles.balanceText}>{props.balance}</Text>
                <Text style={[styles.bankName, { color: !props.green ? '#E08105' : props.edit ? '#41AD8E' : 'white' }]}>{props.bankName.toUpperCase()}</Text>
            </LinearGradient>
        </View>
    );
};
export default CreditCard;

const styles = StyleSheet.create({
    card: {
        width: width * 0.9,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
        alignSelf: 'center'
    },
    currentBalance: {
        fontSize: RFValue(18),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background
    },
    balanceText: {
        fontSize: RFValue(44),
        fontFamily: THEME_NUMBER_MEDIUM,
        color: colors.background,
        alignSelf: 'center',
        marginVertical: 15
    },
    bankName: {
        fontSize: RFValue(16),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: '#41AD8E',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    editContainer: {
        position: 'absolute',
        top: 15,
        right: 20,
        zIndex: 1,
    },
    iconTop: {
        width: RFValue(25),
        height: RFValue(25)
    },
    pizzaIcon: {
        position: 'absolute',
        right: 20,
        top: 20,
    }
});
