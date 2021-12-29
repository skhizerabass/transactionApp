import React from 'react';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import Profile from './src/Screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FindAPlace from './src/Screens/FindAPlace';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'native-base';
import { Image } from 'react-native';
import Onboarding from './src/Screens/Overboard';
import Signup from 'src/Screens/Signup';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signin from 'src/Screens/Signin'
import { Provider, useSelector } from 'react-redux';
import store from 'src/redux';
import Setup from './src/Screens/Setup';
import SetupStep2 from './src/Screens/Setup/step2';
import SetupStep3 from './src/Screens/Setup/step3';
import SetupStep4 from './src/Screens/Setup/step4';
import LinearGradient from 'react-native-linear-gradient';
import MyBank from './src/Screens/MyBank';
import EditProfile from './src/Screens/EditProfile';
import Essentials from './src/Screens/Essentails';
import Spendings from './src/Screens/Spendings';
import NewEnvelope from './src/Screens/NewEnvelope';
import OpenSpending from './src/Screens/OpenSpending';
import Plaid from './src/Screens/Plaid';
import MyIncome from './src/Screens/MyIncome';
import Navigation from './src/services/Navigation';
import NewEssentials from './src/Screens/NewEssentials';
import Step3_1 from './src/Screens/Setup/Step3_1';
import AddTransactions from './src/Screens/AddTransactions';
import Uncategorized from './src/Screens/Uncategorized';
import OpenFeedback from './src/Screens/OpenFeedback';

const StackNav = createNativeStackNavigator();

const BottomTab = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator activeColor={'black'}
      inactiveColor="grey"

      barStyle={{ backgroundColor: 'white', height: 80 }}
      labeled={false}

      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        showLabel: false,
        style: {
          borderTopWidth: 1,
          paddingTop: 10
        }
      }}

    >
      <Tab.Screen name='EBooks' component={FindAPlace} options={{
        tabBarLabel: 'E-Books',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <Icon type='Feather' name="map-pin" color={color} size={40} />
        ),
      }} />
      <Tab.Screen name='HomeScreen' component={Home} options={{
        tabBarLabel: 'HomeScreen',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('HomeScreen')
          }} style={{
            width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 80 / 2, backgroundColor: 'white', elevation: 10, bottom: 20, borderWidth: 1
          }}>
            <Image
              source={require('./assets/Images/tower.png')}
              style={{
                width: 80,
                height: 80
              }}
            />
          </TouchableOpacity>
        ),
      }} />
      <Tab.Screen name='Web' component={Profile} options={{
        tabBarLabel: 'Web',
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user" color={color} size={40} />
        ),
      }} />

    </Tab.Navigator>
  )
}

const SplashNavigator = () => {
  return (
    <StackNav.Navigator screenOptions={{
      headerShown: false
    }}>
      <StackNav.Screen name='splash' component={Splash} />
    </StackNav.Navigator>
  );
};

// const AuthScreens = () => {
//   return (
//     <StackNav.Navigator screenOptions={{
//       headerShown: false
//     }}>
//       <StackNav.Screen name='signin' component={Signin} />
//       <StackNav.Screen name='signup' component={Signup} />
//     </StackNav.Navigator>
//   )
// }

const StackScreens = () => {
  return (
    <StackNav.Navigator screenOptions={{
      headerShown: false
    }}>
      <StackNav.Screen name='Bottom' component={BottomTab} />
      {/* <StackNav.Screen name='AreYouHere' component={AreYouHere} /> */}
      <StackNav.Screen name='NewEnvelope' component={NewEnvelope} />
      <StackNav.Screen name='EnvelopeDetail' component={EnvelopeDetail} />

    </StackNav.Navigator>
  )
}

