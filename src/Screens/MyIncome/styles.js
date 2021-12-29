import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: colors.background,
    },
    subContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    topText: {
        marginHorizontal: 20,
        fontFamily: THEME_FONT_SEMIBOLD,
        fontSize: RFValue(27),
        color: colors.black,
        marginTop: 20
    },
    backContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    backIcon: {
        fontSize: RFValue(30),
        color: colors.black
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
    profileImage: {
        width: RFValue(120),
        height: RFValue(120),
        alignSelf: 'center',
    },
    editIcon: {
        fontSize: RFValue(25),
        position: 'absolute',
        bottom: 10,
        right: 0,
    },
    midContainer: {
        flex: 8,
        alignItems: 'flex-start',
        marginTop: 30,
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
    saveContainer: {
        alignSelf:'center',
        marginTop:30,
        marginBottom:20,
        backgroundColor: '#66E0C7',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    saveText: {
        fontFamily: THEME_FONT,
        fontSize: RFValue(20),
        color: colors.black
    }
})