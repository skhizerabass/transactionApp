import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:colors.background,
        alignItems:'center',
        justifyContent:'center'
    },
    screenOneImage:{
        width: width * 0.9,
        height: RFValue(132)
    },
})