import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer:{
        flexGrow: 1,
        backgroundColor:colors.background,
    },
    subContainer:{
        flexGrow:1,
        paddingHorizontal:20,
        paddingVertical:40
    },
    topText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(27),
        color: colors.black
    },
    addContainer: {
        width: RFValue(35),
        height: RFValue(35),
        borderRadius: RFValue(35 /2),
        backgroundColor: '#F6B560',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:5
    },
    addIcon: {
        fontSize: RFValue(30),
        color: 'white'
    },
    listView: {
        marginTop:30,
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
    midView:{
        flex:1,
        justifyContent:'flex-start',
    },
    inputContainer:{
        marginTop:20,
        backgroundColor:'#E5E5E5',
        borderRadius:30,
        height:RFValue(60),
        paddingHorizontal:20
    },
    inputField:{
        color: colors.black,
        fontSize: RFValue(17),
        fontFamily: THEME_FONT,
    },
    dateContainer:{
        flex:0.49,
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'#E5E5E5',
        borderRadius:30,
        paddingHorizontal:20,
        paddingVertical:10
    },
    dateText:{
        color: '#8C8C8C',
        fontSize: RFValue(17),
        fontFamily: THEME_FONT,
    },
    downIcon:{
        fontSize: RFValue(30),
        color:'#8C8C8C',
        marginLeft:5
    },
    priceInput:{
        flex:0.49,
        marginTop:20,
        backgroundColor:'#E5E5E5',
        borderRadius:30,
        paddingHorizontal:20,
    },
    priceText:{
        fontSize: RFValue(17),
        fontFamily: THEME_FONT,
        textAlign:'center'
    },
    bottomView:{
        flex:1,
        justifyContent:'center'
    },
    saveContainer:{
        alignSelf:'center',
        backgroundColor:'#F6B560',
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:20,
    },
    saveText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(20),
        color: 'white'
    }
})