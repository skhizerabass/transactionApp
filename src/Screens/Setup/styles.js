import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD } from '../../Sdk/fonts';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    amount1: {
        color: 'black',
        includeFontPadding: false,
        fontSize: RFValue(30),
        fontFamily: THEME_FONT_SEMIBOLD
    },
    amount: {
        color: 'black',
        includeFontPadding: false,
        fontSize: RFValue(22),
        paddingVertical:10,
        fontFamily: THEME_FONT_SEMIBOLD
    },
    imageContainer: {
        alignSelf: 'center',
        opacity: 0.4,
        padding: 40,
        shadowColor: '#222222',
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 10,
        borderRadius: 100,
        backgroundColor: '#C4C4C4'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
        marginTop: 20
    },
    heading: {
        color: '#41AD8E',
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
        textAlign: 'center',
        marginTop: 50,
    },
    subContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    topView: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    topText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(27),
        color: colors.black,
        textAlign: 'left',
        marginTop: 30,
    },
    midContainer: {
        flex: 6,
        justifyContent: 'center',
    },
    bottomView: {
        flex: 2,
    },
    iconContainer: {
        position: 'absolute',
        right: 0,
        bottom: 40,
        paddingHorizontal:20,
        paddingVertical:5
    },
    iconStyle: {
        fontSize: RFValue(50),
        color: colors.black
    },
    dobContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#EFEFEF',
        borderRadius: 28,
    },
    dayText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(25),
        flex: 1,
        textAlign:'center',
        color: colors.black
    },
    downIcon: {
        fontSize: RFValue(45),
        color: '#000',
        marginLeft: 10
    },
    bottomLinear: {
        flex: 3,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 20
    },
    linearText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(18),
        color: colors.black,
        marginTop: 20
    },
    bottomText: {
        fontSize: RFValue(12),
        fontFamily: THEME_FONT,
        color: colors.black,
        alignSelf: 'center'
    },
    placeholderText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(45),
        color: colors.black,
        alignSelf: 'center',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
        backgroundColor: '#F6F6F6',
        borderRadius: 30,
    },
    listView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImage: {
        height: RFValue(150),
        width: RFValue(150)
    },
    listText: {
        fontSize: RFValue(20),
        fontFamily: THEME_FONT,
        color: colors.black
    }
})