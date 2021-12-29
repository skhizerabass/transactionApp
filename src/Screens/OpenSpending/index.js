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
import { ScrollView } from 'react-native-gesture-handler';
import Navigation from '../../services/Navigation';

const OpenSpending = props => {
    const spendingData = props.route.params.item;
    const [isModalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState((props.user.budget * spendingData.maxAmount) / 100);
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


    useEffect(() => {
        if (props.all && props.all.length) {
            const transactions = [];
            props.all.forEach(transaction => {
                if (Number(spendingData.id) === Number(transaction[0].envelope)) {
                    transactions.push(transaction);
                }
            });
            setData(transactions);
        }
    }, [props.all])



    const renderTransaction = ({ item }) => {
        console.log(item);

        return (
            <Bar
                title={`${item[2] && item[2] !== "null" ? item[2] : ''} $${item[0].amount || 0.0}`}
                bad={item[1]}
            />
        )
    }
    const { all } = props;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity
                onPress={() => Navigation.back()}
                style={{
                    marginTop:10,
                    padding: 5,
                    alignSelf: 'flex-end'
                }}
            >
                <Icon onPress={() => Navigation.back()} type={'AntDesign'} name='close' style={styles.backIcon} />
            </TouchableOpacity>
            <ScrollView >
                <View style={styles.topView}>
                    <CreditCard
                        green
                        month
                        edit
                        balance={'$ ' + (amount)}
                        bankName={spendingData.name}
                        editPress={toggleModal}
                    />
                </View>
                {/* <ImageBackground style={styles.bgImage} source={require('../../../assets/Images/homeBg3.png')}> */}
                {all && all.length ?

                    <View opacity={0.9} style={styles.transactionsCard}>
                        <Text style={styles.headings}>Transactions</Text>
                        <FlatList
                            data={data}
                            renderItem={renderTransaction}
                        />
                    </View> : null}
            </ScrollView>
            {/* </ImageBackground> */}
            <EssentialsModal
                envelope={true}
                id={spendingData.id}
                amount={spendingData.maxAmount}
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
)(OpenSpending);
