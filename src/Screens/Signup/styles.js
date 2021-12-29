import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD } from '../../Sdk/fonts';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    subContainer: {
        marginTop: 30
    },
    inputStyle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: RFValue(18),
        fontFamily: THEME_FONT_SEMIBOLD,

        paddingVertical: 10,
    },
    upperView: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        paddingHorizontal: 5,
        marginTop: 30
    },
    topText: {
        fontSize: RFValue(27),
        fontFamily: THEME_FONT,
        textAlign: 'center',
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginTop: 40
    },
    iconContainer: {
        alignSelf: 'flex-end'
        // position:'absolute',
        // right:20,
        // bottom:40
    },
    iconStyle: {
        fontSize: RFValue(50),
        color: colors.black
    },
    signinText: {
        fontSize: RFValue(18),
        fontFamily: THEME_FONT,
        color: colors.black,
        textDecorationLine: 'underline',
    }
})