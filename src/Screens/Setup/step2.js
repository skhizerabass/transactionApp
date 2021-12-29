import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import DatePicker from 'react-native-date-picker'
import { getDate } from '../../utils/global';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';
import { convertDateToString } from '../../utils/dateFunc';


const SetupStep2 = props => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    // On Signup In success navigating to the home screen.
    const onSuccess = () => {
        setLoading(false);
        props.navigation.navigate('setup3_1');
    }

    //In case Sign up fails
    const onFailure = () => {
        setLoading(false);
    }

    //On Sign Up Button Pressed
    const onDOB = () => {

        setLoading(true);
        //Redux Action Call for signup
        props.updateDOB({
            dob: getDate(date),
            success: onSuccess,
            failure: onFailure
        });

    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View style={styles.topView}>
                    <Text style={styles.topText}>Date of birth:</Text>
                </View>
                <View style={styles.midContainer}>
                    <View style={styles.dobContainer}>
                        <TouchableOpacity onPress={() => setOpen(true)} style={styles.dayContainer}>
                            <Text style={styles.dayText}>{convertDateToString(date)}</Text>
                            <Icon type='FontAwesome' name='angle-down' style={styles.downIcon} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        disabled={loading}
                        onPress={() => onDOB()}
                        style={styles.iconContainer}>
                        <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                maximumDate={date}
                mode={'date'}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = state => ({
    user: state.user

});

const mapDispatchToProps = dispatch => ({
    updateDOB: (payload) => dispatch(actionCreators.updateDOB(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetupStep2);
