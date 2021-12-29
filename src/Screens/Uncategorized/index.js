import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, View, Image, Text, SafeAreaView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import styles from './styles';
import { Content, Icon, Input } from 'native-base';
import { connect } from 'react-redux';
import Navigation from '../../services/Navigation';
import CategoryBox from '../../Components/CategoryBox';
import { ScrollView } from 'react-native-gesture-handler';
import { actionCreators } from '../../redux/actions/transactions';
import { getDayMonthString } from '../../utils/dateFunc';
const { width, height } = Dimensions.get('screen');

const DATA = [
    {
        title: "household",
    },
    {
        title: "dining out",
    },
    {
        title: "travel",
    },
]

const Uncategorized = props => {
    const [activeIndex, setIndex] = useState(0);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [miscEnvelope, setMisc] = useState(null);
    const [transactionsData, setTransactionsData] = useState([]);

    const success = (data) => {
        // console.log("WOW", JSON.stringify(data.Transactions));
        setTransactionsData(data.Transactions);
    }
    const failure = () => {
        Alert.alert("Something went wrong");
    }

    useEffect(

        React.useCallback(() => {
            props.envelopes.forEach(element => {
                if (element.miscellaneous) {
                    setMisc(element);
                    fetchTransactionData(element.id);
                    return;
                }
            });
        })
        , []);


    const fetchTransactionData = (id) => {
        props.fetchTransactions({
            id: id,
            success,
            failure
        })
    }

    const updateTransaction = (item) => {
        Alert.alert("Confirmation!",
            "Are you sure you want to transfer this transaction in " + item.name + " envelope",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        props.changeTransaction({
                            id: transactionsData[0][0].id,
                            envID: item.id,
                            miscID: miscEnvelope.id,
                            success,
                            failure
                        })
                    },
                    style: "cancel",
                },
                {
                    text: "No",
                    onPress: () => {
                    },
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { },
            }
        );


    }
    // console.log(miscEnvelope);

    const renderList = ({ item, index }) => {

        return (
            !item.miscellaneous && item.name !== 'essentials' && item.type === "P" &&

            <TouchableOpacity style={styles.listView} onPress={() => {
                updateTransaction(item);
            }}>
                <CategoryBox item={item} index={index} />
            </TouchableOpacity>
        )
    }


    const renderEssentialsList = ({ item, index }) => {
        return (
            item.type === "F" &&

            <TouchableOpacity style={styles.listView} onPress={() => {
                updateTransaction(item);

            }}>
                <CategoryBox item={item} index={index} />
            </TouchableOpacity>
        )
    }

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
                <Image style={{ width: '100%' }} source={require('../../../assets/Images/Polygon.png')} />
                <TouchableOpacity style={styles.addContainer}>
                    <Icon style={styles.addIcon} type='Ionicons' name='add-outline' />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.subContainer}>
                    <TouchableOpacity
                        onPress={() => Navigation.back()}
                        style={{
                            padding: 5,
                            alignSelf: 'flex-end'
                        }}
                    >
                        <Icon onPress={() => Navigation.back()} type={'AntDesign'} name='close' style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Transactions</Text>
                    {/* <Text style={styles.subText}>drag and drop into categories</Text> */}
                    {transactionsData.length ?

                        <View style={styles.cardContainer}>
                            <View>
                                <Text style={styles.nameText}>{transactionsData[0][1]}</Text>
                                <Text style={styles.dateText}>{getDayMonthString(new Date(transactionsData[0][0].date))}</Text>
                            </View>
                            <Text style={styles.spendingText}>${transactionsData[0][0].amount}</Text>
                        </View>
                        : null
                    }
                    <View style={styles.subCard} />
                    <View style={styles.subCard2} />
                    <View style={styles.midContainer}>
                        <Text style={styles.midTopText}>Spending</Text>
                        <FlatList
                            style={{ flex: 1 }}
                            data={props.envelopes}
                            horizontal={true}
                            renderItem={renderList}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                        // ListFooterComponent={renderFooter}
                        />
                        <Text style={[styles.midTopText, { marginTop: 30 }]}>Essentials</Text>
                        <FlatList
                            style={{ flex: 1 }}
                            data={props.envelopes}
                            horizontal={true}
                            renderItem={renderEssentialsList}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                        // ListFooterComponent={renderFooter}

                        />
                    </View>
                    <TouchableOpacity style={styles.saveContainer} >
                        <Text style={styles.saveText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    envelopes: state.envelope.envelopes,
    essentials: state.envelope.essentials

});

const mapDispatchToProps = dispatch => ({
    fetchTransactions: (payload) => dispatch(actionCreators.getTransactions(payload)),
    changeTransaction: (payload) => dispatch(actionCreators.changeTransaction(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Uncategorized);
