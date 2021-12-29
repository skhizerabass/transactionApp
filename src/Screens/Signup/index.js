import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';
import Text_Input from '../../Components/Input';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';

const Signup = props => {
  const { width, height } = Dimensions.get('screen');
  const [showModal, setshowModal] = React.useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  // On Signup In success navigating to the home screen.
  const onSuccess = () => {
    setLoading(false);
  }

  //In case Sign up fails
  const onFailure = () => {
    setLoading(false);
  }

  //On Sign Up Button Pressed
  const onSignup = () => {
    if (!name.length) {
      Alert.alert('Please provide your name');
      return;
    }

    if (!username.length) {
      Alert.alert('Please provide your username');
      return;
    }
    if (!email.length) {
      Alert.alert('Please provide your email');
      return;
    }
    if (!phone.length) {
      Alert.alert('Please provide your phone number');
      return;
    }

    if (!password.length) {
      Alert.alert('Please provide your password');
      return;
    }

    setLoading(true);
    //Redux Action Call for signup
    props.signup({
      name,
      phone,
      username,
      email,
      lastName,
      password,
      success: onSuccess,
      failure: onFailure
    });

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.topText}>Let's get started.</Text>
        <View style={[styles.subContainer]}>
          <Text_Input
            placeholder="First Name"
            value={name}
            onChangeText={(value) => setName(value)}
            gradient={true}
          />
          <Text_Input
            placeholder="Last Name"
            value={lastName}
            onChangeText={(value) => setLastName(value)}
            gradient={true}
          />
          <Text_Input
            placeholder="Phone"
            value={phone}
            onChangeText={(value) => setPhone(value)}
            gradient={true}
          />
          <Text_Input
            placeholder="Email"
            value={email}
            autoCapitalize={false}
            keyboardType={'default'}
            onChangeText={(value) => setEmail(value)}
            gradient={true}
          />
          <Text_Input
            placeholder="Username"
            value={username}
            autoCapitalize={false}
            keyboardType={'email-address'}
            onChangeText={(value) => setUsername(value)}
            gradient={true}
          />
          <Text_Input
            placeholder="Password"
            keyboardType={'default'}
            value={password}
            secureTextEntry={true}
            autoCapitalize={false}
            onChangeText={(value) => setPassword(value)}
            gradient={true}
          />
        </View>
        <TouchableOpacity
          disabled={loading}
          onPress={onSignup}>

          <LinearGradient colors={["#DD6E48", "#DD6E48"]} style={styles.upperView}>

            <Text style={[styles.inputStyle, { flex: 1 }]}>Sign up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', flex: 1, marginBottom: 20, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => {
            props.navigation.navigate('signin')
          }}
        >

          <Text style={[styles.inputStyle, { fontSize: RFValue(12), color: colors.black }]}>Already have an account?  </Text>
          <Text style={[styles.inputStyle, { fontSize: RFValue(14), color: colors.textGreen }]}>Sign In</Text>

        </TouchableOpacity>
        <View style={{ flexDirection: 'row', flex: 1, marginBottom: 40, justifyContent: 'center' }}>

          {/* <TouchableOpacity
            disabled={loading}
            onPress={() => {
              props.navigation.navigate('signin')
            }}
            style={{ flex: 1, alignSelf: 'flex-end' }}>
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={loading}
            onPress={onSignup}
            style={[styles.iconContainer, { alignSelf: 'flex-end' }]}>
            <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
          </TouchableOpacity> */}
        </View>
      </ScrollView >
    </SafeAreaView >

  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(actionCreators.signup(user)),
  // saveToken: () => dispatch(saveToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
