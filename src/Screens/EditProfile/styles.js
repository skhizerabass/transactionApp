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
        fontFamily: THEME_FONT_SEMIBOLD,
        fontSize:RFValue(27),
        color:colors.black,
        marginTop:20
    },
    backContainer:{
        marginTop:20,
        height:RFValue(35),
        width:RFValue(35),
        alignItems:'center',
        justifyContent:'center'
    },
    backIcon:{
        fontSize:RFValue(30),
        color:colors.black
    },
    imageContainer:{
        flex:3,
        marginTop:30,
        alignSelf:'center', 
        paddingHorizontal:10,
    },
    profileImage:{
        width: RFValue(120),
        height: RFValue(120),
        alignSelf:'center',
    },
    editIcon:{
        fontSize:RFValue(30),
        position:'absolute',
        bottom: 20,
        right:0,
    },
    midContainer:{
        flex:8,
        alignItems:'flex-start',
        marginTop:30,
    },
    heading:{
        color: '#41AD8E',
        fontSize: RFValue(15),
        fontFamily: THEME_FONT,
    },
    saveContainer:{
        position:'absolute',
        right:20,
        bottom:10,
        backgroundColor:'#66E0C7',
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:20,
    },
    saveText:{
        fontFamily:THEME_FONT,
        fontSize:RFValue(20),
        color: colors.black
    }
})