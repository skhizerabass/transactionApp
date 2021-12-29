import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    subContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },  
    screenOneImage: {
        width: width * 0.9,
        height: RFValue(132)
    },
    heading:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(27),
        color: colors.black,
    },
    subHeading:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(18),
        color: colors.black,
        marginTop: 10,
    },
    iconContainer:{
        position:'absolute',
        zIndex:1,
        right:20,
        bottom:40
    },
    iconStyle:{
        fontSize:RFValue(50),
        color: colors.black
    },

})