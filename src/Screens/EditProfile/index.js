import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, View, Image, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { Content, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ProfileInput from '../../Components/profileInput';
import { ScrollView } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';

const EditProfile = props => {
    const [name, setName] = useState(props.user.firstName);
    const [email, setEmail] = useState(props.user.email);
    const [phone, setPhone] = useState(props.user.phoneNumber);
    const [password, setPassword] = useState('');

    const success = (user) => {
        console.log(user);
        setName(user.firstName);
        setEmail(user.email);

    }

    const failure = () => {

    }

    const savedInfo = () => {
        props.navigation.goBack();
    }

    const saveInfo = () => {
        if (!name.length) {
            Alert.alert('Error', 'Please provide your Name');
            return;
        }
        if (!email.length) {
            Alert.alert('Error', 'Please provide your Email');
            return;
        }
        props.updateUser({
            id: props.user.id,
            name,
            email,
            phone,
            success: savedInfo,
            failure: failure
        })
    }

    useEffect(() => {
        props.fetchProfile({
            id: props.user.id,
            success,
            failure
        });
    }, [])

    // useEffect(() => {
    //     setName(props.user.firstName);
    //     setEmail(props.user.email);
    //     // setPhone(props.user.phone);

    // }, [props.user])
    const takePhoto = () => {
        launchCamera({
            mediaType: 'photo',
            includeBase64: false,
            quality: 0.3,
        }, (response) => {
            console.log('Resp', response)
        })
    }

    const choosePhoto = () => {
        console.log('im here')
        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
            quality: 0.3,
        }, (response) => {
            console.log('Resp', response)
        })
    }

    const selectOption = () =>
        Alert.alert(
            "Alert",
            "Select Image",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Capture Image", onPress: () => launchCamera({
                        mediaType: 'photo',
                        includeBase64: false,
                        quality: 0.3,
                    }, (response) => {
                        console.log('Resp', response)
                    })
                },
                {
                    text: "Choose from Gallery", onPress: () => launchImageLibrary({
                        mediaType: 'photo',
                        includeBase64: false,
                        quality: 0.3,
                    }, (response) => {
                        console.log('Resp', response)
                    })
                }
            ]
        );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Content contentContainerStyle={styles.subContainer}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={styles.topText}>My Account</Text>

                <TouchableOpacity style={styles.backContainer} onPress={() => props.navigation.goBack()}>
                    <Icon type={'AntDesign'} name='close' style={styles.backIcon} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={selectOption} style={styles.imageContainer}>
                    <Image source={require('../../../assets/Images/profilePic.png')}
                        style={styles.profileImage}
                    />
                    <Icon type='MaterialCommunityIcons' name='image-edit-outline' style={styles.editIcon} />
                </TouchableOpacity>
                <View style={styles.midContainer}>
                    <Text style={styles.heading}>name:</Text>
                    <ProfileInput
                        placeholder='Name'
                        value={name}
                        onChangeText={(value) => setName(value)}
                    />
                    <Text style={styles.heading}>email:</Text>
                    <ProfileInput
                        placeholder='swally@swally.com'
                        value={email}
                        keyboardType={'email-address'}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Text style={styles.heading}>phone:</Text>
                    <ProfileInput
                        keyboardType={'phone-pad'}
                        placeholder='000-000-0000'
                        value={phone}
                        onChangeText={(value) => setPhone(value)}
                    />
                    {/* <Text style={styles.heading}>password:</Text>
                    <ProfileInput
                        secureTextEntry={true}
                        placeholder='********'
                        onChangeText={(value) => setPassword(value)}
                    /> */}
                </View>
                <TouchableOpacity style={styles.saveContainer} onPress={() => saveInfo()}>
                    <Text style={styles.saveText}>SAVE</Text>
                </TouchableOpacity>
            </Content>
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    user: state.user

});

const mapDispatchToProps = dispatch => ({
    fetchProfile: (payload) => dispatch(actionCreators.fetchProfile(payload)),
    updateUser: (payload) => dispatch(actionCreators.updateUser(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditProfile);
