import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT_SEMIBOLD } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor:colors.background,
        paddingHorizontal:20
    },
    backIcon:{
        position:'absolute',
        top:0,
        right:20,
        fontSize:RFValue(35),
        color:colors.black
    },
    topView:{
        marginTop:30
    },
    transactionsCard:{
        borderRadius:30,
        backgroundColor:'#EFEFEF',
        marginHorizontal:20,
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:20
    },
    headings:{
        fontSize:RFValue(30),
        fontFamily:THEME_FONT_SEMIBOLD,
        color:colors.black,
        marginTop:20,
    },
    listStyle:{
        marginBottom:20,
    },
    bgImage:{
        paddingVertical:10,
        zIndex:1
    },
})