App = (props) => {
  const loading = useSelector((state) => state.user.loading);
  const authentication = useSelector((state) => state.user.authentication);
  const user = useSelector((state) => state.user);
  console.log("USER", user);

  const BottomTab = (props) => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        labeled={false}
        tabBarOptions={{
          showLabel: false,
          style: {
            borderTopWidth: 1,
            paddingTop: 10
          }
        }}
      >
        <Tab.Screen name='EBooks' component={FindAPlace} options={{
          tabBarLabel: 'E-Books',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <LinearGradient
              colors={focused ? ["#DE3531", "#F6B560"] : ['white', 'white']}
              style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 50 / 2 }}
              start={{ x: 0.0, y: 1.4 }} end={{ x: 0.9, y: 1.5 }}
            >
              <Icon type="Feather" name="map-pin" color={color} size={40} />
            </LinearGradient>
          ),
        }} />
        <Tab.Screen name='HomeScreen' component={Home} options={{
          tabBarLabel: 'HomeScreen',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <LinearGradient
              colors={focused ? ["#DE3531", "#F6B560"] : ['white', 'white']}
              style={{ height: 60, width: 60, borderRadius: 60 / 2, alignItems: 'center', justifyContent: 'center' }}
              start={{ x: 0.0, y: 1.4 }} end={{ x: 0.9, y: 1.5 }}
            >
              <Image style={{ height: 50, width: 40 }} source={require('./assets/Images/tower.png')} />
              {/* <Icon type="FontAwesome" name="building" color={color} size={40} /> */}
            </LinearGradient>
          ),
        }} />
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <LinearGradient
              colors={focused ? ["#DE3531", "#F6B560"] : ['white', 'white']}
              style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 50 / 2 }}
              start={{ x: 0.0, y: 1.4 }} end={{ x: 0.9, y: 1.5 }}
            >
              <Icon type="FontAwesome" name="user-o" color={color} size={40} />
            </LinearGradient>
          ),
        }} />

      </Tab.Navigator>
    )
  }

  const AuthScreens = () => {
    // const StackNav = createStackNavigator();
    // console.log(authentication);

    return (
      <StackNav.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false
      }}>
        <StackNav.Screen name='Onboarding' component={Onboarding} />
        <StackNav.Screen name='signin' component={Signin} />
        <StackNav.Screen name='signup' component={Signup} />
      </StackNav.Navigator>
    )
  }

  const StackScreens = () => {
    const StackNav = createStackNavigator();
    return (
      <StackNav.Navigator screenOptions={{
        headerShown: false
      }}>
        <StackNav.Screen name='Bottom' component={BottomTab} />
        <StackNav.Screen name='MyBank' component={MyBank} />
        <StackNav.Screen name='MyIncome' component={MyIncome} />

        <StackNav.Screen name='EditProfile' component={EditProfile} />
        <StackNav.Screen name='Essentials' component={Essentials} />
        <StackNav.Screen name='Spendings' component={Spendings} />
        <StackNav.Screen name='NewEnvelope' component={NewEnvelope} />
        <StackNav.Screen name='NewEssentials' component={NewEssentials} />
        <StackNav.Screen name='AddTransactions' component={AddTransactions} />
        <StackNav.Screen name='Uncategorized' component={Uncategorized} />
        <StackNav.Screen name='OpenSpending' component={OpenSpending} />
        <StackNav.Screen name='OpenFeedback' component={OpenFeedback} />
      </StackNav.Navigator>
    )
  }
  const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    return (
      <Drawer.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen
          options={{
            swipeEnabled: false,
          }}
          name='Main' component={StackScreens}
        />
      </Drawer.Navigator>
    )
  }
  // const MainNavigator = () => {
  //   const StackNav = createStackNavigator();
  //   return (
  //     <StackNav.Navigator screenOptions={{
  //       headerShown: false,
  //       gestureEnabled: false
  //     }}>
  //       <StackNav.Screen name='Auth' component={AuthScreens} />
  //       <StackNav.Screen name='Drawer' component={DrawerNavigator} />

  //     </StackNav.Navigator>
  //   )
  // }
  const PlaidNavigator = () => {
    return (
      <StackNav.Navigator screenOptions={{
        headerShown: false
      }}>
        <StackNav.Screen name='Plaid' component={Plaid} />

      </StackNav.Navigator>
    )
  }

  const OnboardingNavigator = () => {
    return (
      <StackNav.Navigator screenOptions={{
        headerShown: false
      }}>

        <StackNav.Screen name='setup' component={Setup} />
        <StackNav.Screen name='setup2' component={SetupStep2} />
        <StackNav.Screen name='setup3' component={SetupStep3} />

        <StackNav.Screen name='setup3_1' component={Step3_1} />
        <StackNav.Screen name='setup4' component={SetupStep4} />



      </StackNav.Navigator>
    )
  }

  let CurrentNavigator = SplashNavigator();
  if (!loading) {
    if (!authentication) {
      CurrentNavigator = AuthScreens();
    } else {
      if (user.onboarding) {
        CurrentNavigator = OnboardingNavigator();
      }
      else if (user.plaidToken) {
        CurrentNavigator = StackScreens();
      } else {
        CurrentNavigator = PlaidNavigator();
      }
    }
  }

  return (
    <NavigationContainer ref={Navigation.navigationRef}>
      {CurrentNavigator}
    </NavigationContainer>
  )
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper;
