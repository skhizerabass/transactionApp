import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:colors.background,
    },
    subContainer:{
        flex:1,
        paddingHorizontal:20
    },
    topText:{
        fontFamily: THEME_FONT_SEMIBOLD,
        fontSize:RFValue(27),
        color:colors.black,
        marginTop:20
    },
    iconContainer:{
        position:'absolute',
        left:0,
        bottom:40
    },
    iconStyle:{
        fontSize:RFValue(50),
        color: colors.black
    },
    card:{
        position:'absolute',
        width:'100%',
        alignSelf:'center',
        zIndex:1,
        paddingVertical:20,
        paddingHorizontal:20,
        borderRadius:30,
        marginTop:20
    },
    addcard:{
        position:'absolute',
        position:'absolute',
        width:'100%',
        alignSelf:'center',
        paddingTop:100,
        paddingHorizontal:20,
        borderRadius:30,
        bottom:20
    },
    addIcon:{
        fontSize:RFValue(50),
        backgroundColor: colors.backgroundColor,
        color:'white',
        alignSelf:'flex-end',
        paddingTop:10
    },
    currentBalance:{
        fontSize:RFValue(18),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background
    },
    balanceText:{
        fontSize:RFValue(50),
        fontFamily: THEME_NUMBER_MEDIUM,
        color: colors.background,
        alignSelf:'center',
        marginVertical:20
    },
    bankName:{
        fontSize:RFValue(18),
        fontFamily: THEME_FONT_SEMIBOLD,
        color: colors.background,
        alignSelf:'flex-end',
        marginTop:10
    }
})