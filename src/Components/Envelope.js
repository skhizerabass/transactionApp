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
import values from '../constants/values';

import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');

const CustomEnvelope = (props) => {
    const { details } = props;
    return (
        <TouchableOpacity opacity={0.9} disabled={props.add ? true : false} onPress={props.onPress}>
            {props.add ?
                <TouchableOpacity onPress={props.addPress} style={styles.addContainer}>
                    <Icon style={styles.addIcon} type='Ionicons' name='add-outline' />
                </TouchableOpacity>
                :
                <View style={styles.container}>
                    <Text numberOfLines={1} style={styles.name}>{details.name}</Text>
                    {details.templates && details.templates.length > 0 ?
                        <Image style={styles.iconContainer} resizeMode={'contain'}
                            source={details.templates && details.templates.length > 0 ? values.IMAGES[details.templates[0].name] : ''} />
                        :
                        <LinearGradient colors={["#66E0C7", "#9FDECC"]} style={styles.iconContainer} />

                    }
                </View>
            }
            <Image style={styles.envelope} source={require('../../assets/Images/customEnvelope.png')} />
        </TouchableOpacity>
    );
};
export default CustomEnvelope;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    envelope: {
        height: RFValue(160),
        width: RFValue(210)
    },
    name: {
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
        color: colors.black,
        marginTop: 10
    },
    iconContainer: {
        width: RFValue(50),
        height: RFValue(50),
        borderRadius: RFValue(50 / 2),
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        fontSize: RFValue(30),
        color: colors.black
    },
    addContainer: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        zIndex: 1,
        width: RFValue(45),
        height: RFValue(45),
        borderRadius: RFValue(45 / 2),
        backgroundColor: '#F6B560',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: {
        fontSize: RFValue(40),
        color: 'white'
    },
});
