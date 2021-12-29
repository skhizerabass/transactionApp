import { Content, Icon, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
                    navigation.navigate('setup3');
                },
                failure: () => {

                }
            })
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>

            <Text style={[styles.topText, { marginHorizontal: 20 }]}>Enter your monthly income:</Text>
            <ScrollView contentContainerStyle={styles.subContainer}
            showsVerticalScrollIndicator={false}
            >
              
                    <View
                        style={[styles.imageContainer,{marginTop:50}]}
                    >
                        <Image
                            source={require('../../../assets/Images/wallet_icome.png')} />
                    </View>
                    <Text style={styles.heading}>enter monthly income:</Text>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom:50 }}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.amount1}>$</Text>
                            <TextInput
                                style={[styles.amount, { minWidth: 100, marginLeft: RFValue(10) }]}
                                placeholder={'Amount'}
                                value={amount}
                                onChangeText={(value) => { setAmount(value) }}
                            />
                        </View>
                    </View>

                <TouchableOpacity
                    onPress={() => saveInfo()}
                    style={[styles.iconContainer, { right: 20 }]}>
                    <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginBottom: 40, justifyContent: 'center' }}>

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
            </ScrollView>
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
