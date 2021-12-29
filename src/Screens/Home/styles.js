import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    homeBg: {
        paddingVertical: 20
    },
    topView: {
        alignItems: 'center',
        marginTop: 20
    },
    helloText: {
        fontSize: RFValue(20),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background,
        alignSelf: 'flex-start',
        paddingLeft: 60
    },
    nameText: {
        fontSize: RFValue(30),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.black,
        paddingRight:50
    },
    card: {
        width: width * 0.9,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
        alignSelf: 'center'
    },
    currentBalance: {
        fontSize: RFValue(18),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background
    },
    balanceText: {
        fontSize: RFValue(50),
        fontFamily: THEME_NUMBER_MEDIUM,
        color: colors.background,
        alignSelf: 'center',
        marginVertical: 20
    },
    bankName: {
        fontSize: RFValue(18),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: '#41AD8E',
        alignSelf: 'flex-end',
        marginTop: 10
    },
    homeBg2: {
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    shadowContainer: {
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headings: {
        fontSize: RFValue(30),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.black,
        marginTop: 20
    },
    listStyle: {
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    bottomView: {
        paddingHorizontal: 20
    },
    transactionTab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        marginVertical: 10
    },
    addIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: RFValue(40),
        width: RFValue(40),
        borderRadius: RFValue(40 / 2)
    },
    transactionTabText: {
        fontSize: RFValue(20),
        fontFamily: THEME_FONT,
        color: colors.black,
    },
    transactionTabSubText: {
        fontSize: RFValue(12),
        fontFamily: THEME_FONT,
    }
})