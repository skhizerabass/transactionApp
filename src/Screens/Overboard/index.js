import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Icon } from 'native-base';
const { width, height } = Dimensions.get('screen');

const renderScreenOne = () => {
  return (
    <View style={styles.slide1}>
      <ImageBackground
        source={require('../../../assets/Images/screen1bg.png')}
        style={styles.bgImage}
      >
        <View style={styles.screenOneContainer}>
          <Image
            source={require('../../../assets/Images/swally.png')}
            style={styles.screenOneImage}
          />

        </View>
      </ImageBackground>
    </View>
  )
}

const renderScreenTwo = () => {
  return (
    <View style={styles.slide1}>
      <ImageBackground
        source={require('../../../assets/Images/screen2bg.png')}
        style={styles.bgImage}
      >
        <View style={{ flex: 1, paddingHorizontal: 30 }}>
          <Text style={styles.topText}>Instantly divide paychecks into spending categories</Text>

          <LinearGradient colors={['#C4C4C4', '#FFFFFF']} style={styles.screenTwoGradient}>
            <View style={styles.screeTwoTop}>
              <Text style={styles.bankAccount}>BANK ACCOUNT</Text>
              <Text style={styles.bankAccount}>Now</Text>
            </View>
            <Text style={styles.bankBottomText}>You just received a deposit of $1000</Text>
          </LinearGradient>

          <View style={{ flex: 1 }}>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}


const renderScreenThree = () => {
  return (
    <View style={styles.slide1}>
      <ImageBackground
        source={require('../../../assets/Images/screen3bg.png')}
        style={styles.bgImage}
      >
        <View style={{ flex: 1, paddingHorizontal: 30, marginTop: 40 }}>
          <Text style={styles.topText}>Know how much to spend before you pay</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const renderScreenFour = (props) => {
  return (
    <View style={styles.slide1}>
      <ImageBackground
        source={require('../../../assets/Images/screen4bg.png')}
        style={styles.bgImage}
      >
        <View style={{ flex: 1, paddingHorizontal: 30, marginTop: 40 }}>
          <Text style={styles.topText}>Stay on budget, watch your SwallyScore rise</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('signup')}
          style={styles.iconContainer}>
          <Icon type='FontAwesome' name='angle-right' style={styles.iconStyle} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const Onboarding = props => {
  const [showModal, setshowModal] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Swiper
        style={styles.wrapper}
        dotStyle={{ width: 10, height: 10, borderRadius: 10 / 2 }}
        activeDotStyle={{ width: 10, height: 10, borderRadius: 10 / 2 }}
        loop={false}
        activeDotColor="#66E0C7"
        scrollEnabled={true}
        nextButton={() => this.renderNext()}
        removeClippedSubviews={false}
        dotColor="#000000">
        {renderScreenOne(props)}
        {renderScreenTwo(props)}
        {renderScreenThree(props)}
        {renderScreenFour(props)}
      </Swiper>
    </SafeAreaView>


  );
};

export default Onboarding;
