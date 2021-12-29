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
    subContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    topText: {
        fontFamily: THEME_FONT_SEMIBOLD,
        fontSize: RFValue(27),
        color: colors.black,
        marginTop: 20,
    },
    subText:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(18),
        color: colors.black,
    },
    inputContainer:{
        height: height * 0.67,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'#EFEFEF',
        padding:20
    },
    saveContainer: {
        marginVertical: 20,
        backgroundColor: '#66E0C7',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'flex-end'
    },
    saveText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(20),
        color: colors.black
    },
    inputText:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(14),
        color: colors.black,
    }
})