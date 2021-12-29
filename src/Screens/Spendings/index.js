import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, View, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import CreditCard from '../../Components/CreditCard';
import Transactions from '../../Components/Transactions';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import SpendingsModal from '../../Components/spendingsModal';
import Bar from '../../Components/Bar';

const Spendings = props => {
    const DATA = [
        {
            title: 'P.F. Chang’s',
        },
        {
            title: 'DSW',
        },
        {
            title: 'DSW',
        },
        {
            title: 'DSW',
        },
        {
            title: 'DSW',
        },
    ];
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const renderTransactions = ({ item, index }) => {
        return (
            <View style={styles.listStyle}>
                  <Bar bad={index == 1 ? true : false} />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon type={'AntDesign'} name='close' style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.topView}>
                <CreditCard
                    green
                    month
                    edit
                    icon
                    balance={'$  1,000'}
                    bankName={'DINING'}
                    editPress={toggleModal}
                />
            </View>
            <ImageBackground style={styles.bgImage} source={require('../../../assets/Images/homeBg3.png')}>
                <View opacity={0.9} style={styles.transactionsCard}>
                    <Text style={styles.headings}>Transactions</Text>
                    <FlatList
                        style={{ marginVertical: 20 }}
                        data={DATA}
                        renderItem={renderTransactions}
                        keyExtractor={item => item.id} />
                </View>
            </ImageBackground>
            <SpendingsModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
        </SafeAreaView>
    )
}
export default Spendings;