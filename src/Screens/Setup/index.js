import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ImageBackground, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import SwallyBtn from '../../Components/Swallybtn';
import styles from './styles';
import { Icon } from 'native-base';


const Setup = props => {
    const [currentSelected, selectCurrentSelected] = useState('school');

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <View style={styles.topView}>
                <Text style={styles.topText}>Which stage of life best describes you’re at?</Text>
                </View>
                <View style={styles.midContainer}>
                    <SwallyBtn onPress={() => selectCurrentSelected('school')} color={currentSelected==='school'} text={'High School'} />
                    <SwallyBtn  onPress={() => selectCurrentSelected('college')}  color={currentSelected==='college'} text={'College'} />
                    <SwallyBtn  onPress={() => selectCurrentSelected('adulting')}  color={currentSelected==='adulting'} text={'Adulting'} />
                </View>
                <View style={styles.bottomView}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('setup2')}
                    style={styles.iconContainer}>
                    <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Setup;