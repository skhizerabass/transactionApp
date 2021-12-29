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
import { THEME_FONT } from '../Sdk/fonts';
import { colors } from '../Sdk/colors';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const SmallEnvelope = (props) => {
    return (
        <TouchableOpacity opacity={0.9} disabled={props.add ? true : false} onPress={props.onPress}>
            {props.add ?
                <TouchableOpacity onPress={props.addPress} style={styles.addContainer}>
                    <Icon style={styles.addIcon} type='Ionicons' name='add-outline' />
                </TouchableOpacity>
                :
                <View style={styles.container}>
                    <LinearGradient colors={["#66E0C7", "#9FDECC"]} style={styles.iconContainer}>
                    <Text numberOfLines={1} style={[styles.name, {color:'transparent'}]}>miscellaneous</Text>
                    </LinearGradient>
                </View>
            }
            <Image style={styles.envelope} source={require('../../assets/Images/customEnvelope.png')} />
            <Text numberOfLines={1} style={styles.name}>miscellaneous</Text>
        </TouchableOpacity>
    );
};
export default SmallEnvelope;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        zIndex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    envelope: {
        height: RFValue(130),
        width: RFValue(170)
    },
    name: {
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
        color: colors.black,
        marginTop: 10,
        alignSelf: 'center'
    },
    iconContainer: {
        width: '90%',
        borderRadius: RFValue(50/2),
    },
    iconStyle: {
        fontSize: RFValue(30),
        color: colors.black
    },
    addContainer: {
        position: 'absolute',
        left: 10,
        bottom: 40,
        zIndex: 1,
        width: RFValue(30),
        height: RFValue(30),
        borderRadius: RFValue(30 / 2),
        backgroundColor: '#F6B560',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: {
        fontSize: RFValue(30),
        color: 'white'
    },
});
