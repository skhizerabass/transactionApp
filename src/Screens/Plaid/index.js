import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';
import styles from './styles';
import apis from '../../services/apis'
import PlaidLink from 'react-native-plaid-link-sdk';
import { colors } from '../../Sdk/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

const Plaid = ({
  user,
  uploadToken
}) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const success = () => {
    setLoading(false);
  }

  const failure = () => {
    setLoading(false);
  }

  const generateToken = async () => {
    try {
      // console.log('USER', user.id);
      const { data } = await apis.getPlaidLink(user.id);
      setLoading(false);
      setToken(data.link_token);
    } catch (ex) {
      console.log(ex);
      setLoading(false);
    }

  }

  useEffect(() => {
    generateToken();
  }, []);
  return (

    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Awesome!</Text>
        <Text style={styles.subHeading}>Now it's time to link{"\n"}your bank account</Text>
      </View>
      {token ?
        <PlaidLink
          tokenConfig={{
            token: token,
          }}
          onSuccess={(data) => {
            // console.log(success);
            uploadToken({
              token: data,
              success,
              failure
            });

          }}
          onExit={(exit) => {
            console.log(exit);
          }}
        >
          <View style={{alignItems:'flex-end',padding:30}}>
          <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
          </View>
        </PlaidLink>
        : null}
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  uploadToken: payload => dispatch(actionCreators.savePlaidToken(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Plaid);
