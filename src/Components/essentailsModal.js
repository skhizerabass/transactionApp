import React, { Component, useCallback, useState } from 'react';
import {
    StyleSheet,
    TextInput,
    Platform,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Icon } from 'native-base';
import { THEME_FONT, THEME_NUMBER_FONT } from '../Sdk/fonts';
import { colors } from '../Sdk/colors';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen');
import Modal from "react-native-modal";
import Slider from '@react-native-community/slider';
import { actionCreators } from '../redux/actions/envelope';
import { connect } from 'react-redux';

const EssentialsModal = (props) => {
    const [sliderValue, setSliderValue] = useState(Number(props.amount));
    const [amount, setAmount] = useState(props.amount);

    const save = () => {
        const monthlyIncome = Number(props.user.budget);
        // console.log(props.envelope ? ((sliderValue / monthlyIncome) * 100).toFixed(2)
        //     : sliderValue);
        props.updateEnvelope({
            id: props.id,
            // amount: sliderValue,

            amount: props.envelope ? ((sliderValue / monthlyIncome) * 100).toFixed(2)
                : sliderValue
            ,

            success,
            failure
        })
    }

    const success = () => {
        Alert.alert('Success', 'Essentials has been updated');
        props.setAmount(sliderValue);
        props.toggleModal();
    }

    const failure = () => {
        console.log('WOW');
        // setLoading(false);
    }

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
                    <Text style={styles.smallText}>You spend</Text>
                    <Text style={styles.spendText}>$ {props.user.budget}</Text>
                    <Text style={[styles.smallText, { alignSelf: 'flex-end' }]}>month</Text>
                </View>
                <LinearGradient
                    colors={["#DE3531", "#F0A071"]}
                    start={{ x: 2.0, y: 5.4 }} end={{ x: 0.0, y: 0.0 }}
                    style={styles.midView}>
                    <Text style={styles.editText}>edit:</Text>
                    <Slider
                        style={{ width: RFValue(240), height: 40, alignSelf: 'center' }}
                        minimumValue={0}
                        maximumValue={Number(props.user.budget)}
                        step={10}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        value={sliderValue}
                        onValueChange={(value) => setSliderValue(value)}
                    />
                    <Text style={styles.editSpend}>$ {sliderValue}</Text>
                </LinearGradient>
                <TouchableOpacity onPress={() => save()} style={styles.saveContainer}>
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
            </LinearGradient>
        </Modal>
    );
};

const mapStateToProps = state => ({
    user: state.user

});

const mapDispatchToProps = dispatch => ({
    updateEnvelope: (payload) => dispatch(actionCreators.updateEnvelope(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EssentialsModal);
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
        fontSize: RFValue(50),
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
    editSpend: {
        fontSize: RFValue(60),
        fontFamily: THEME_NUMBER_FONT,
        color: colors.background,
        alignSelf: 'center',
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
    }
});
