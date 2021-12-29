import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, View, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { VictoryPie } from "victory-native";
import { THEME_FONT } from '../../Sdk/fonts';
import CustomEnvelope from '../../Components/Envelope';
import CreditCard from '../../Components/CreditCard';
import CustomEssentails from '../../Components/Essentials';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/user';
import { useFocusEffect } from '@react-navigation/native';
import Navigation from '../../services/Navigation';
import { Icon } from 'native-base';

const Home = props => {
  // console.log(props.user)
  const [essSum, setEssSum] = useState(0);
  const [envMax, setMaxEnv] = useState(0);
  const [env, setEnv] = useState(null);
  const [data, setData] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      props.summary({ id: props.user.id });
    }, [])
  );

  useEffect(() => {
    let essAmount = 0;
    let max = 0;
    let env = null;
    props.envelopes.forEach(item => {
      if (item.type === "F") {
        essAmount += Number(item.maxAmount);
      } else if (!item.miscellaneous && item.name !== 'essentials') {
        if (max < Number(item.maxAmount)) {
          max = Number(item.maxAmount)
          env = item;
        }
      } else if (item.miscellaneous) {
      }

    });
    setEssSum((essAmount / props.user.budget).toFixed(2));
    // setMaxEnv(max);
    if (env !== null) {
      setEnv(env);
    }
    const misc = 100 - ((essAmount / props.user.budget) + max);
    const data = [];
    const essFinal = (essAmount / props.user.budget);
    data.push({ x: essFinal.toFixed(0) + " % \nessentials", y: essFinal })
    if (env !== null) {
      data.push({ x: env.maxAmount + " % \n " + env.name, y: Number(env.maxAmount) })
    }
    data.push({ x: misc.toFixed(0) + " % \nmiscellaneous", y: misc })
    setData(data);
  }, [props.envelopes])


  const renderSpending = ({ item, index }) => {
    // console.log(item);
    return (
      !item.miscellaneous && item.name !== 'essentials' && item.type === "P" &&

      <View style={styles.listStyle}>
        <CustomEnvelope
          details={item}
          onPress={() => Navigation.navigate('OpenSpending', {
            item
          })}
          addPress={() => props.navigation.navigate('NewEnvelope')}
          add={index === props.envelopes.length}
        />
      </View>
    )
  }

  const renderEssentials = ({ item, index }) => {
    return (
      item.type === "F" &&

      <View style={styles.listStyle}>
        <CustomEssentails
          index={index}
          category={item.name}
          balance={item.maxAmount}
          details={item}
          onPress={() => Navigation.navigate('Essentials', {
            item
          })}
          addPress={() => props.navigation.navigate('NewEssentials')}
          add={index === 1000}

        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground style={styles.homeBg} source={require('../../../assets/Images/homeBg1.png')}>
          <View style={styles.topView}>
            <Text style={styles.helloText}>Hello,</Text>
            <Text style={styles.nameText}>{props.user.firstName}</Text>
            <CreditCard green balance={`$ ${props.user.budget}`} bankName={'BANK NAME'} />
          </View>
        </ImageBackground>
        <ImageBackground style={[styles.homeBg2,{paddingVertical:10}]} source={require('../../../assets/Images/homeBg2.png')}>
          <ImageBackground style={[styles.shadowContainer,{paddingVertical:10}]} source={require('../../../assets/Images/shadowCard.png')}>
            <View style={styles.pieContainer}>
              <VictoryPie
                colorScale={["#FB9E9E", "#F6B560", '#66E0C7']}
                cornerRadius={5}
                innerRadius={60}
                height={350}
                data={data}
                labelRadius={({ innerRadius }) => innerRadius + 15}
                style={{
                  labels: {
                    fontSize: 14, fill: "#000000", fontFamily: THEME_FONT, textAlign: 'center'
                  }
                }}
              />
            </View>
          </ImageBackground>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity opacity={0.9} style={styles.transactionTab} onPress={() => {
              Navigation.navigate("Uncategorized");
            }}>
              <View style={[styles.addIcon, { backgroundColor: '#F6B560' }]} >
                <Icon style={{ color: 'white', fontSize: 35 }} name='question' type='AntDesign' />
              </View>
              <View>
                <Text style={styles.transactionTabText}>uncategorized</Text>
                <Text style={[styles.transactionTabSubText, { color: '#F6B560' }]}>help us sort transactions</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity opacity={0.9} onPress={() => Navigation.navigate('AddTransactions')} style={styles.transactionTab}>
              <View style={[styles.addIcon, { backgroundColor: '#5CB89E' }]} >
                <Icon style={{ color: 'white', fontSize: 35 }} type='Ionicons' name='add-outline' />
              </View>
              <View>
                <Text style={styles.transactionTabText}>add transaction</Text>
                <Text style={[styles.transactionTabSubText, { color: '#5CB89E' }]}>did we miss something?</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.headings}>Spending</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ marginVertical: 20 }}
            data={props.envelopes.concat([{ type: 'P' }])}
            renderItem={renderSpending}
            keyExtractor={item => item.id}
          />
        </ImageBackground>
        <LinearGradient colors={["#F4D1A2", "#F6F6F6"]}
          start={{ x: 0.0, y: 1.6 }} end={{ x: 0.9, y: 1.5 }}
          style={styles.bottomView} opacity={0.9} >
          <Text style={styles.headings}>Essentials</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{ marginVertical: 20 }}
            data={props.envelopes}
            renderItem={renderEssentials}
            keyExtractor={item => item.id}
          />
        </LinearGradient>

      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  all: state.transaction.all,
  envelopes: state.envelope.envelopes,
  essentials: state.envelope.essentials


});

const mapDispatchToProps = dispatch => ({
  summary: (payload) => dispatch(actionCreators.summary(payload))
  // saveToken: () => dispatch(saveToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
