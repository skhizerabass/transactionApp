import React, { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const MyBank = props => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ImageBackground style={styles.subContainer} source={require('../../../assets/Images/greenLinear.png')} >
                <Text style={styles.topText}>Connected Banks</Text>
                <View style={{ flexGrow: 5, marginTop: 30 }}>
                    <LinearGradient colors={["#51C4A7", "#66E0C7"]}
                        start={{ x: 0.0, y: 1.6 }} end={{ x: 0.9, y: 1.5 }}
                        style={styles.card}>
                        <Text style={styles.currentBalance}>current Balance:</Text>
                        <Text style={styles.balanceText}>$  1,000</Text>
                        <Text style={styles.bankName}>BANK NAME</Text>
                    </LinearGradient>
                    <LinearGradient colors={["#DE3531", "#F6B560",]}
                        start={{ x: 1.8, y: 1.6 }} end={{ x: 0.9, y: 3.5 }}
                        style={styles.addcard}>
                        <TouchableOpacity style={{alignSelf:'flex-end'}}>
                            <Icon type='Ionicons' name='md-add-circle' style={styles.addIcon} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ flex: 5 }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        style={styles.iconContainer}>
                        <Icon type='FontAwesome' name='angle-left' style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default MyBank;