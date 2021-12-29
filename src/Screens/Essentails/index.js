import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, View, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import CreditCard from '../../Components/CreditCard';
import Transactions from '../../Components/Transactions';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import EssentialsModal from '../../Components/essentailsModal';
import Bar from '../../Components/Bar';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/transactions';

const Essentials = props => {
    const essentialData = props.route.params.item;
    const [isModalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState(essentialData.maxAmount);
    const [data, setData] = useState([]);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const success = () => {

    }

    const failure = () => {

    }

    useEffect(() => {
        props.fetchTransactions({
            id: props.user.id,
            envelope: null,
            success,
            failure
        });
    }, [])


    const renderTransaction = ({ item, index }) => {
        console.log("DUED", index, item);

        if (item[0].envelope === essentialData.id) {
            return (
                <Bar title={`${item[0].merchant || ''} $${item[0].amount || 0.0}`} bad={item[1]} />
            )
        }

        return null;
    }
    const { all } = props;
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={{alignItems:'flex-end'}}>
            <TouchableOpacity style={{justifyContent:'flex-end', padding:10}} onPress={() => props.navigation.goBack()}>
                <Icon type={'AntDesign'} name='close' />
            </TouchableOpacity>
            </View>
          
            <ImageBackground style={styles.bgImage} source={require('../../../assets/Images/homeBg3.png')}>
                {all && all.length ?
<View>
<CreditCard
                    green
                    month
                    edit
                    balance={'$ ' + amount}
                    bankName={essentialData.name}
                    editPress={toggleModal}
                />

                    <View opacity={0.9} style={styles.transactionsCard}>
                        <Text style={styles.headings}>Transactions</Text>
                        <FlatList
                            data={all}
                            renderItem={renderTransaction}
                        />
                    </View> 
                    </View>
                    : null}
            </ImageBackground>
            <EssentialsModal
                id={essentialData.id}
                amount={essentialData.maxAmount}
                isModalVisible={isModalVisible}
                setAmount={setAmount}
                toggleModal={toggleModal} />
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    user: state.user,
    all: state.transaction.all

});

const mapDispatchToProps = dispatch => ({
    // saveToken: () => dispatch(saveToken())
    fetchTransactions: (payload) => dispatch(actionCreators.fetchTransactions(payload))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Essentials);
