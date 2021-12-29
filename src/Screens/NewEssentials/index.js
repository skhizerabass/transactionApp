import React, { useState } from 'react';
import {
    View, Image, Text, SafeAreaView,
    TouchableOpacity, Dimensions,
    ScrollView, TextInput, Alert
} from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';
import { RFValue } from 'react-native-responsive-fontsize';
import { actionCreators } from '../../redux/actions/envelope';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('screen');

const DATA = [
    {
        title: "housing",
        image: require('../../../assets/Images/housing_essential.png')
    },
    {
        title: "groceries",
        image: require('../../../assets/Images/groceries_essential.png')
    },
    {
        title: "transportation",
        image: require('../../../assets/Images/transport_essential.png')
    },
    {
        title: "utilities",
        image: require('../../../assets/Images/utilities_essential.png')
    },
    {
        title: "subscriptions",
        image: require('../../../assets/Images/subscription_essential.png')
    },
    {
        title: "health",
        image: require('../../../assets/Images/health_essential.png')
    },
    {
        title: "insurance",
        image: require('../../../assets/Images/insurance_essential.png')
    },
]

const NewEssentials = props => {
    const [activeIndex, setIndex] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [envelopeName, setEnvelope] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    renderList = ({ item, index }) => {
        return (
            <View style={styles.listView}>
                <Image style={styles.listImage} source={item.image} />
                <Text style={styles.listText}>{item.title}</Text>
            </View>
        )
    }

    const success = () => {
        Alert.alert('Success', 'New envelope has been created');
        props.navigation.goBack();
    }

    const failure = () => {
        setLoading(false);
    }


    const saveEnvelope = () => {
        if (!envelopeName.length) {
            Alert.alert('Please provide your Envelope Name');
            return;
        }
        setLoading(true);
        props.createEnvelope({
            name: envelopeName,
            type: 'F',
            category: DATA[activeIndex].title,
            percentage: amount,
            success,
            failure

        });


    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.subContainer}>
                <TextInput
                    style={styles.topText}
                    onChangeText={(value) => { setEnvelope(value) }}
                    placeholder={'New Essentials'}
                />
                <Text style={[styles.modalTopText, { marginTop: 50 }]}>
                    {'Enter what you\nspend each month'}                         </Text>
                <TouchableOpacity
                    onPress={() => saveEnvelope()}
                    style={styles.iconContainer}>
                    <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 50, marginHorizontal: -20, marginVertical: 30 }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={DATA}
                        sliderWidth={width}
                        itemWidth={width * 0.45}
                        renderItem={renderList}
                        onSnapToItem={index => setIndex(index)} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.amount}>$</Text>
                            <TextInput
                                style={[styles.amount, {
                                    minWidth: 100,
                                    marginLeft: RFValue(10)
                                }]}
                                placeholder={'Amount'}
                                value={amount}
                                onChangeText={(value) => { setAmount(value) }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    user: state.user

});

const mapDispatchToProps = dispatch => ({
    createEnvelope: (payload) => dispatch(actionCreators.createEnvelope(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewEssentials);
