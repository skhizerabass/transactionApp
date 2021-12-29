import { Content, Icon, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';
import Navigation from '../../services/Navigation';
import styles from './styles';

const MyIncome = ({ user, updateBudget, navigation }) => {
  const [amount, setAmount] = useState('');
  useEffect(() => {
    setAmount(user.budget);

  }, [user])



  const saveInfo = () => {
    if (amount.length > 0) {
      updateBudget({
        budget: amount,
        id: user.id,
        success: () => {
          Navigation.back();
        },
        failure: () => {

        }
      })
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      <Text style={styles.topText}>My Income</Text>
      <Content contentContainerStyle={styles.subContainer}
      showsVerticalScrollIndicator={false}
      >
        <View style={{
          flex: 1,
          marginTop: 50
        }}>
          <View
            style={styles.imageContainer}
          >
            <Image
              source={require('../../../assets/Images/wallet_icome.png')} />
          </View>
          <Text style={styles.heading}>enter monthly income:</Text>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <View style={styles.inputContainer}>
              <Text style={styles.amount}>$</Text>
              <TextInput
                style={[styles.amount, { minWidth: 100, marginLeft: RFValue(10) }]}
                placeholder={'Amount'}
                value={amount}
                onChangeText={(value) => { setAmount(value) }}
              />
            </View>
          </View>
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
  updateBudget: budget => dispatch(actionCreators.updateBudget(budget))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyIncome);
