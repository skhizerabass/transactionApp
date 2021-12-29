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

const Transactions = (props) => {
    return (
        <LinearGradient colors={["#66E0C7","#66E0C7"]}
            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 2.5 }}
            style={styles.container}>
        </LinearGradient>
    );
};
export default Transactions;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal:20,
        height:RFValue(40),
        borderRadius: 30
    },
});
