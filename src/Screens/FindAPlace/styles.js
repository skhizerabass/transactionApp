import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    listContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
    listStyle:{
        marginBottom:30,
        paddingHorizontal:10,
        width:width * 0.65
    },
    card:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:30
    },
    cardIcon:{
        position:'absolute',
        right:0,
        top:0,
        zIndex:1,
        width: RFValue(42),
        height:RFValue(42),
        borderRadius:RFValue(42/2),
        backgroundColor:colors.background,
        alignItems:'center',
        justifyContent:'center',
    },
    cardImage:{
        
    },
    title:{
        fontSize:RFValue(22),
        fontFamily: THEME_FONT_SEMIBOLD,
        color:colors.black,
    },
    type:{
        fontSize:RFValue(14),
        fontFamily: THEME_FONT,
        color:colors.background
    },
    spendContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    spendText:{
        fontSize:RFValue(14),
        fontFamily: THEME_FONT,
        color:colors.black,
        marginRight:10,
    },
    spendAmount:{
        fontSize:RFValue(20),
        fontFamily: THEME_FONT_SEMIBOLD,
        color:colors.black,
    }
})