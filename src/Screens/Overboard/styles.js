import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    slide1: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    bgImage: {
        flex: 1,
    },
    headingText: {
        fontSize: 25,
        marginVertical: '5%',
        marginHorizontal: '5%',
        fontWeight: '500',
    },
    screenOneContainer: {
        elevation: 10,
        width: 200,
        height: height - 200,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        top: 50,
        borderRadius: 10
    },
    screenOneImage: {
        width: 200,
        height: height - 200,
        alignSelf: 'center',
        // borderWidth: 1,
        marginVertical: 20
    },
    topText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(20),
        color: colors.black,
        textAlign: 'center',
        marginTop: 20,
    },
    screenTwoGradient: {
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 30,
        elevation: 1,
    },
    screeTwoTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    bankAccount: {
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
        color: colors.grey
    },
    bankBottomText: {
        fontSize: RFValue(14),
        fontFamily: THEME_FONT,
        color: colors.black,
        alignSelf: 'center',
        marginTop: 10
    },
    iconContainer: {
        position: 'absolute',
        right: 20,
        bottom: 30
    },
    iconStyle: {
        fontSize: RFValue(50),
        color: colors.black
    }
})