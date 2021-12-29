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
    },
    topText:{
        fontFamily:THEME_FONT_SEMIBOLD,
        fontSize:RFValue(27),
        color: colors.black
    },
    subText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(12),
        color: '#5CB89E'
    },
    cardContainer:{
        paddingHorizontal:20,
        paddingVertical:15,
        backgroundColor:'#EFEFEF',
        borderRadius:20,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        elevation:10
    },
    nameText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(15),
        color: colors.black
    },
    dateText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(12),
        color: colors.black
    },
    spendingText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(17),
        color: '#41AD8E'
    },
    subCard:{
        paddingHorizontal:20,
        paddingVertical:15,
        marginHorizontal:20,
        backgroundColor:'#F6F5F5',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:10
    },
    subCard2:{
        paddingHorizontal:20,
        paddingVertical:15,
        marginHorizontal:30,
        backgroundColor:'#FBF9F9',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        elevation:10
    },
    midContainer:{
        marginTop:20,
    },
    midTopText:{
        fontSize:RFValue(23),
        fontFamily:THEME_FONT_SEMIBOLD,
        color: '#5CB89E'
    },
    listView:{
        marginTop:10,
        paddingHorizontal:5
    },
    saveContainer:{
        marginTop:40,
        alignSelf:'center',
        backgroundColor:'#F6B560',
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:20,
    },
    saveText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(20),
        color: colors.black
    },
    footer:{
        marginTop:10,
        marginHorizontal:5,
        backgroundColor:'#EFEFEF',
        height:RFValue(95),
        width:RFValue(95),
        borderRadius:20
    },
    addContainer: {
        position: 'absolute',
        left: 2,
        bottom: 2,
        zIndex: 1,
        width: RFValue(25),
        height: RFValue(25),
        borderRadius: RFValue(45 / 2),
        backgroundColor: '#F6B560',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: {
        fontSize: RFValue(25),
        color: 'white'
    },
})