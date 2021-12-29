import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT_SEMIBOLD } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20
    },
    backIcon: {
        alignSelf: 'flex-end',
        fontSize: RFValue(35),
        color: colors.black
    },
    topView: {
    },
    transactionsCard: {
        borderRadius: 30,
        backgroundColor: '#EFEFEF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10
    },
    headings: {
        fontSize: RFValue(25),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.black,
        paddingHorizontal:5,
        includeFontPadding:false
    },
    listStyle: {
        marginBottom: 20,
    },
    bgImage: {
        paddingVertical: 10,
        zIndex: 1,
        flex: 1
    },
})