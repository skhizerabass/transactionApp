import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, View, Image, Text, SafeAreaView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import styles from './styles';
import { Content, Icon, Input } from 'native-base';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import DatePicker from 'react-native-date-picker'
import { convertDateToString } from '../../utils/dateFunc';
import { actionCreators } from '../../redux/actions/transactions';
import values from '../../constants/values';
import { useFocusEffect } from '@react-navigation/core';
import { getDate } from '../../utils/global';
const { width, height } = Dimensions.get('screen');

const DATA = [
    {
        title: "household",
        image: require('../../../assets/Images/setup/housing.png')
    },
    {
        title: "dining out",
        image: require('../../../assets/Images/setup/groceries.png')
    },
    {
        title: "travel",
        image: require('../../../assets/Images/setup/transportation.png')
    },
    {
        title: "clothes & shoes",
        image: require('../../../assets/Images/setup/insurance.png')
    },
    {
        title: "side hustle",
        image: require('../../../assets/Images/setup/subscription.png')
    },
    {
        title: "personal items",
        image: require('../../../assets/Images/setup/utilities.png')
    },
    {
        title: "entertainment",
        image: require('../../../assets/Images/setup/utilities.png')
    },
]

const AddTransactions = props => {
    const [activeIndex, setIndex] = useState(0);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [store, setStoreName] = useState('')
    const [amount, setAmount] = useState('')
    const [dataEnvelopes, setEnvelopes] = useState([]);
    const [loading, setLoading] = useState(false);
    const success = () => {
        Alert.alert('Success', 'New envelope has been created');
        props.navigation.goBack();
    }

    const failure = () => {
        setLoading(false);
    }


    useFocusEffect(

        React.useCallback(() => {
            const envelopes = [];
            if (props.envelopes && props.envelopes.length) {
                props.envelopes.forEach(item => {
                    if (item.name !== 'essentials' && item.type === "P")
                        envelopes.push(item)
                });
            }
            setEnvelopes(envelopes);
        }, [])
    );
    const enterTransaction = () => {
        if (!amount.length > 0) {
            Alert.alert('Warning', 'Please provide the amount for this transaction');
            return;
        }
        props.createTransaction({
            merchant: store,
            envelope: dataEnvelopes[activeIndex].id,
            date: getDate(date),
            amount,
            success,
            failure
        }
        )
    }

    renderList = ({ item, index }) => {
        return (
            <View style={styles.listView}>
                <Image style={styles.listImage} source={item.templates && item.templates.length ? values.IMAGES[item.templates[0].name] : require('../../../assets/Images/setup/groceries.png')} />
                <Text style={styles.listText}>{item.name}</Text>
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.topText}>Add Transaction </Text>
                    <View style={styles.addContainer}>
                        <Icon style={styles.addIcon} type='Ionicons' name='add-outline' />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: -20, marginVertical: 30 }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={dataEnvelopes}
                        sliderWidth={width * 0.8}
                        itemWidth={width * 0.5}
                        renderItem={renderList}
                        onSnapToItem={index => setIndex(index)} />
                </View>
                <View style={styles.midView}>
                    <View style={styles.inputContainer}>
                        <Input
                            value={store}
                            onChangeText={(value) => { setStoreName(value) }}
                            placeholderTextColor={'#8C8C8C'}
                            style={styles.inputField}
                            placeholder={'store name'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => setOpen(true)} style={styles.dateContainer}>
                            <Text style={styles.dateText}>{convertDateToString(date)}</Text>
                            <Icon type='FontAwesome' name='angle-down' style={styles.downIcon} />
                        </TouchableOpacity>
                        <View style={styles.priceInput}>
                            <Input
                                keyboardType={'number-pad'}
                                value={amount}
                                onChangeText={(value) => { setAmount(value) }}
                                placeholderTextColor={'#8C8C8C'}
                                style={styles.priceText}
                                placeholder={'$'}
                            />
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={enterTransaction} style={styles.saveContainer} >
                            <Text style={styles.saveText}>ENTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                mode={'date'}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    user: state.user,
    all: state.transaction.all,
    envelopes: state.envelope.envelopes,
    essentials: state.envelope.essentials
});

const mapDispatchToProps = dispatch => ({
    createTransaction: (payload) => dispatch(actionCreators.createTransaction(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddTransactions);
