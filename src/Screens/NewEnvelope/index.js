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
import Navigation from '../../services/Navigation';
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

const NewEnvelope = props => {
    const [activeIndex, setIndex] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [envelopeName, setEnvelope] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState(Number(props.user.budget || 0));
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
        // console.log(DATA[activeIndex].title);
        props.createEnvelope({
            name: envelopeName,
            type: 'P',
            category: DATA[activeIndex].title,
            percentage: ((sliderValue / monthlyIncome) * 100).toFixed(2),
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
                    placeholder={'New Envelope'}
                />
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={styles.iconContainer}>
                    <Icon onPress={() => Navigation.back()} type={'AntDesign'} name='close' style={styles.iconStyle} />

                </TouchableOpacity>
                <Text style={styles.selectText}>select category:</Text>
                <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: -20, marginVertical: 30 }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={DATA}
                        sliderWidth={width * 0.8}
                        itemWidth={width * 0.5}
                        renderItem={renderList}
                        onSnapToItem={index => setIndex(index)} />
                </View>
                <View style={styles.bottomContainer}>
                    <LinearGradient
                        colors={["#DE3531", "#F6B560"]}
                        style={styles.linearContainer}
                        start={{ x: 2.9, y: 1.8 }} end={{ x: 3.1, y: 0.0 }}>

                        <Text style={styles.modalTopText}>
                            When you get a deposit, what percent do you want to spend on
                            <Text style={[styles.modalTopText, { color: 'white' }]}> {DATA[activeIndex].title}?</Text>
                        </Text>
                        <LinearGradient
                            colors={["#F2B190", "#F6B560"]}
                            style={styles.rangeView}
                            start={{ x: 2.9, y: 1.8 }} end={{ x: 3.1, y: 0.0 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.suggestText}>{((sliderValue / monthlyIncome) * 100).toFixed(0)}%</Text>
                            </View>
                            <Slider
                                style={{ width: RFValue(240), height: 40, alignSelf: 'center' }}
                                minimumValue={0}
                                maximumValue={monthlyIncome}
                                step={10}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#000000"
                                onValueChange={(value) => setSliderValue(value.toFixed(0))}
                            />
                        </LinearGradient>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.smallText, { alignSelf: 'flex-start', marginLeft: 30 }]}>letting you spend</Text>
                            <Text style={styles.editSpend}>$ {sliderValue}</Text>
                            <Text style={[styles.smallText, { alignSelf: 'flex-end', marginRight: 30 }]}>month</Text>
                        </View>
                        <TouchableOpacity disabled={loading} onPress={saveEnvelope} style={styles.saveContainer}>
                            <Text style={styles.saveText}>FINISH</Text>
                        </TouchableOpacity>
                        <Text>*based on your spending history</Text>
                    </LinearGradient>
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
)(NewEnvelope);
