import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { actionCreators } from 'src/redux/actions/user';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import Text_Input from '../../Components/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';

const Signin = (props) => {

  const { width, height } = Dimensions.get('screen');
  const [showModal, setshowModal] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // On Sign In success navigating to the home screen.
  const onSuccess = () => {
    setLoading(false);
    // props.navigation.navigate('Bottom', {
    //   screen: 'HomeScreen',
    //   params: {}
    // });
  }

  //In case Sign in fails
  const onFailure = () => {
    setLoading(false);
  }

  //On Sign In Button Pressed
  const onSignIn = () => {
    if (!username.length) {
      Alert.alert('Please provide your username');
      return;
    }

    if (!password.length) {
      Alert.alert('Please provide your password');
      return;
    }

    setLoading(true);
    //Redux Action Call for login
    props.login({
      username,
      password,
      success: onSuccess,
      failure: onFailure
    })

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <LinearGradient colors={["#41AD8E", "#66E0C7"]} style={styles.subContainer}>
          <Text style={styles.topText}>Welcome Back!</Text>
          <View style={styles.midContainer}>
            <Text_Input
              gradient={false}
              value={username}
              onChangeText={(value) => setUsername(value)}
              placeholder='Username'
            />
            <Text_Input
              gradient={false}
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              placeholder='Password'
            />
          </View>


          <LinearGradient colors={["#DD6E48", "#DD6E48"]} style={styles.upperView}>
            <TouchableOpacity
              disabled={loading}
              onPress={onSignIn}
              style={{ flex: 1 }}
            >
              <Text style={[styles.inputStyle, { flex: 1 }]}>Sign in</Text>
            </TouchableOpacity>

          </LinearGradient>
          <TouchableOpacity
            style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => props.navigation.navigate('signup')}

          >

            <Text style={[styles.inputStyle, { fontSize: RFValue(12), color: colors.black, includeFontPadding: false }]}>Don't have an account?  </Text>
            <Text style={[styles.inputStyle, { fontSize: RFValue(14), color: '#FFF', includeFontPadding: false }]}>Sign Up</Text>

          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(actionCreators.login(user)),
  // saveToken: () => dispatch(saveToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
