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
        marginRight: 50
    },
    iconContainer: {
        position: 'absolute',
        right: 20,
        top: 10
    },
    iconStyle: {
        fontSize: RFValue(50),
        color: colors.black
    },
    selectText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(20),
        color: colors.black,
        marginTop: 30
    },
    listView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImage: {
        height: RFValue(130),
        width: RFValue(130)
    },
    listText: {
        fontSize: RFValue(20),
        fontFamily: THEME_FONT,
        color: colors.black
    },
    bottomContainer: {
        width: width * 0.9,
        marginLeft: 20,
        flex: 1,
    },
    linearContainer: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    modalTopText: {
        fontSize: RFValue(20),
        fontFamily: THEME_FONT,
        color: colors.black,
        alignItems: 'center'
    },
    rangeView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginVertical: 20,
        alignItems: 'center',
        borderWidth: 1,
    },
    editText: {
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
        color: colors.black,
        marginBottom: 5
    },
    suggestText: {
        fontSize: RFValue(30),
        fontFamily: THEME_NUMBER_FONT,
        color: colors.background,
        marginLeft: 10
    },
    editSpend: {
        fontSize: RFValue(60),
        fontFamily: THEME_NUMBER_FONT,
        color: colors.background,
        alignSelf: 'center',
        marginLeft: 20
    },
    smallText: {
        fontSize: RFValue(12),
        fontFamily: THEME_FONT,
        color: colors.black
    },
    amount: {
        color: 'black',
        includeFontPadding: false,
        fontSize: RFValue(30),
        fontFamily: THEME_FONT_SEMIBOLD
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 40,
        backgroundColor: '#F6F6F6',
        marginTop: 60
    },
    saveContainer: {
        marginVertical: 20,
        backgroundColor: colors.black,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'flex-end'
    },
    saveText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(20),
        color: colors.background
    },
})