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
import { setOnboarding } from '../../redux/actions/user';
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
    const [envelopes, setEnvelopes] = useState([
        {
            name: "housing",
            max_amount: "100",
            "type": "F",
            templates: ["housing"]

        },
        {
            name: "groceries",
            max_amount: "100",
            "type": "F",
            templates: ["groceries"]

        },
        {
            name: "transportation",
            max_amount: "100",
            "type": "F",
            templates: ["transportation"]

        },
        {
            name: "utilities",
            max_amount: "100",
            "type": "F",
            templates: ["utilities"]

        },
        {
            name: "subscriptions",
            max_amount: "100",
            "type": "F",
            templates: ["subscriptions"]

        },
        {
            name: "health",
            max_amount: "100",
            "type": "F",
            templates: ["health"]

        },
        {
            name: "insurance",
            max_amount: "100",
            "type": "F",
            templates: ["insurance"]

        },
    ]
    )
    const [amount, setAmount] = useState(envelopes[0].max_amount);

    const [loading, setLoading] = useState(false);
    // console.log(props.user.envelopes);
    renderList = ({ item, index }) => {
        return (
            <View style={styles.listView}>
                <Image style={styles.listImage} source={item.image} />
                <Text style={styles.listText}>{item.title}</Text>
            </View>
        )
    }

    const success = () => {
        // Alert.alert('Success', 'New envelope has been created');
        props.setOnboarding(false);
        // props.navigation.goBack();

    }

    const failure = () => {
        setLoading(false);
    }


    const saveEnvelope = () => {
        // if (!envelopeName.length) {
        //     Alert.alert('Please provide your Envelope Name');
        //     return;
        // }
        setLoading(true);
        const envelopesData = envelopes;
        let parentID = null;
        props.user.envelopes.forEach(envelope => {
            if (!envelope.miscellaneous) {
                parentID = envelope.id;
                return;
            }
        })
        envelopesData.forEach((envelope) => {
            envelope.parent = parentID;
        })
        props.createEssentials({
            envelopes: envelopesData,
            success,
            failure

        });


    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.subContainer}
            showsVerticalScrollIndicator={false}
            >

                <Text style={[styles.topText, { marginTop: 50 }]}>
                    {'Enter what you\nspend each month'}                         </Text>
                <TouchableOpacity
                    onPress={() => saveEnvelope()}
                    style={[styles.iconContainer]}>
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
                        onSnapToItem={index => {
                            setIndex(index)
                            setAmount(envelopes[index].max_amount)
                        }} />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom:50 }}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.amount1}>$</Text>
                            <TextInput
                                style={[styles.amount, {
                                    minWidth: 100,
                                    marginLeft: RFValue(10)
                                }]}
                                placeholder={'Amount'}
                                value={amount}
                                onChangeText={(value) => {
                                    setAmount(value);
                                    envelopes[activeIndex].max_amount = value;
                                    setEnvelopes([].concat(envelopes));
                                }}
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
    createEssentials: (payload) => dispatch(actionCreators.createEssentials(payload)),
    setOnboarding: (flag) => dispatch(setOnboarding(flag))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewEssentials);
