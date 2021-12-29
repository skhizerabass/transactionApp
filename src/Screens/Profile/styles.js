import { Dimensions, Platform, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../Sdk/colors';
import { THEME_FONT, THEME_FONT_SEMIBOLD, THEME_NUMBER_FONT, THEME_NUMBER_MEDIUM } from '../../Sdk/fonts';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    mainContainer:{
        flex:1
    },
    topContainer:{
        flex:5,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    profileImage:{
        width: RFValue(120),
        height: RFValue(120),
    },
    name:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(25), 
        color: 'white',
        marginTop:5
    },
    score:{
        fontFamily: THEME_NUMBER_MEDIUM,
        fontSize: RFValue(65), 
        color: 'white',
        marginTop:20
    },
    scoreText:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(20), 
        color: 'white',
    },
    bottomView:{
        flex:5,
        marginTop:20,
        borderTopLeftRadius:20,
        borderTopEndRadius:20,
        backgroundColor:'white',
        paddingVertical:10,
        paddingHorizontal:20
    },
    transactionText:{
        fontFamily: THEME_FONT_SEMIBOLD,
        fontSize: RFValue(27), 
        color: colors.black,
        marginTop:10
    },
    drawerIcon:{
        alignSelf:'flex-end',
        marginRight:10,
        marginTop:10,
        padding:5,
    },
    menuIcon:{
        fontSize:RFValue(40),
        color:'white'
    },
    modal:{
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top: Platform.OS == 'ios' ? 40 :0,
        right:0,
        backgroundColor:'white',
        paddingVertical:20,
        borderTopLeftRadius:30,
        borderBottomStartRadius: 30
    },
    settingsText:{
        fontFamily: THEME_FONT_SEMIBOLD,
        fontSize: RFValue(27), 
        color: colors.black,
        marginRight:70,
        marginLeft:20,
        marginBottom:20,
        alignSelf:'flex-start'
    },
    bankContainer:{
        backgroundColor: '#EFEFEF',
        width:'100%',
        marginBottom:10,
        paddingLeft:10,
        paddingVertical:5,
        borderTopLeftRadius:30,
        borderBottomStartRadius: 30,
        marginLeft:20,
    },
    bankText:{
        fontFamily: THEME_FONT,
        fontSize: RFValue(18), 
        color: colors.black,
        marginRight:70,
        marginLeft:20,
        alignSelf:'flex-start',
    },
    logoutContainer:{
        backgroundColor: '#F1C995',
        width:'100%',
        marginBottom:10,
        paddingLeft:10,
        paddingVertical:5,
        borderTopLeftRadius:30,
        borderBottomStartRadius: 30,
        marginLeft:20,
        marginTop:60
    },
})