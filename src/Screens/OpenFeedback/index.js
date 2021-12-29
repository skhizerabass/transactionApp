import React, { useState } from 'react';
import {
    View, Image, Text, SafeAreaView,
    TouchableOpacity, Dimensions,
    ScrollView, TextInput, Alert
} from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/transactions';
import Navigation from '../../services/Navigation';
const { width, height } = Dimensions.get('screen');

const OpenFeedback = props => {

    const [loading, setLoading] = useState(false);
    const [feedback, setFeedBack] = useState('');

    const success = () => {
        Alert.alert('Success!', 'Feedback has been received');
        Navigation.back();
    }

    const failure = () => {
        setLoading(false);
    }

    const save = () => {
        if (!feedback.length) {
            Alert.alert('Warning!', 'Please write down your feedback!');
            return;
        }
        props.createFeedBack({
            feedback,
            success,
            failure
        })
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.subContainer}>
                <Text style={styles.topText}>Feedback</Text>
                <Text style={styles.subText}>How can we improve?</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        onChangeText={(value) => setFeedBack(value)}
                        placeholder='give your feedback here...'
                        style={styles.inputText}
                        multiline={true}
                    />
                </View>
                <TouchableOpacity style={styles.saveContainer}
                    onPress={() => save()}
                >
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    user: state.user

});

const mapDispatchToProps = dispatch => ({
    createFeedBack: (payload) => dispatch(actionCreators.createFeedBack(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(OpenFeedback);
