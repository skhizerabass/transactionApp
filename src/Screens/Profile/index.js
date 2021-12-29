import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'native-base';
import styles from './styles';
import Bar from '../../Components/Bar';
import Modal from "react-native-modal";
import { actionCreators } from '../../redux/actions/transactions';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/user';

const Profile = ({
  user,
  navigation,
  fetchTransactions,
  all,
  logout
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const success = () => {

  }

  const failure = () => {

  }

  useEffect(() => {
    fetchTransactions({
      id: user.id,
      envelope: '',
      success,
      failure
    });
  }, [])


  const navigate = (name) => {
    setModalVisible(false);
    navigation.navigate(name);
  }

  const renderTransaction = ({ item }) => {
    return (
      <Bar title={`${item[0].merchant || ''} $${item[0].amount || 0.0}`} bad={item[1]} />
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient colors={["#DE3531", "#F6B560"]}
          start={{ x: 0.0, y: 1.6 }} end={{ x: 0.9, y: 1.5 }}
          style={styles.mainContainer}>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.drawerIcon}>
            <Icon type='Entypo' name='menu' style={styles.menuIcon} />
          </TouchableOpacity>
          <View style={styles.topContainer}>
            <View>
              <Image source={require('../../../assets/Images/profilePic.png')}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.name}>{user.firstName}</Text>
            <Text style={styles.score}>{user.swallyScore || 0}</Text>
            <Text style={styles.scoreText}>SwallyScore</Text>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.transactionText}>Transactions</Text>
            {all && all.length ?
              <FlatList
                data={all}
                renderItem={renderTransaction}
              /> : null}
          </View>
        </LinearGradient>
        <Modal
          style={{ width: '100%' }}
          isVisible={isModalVisible}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          onBackdropPress={toggleModal}
        >
          <View style={styles.modal}>
            <Text style={styles.settingsText}>Settings</Text>
            <TouchableOpacity onPress={() => navigate('MyIncome')} style={styles.bankContainer}>
              <Text style={styles.bankText}>Adjust Income</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('EditProfile')} style={styles.bankContainer}>
              <Text style={styles.bankText}>My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigate('OpenFeedback') }} style={styles.bankContainer}>
              <Text style={styles.bankText}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutContainer} onPress={() => { logout() }}>
              <Text style={styles.bankText}>Logout</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity onPress={toggleModal} style={{ flex: 1, justifyContent:'center', backgroundColor:'red'}}>
          <Text>I am the modal content!</Text>
        </TouchableOpacity> */}
        </Modal>
      </ScrollView>

    </SafeAreaView>
  )
}


const mapStateToProps = state => ({
  user: state.user,
  all: state.transaction.all

});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: (payload) => dispatch(actionCreators.fetchTransactions(payload)),
  logout: (payload) => dispatch(logout(payload))
  // saveToken: () => dispatch(saveToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
