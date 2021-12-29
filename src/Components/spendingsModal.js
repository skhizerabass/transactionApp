import React, { Component, useCallback, useState } from 'react';
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
import { THEME_FONT, THEME_NUMBER_FONT } from '../Sdk/fonts';
import { colors } from '../Sdk/colors';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');
import Modal from "react-native-modal";
import Slider from '@react-native-community/slider';

const SpendingsModal = (props) => {
    const [sliderValue, setSliderValue] = useState(0);

    return (
        <Modal
            style={styles.container}
            isVisible={props.isModalVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={props.toggleModal}
        >
            <LinearGradient
                colors={["#DE3531", "#F6B560"]}
                style={styles.modal}
                start={{ x: 2.9, y: 1.8 }} end={{ x: 3.1, y: 0.0 }}>
                <View style={styles.topView}>
                    <Text style={styles.smallText}>On average, you spend</Text>
                    <View style={{marginTop:10}}>
                    <Text style={styles.spendText}>$ 500</Text>
                    <View style={styles.percentageContainer}>
                        <Text style={styles.percentage}>12%</Text>
                    </View>
                    </View>
                    <Text style={[styles.smallText, { alignSelf: 'flex-end' }]}>month</Text>
                </View>
                <LinearGradient
                    colors={["#DE3531", "#F0A071"]}
                    start={{ x: 2.0, y: 5.4 }} end={{ x: 0.0, y: 0.0 }}
                    style={styles.midView}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.editText}>*we suggest:</Text>
                    <Text style={styles.suggestText}>10%</Text>
                    </View>
                    <Slider
                        style={{ width: RFValue(240), height: 40, alignSelf:'center' }}
                        minimumValue={0}
                        maximumValue={500}
                        step={10}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        value={sliderValue}
                        onValueChange={(value) => setSliderValue(value)}
                    />
                    <View style={{alignItems:'center'}}>
                    <Text style={[styles.smallText, {alignSelf:'flex-start', marginLeft:30}]}>letting you spend</Text>

                    <Text style={styles.editSpend}>$ {sliderValue}</Text>
                    <Text style={[styles.smallText, {alignSelf:'flex-end' , marginRight:30}]}>month</Text>

                    </View>
                </LinearGradient>
                <TouchableOpacity onPress={props.onPressSave} style={styles.saveContainer}>
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
            </LinearGradient>
        </Modal>
    );
};
export default SpendingsModal;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    modal: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    topView: {
        alignSelf: 'center'
    },
    smallText: {
        fontSize: RFValue(12),
        fontFamily: THEME_FONT,
        color: colors.black
    },
    spendText: {
        fontSize: RFValue(60),
        fontFamily: THEME_NUMBER_FONT,
        color: colors.background,
        marginLeft: 20
    },
    midView: {
        marginTop: 10,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    editText: {
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
        color: colors.black,
        marginBottom: 5
    },
    suggestText: {
        fontSize: RFValue(30),
        fontFamily: THEME_NUMBER_FONT,
        color: colors.background,
        marginLeft:10
    },
    editSpend: {
        fontSize: RFValue(60),
        fontFamily: THEME_NUMBER_FONT,
        color: colors.background,
        alignSelf: 'center',
        marginLeft:20
    },
    saveContainer: {
        marginVertical: 20,
        backgroundColor: colors.background,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'center'
    },
    saveText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(20),
        color: colors.black
    },
    percentageContainer:{
        height:RFValue(35),
        width:RFValue(35),
        borderRadius:RFValue(35/2),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        position:'absolute',
        top:-15,
        right:-30
    },
    percentage:{
        fontFamily:THEME_NUMBER_FONT,
        fontSize:RFValue(17),
        color: '#DE3531'
    }
});
