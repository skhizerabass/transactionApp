import { Text } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, ImageBackground, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


const SetupStep3 = props => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={[styles.subContainer, { paddingHorizontal: 0 }]}>
                <View style={[styles.midContainer, { paddingHorizontal: 20 }]}>
                    <Text style={styles.topText}>Let’s get an idea of your essential expenses every month. </Text>
                </View>
                <LinearGradient colors={["#DE3531", "#F6B560"]}
                    start={{ x: 0.0, y: 2.5 }} end={{ x: 0.9, y: 1.5 }}
                    style={styles.bottomLinear}>
                    <Text style={styles.linearText}>*If you’re unsure, that’s fine. Just give an estimation.  </Text>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('setup4')}
                        style={[styles.iconContainer, {right:20}]}>
                        <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </SafeAreaView>
    )
}

export default SetupStep3;