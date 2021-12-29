import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
// import Geolocation from '@react-native-community/geolocation';
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions"
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/transactions';
import { useFocusEffect } from '@react-navigation/core';
import { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const DATA = [
  {
    title: 'P.F. Chang’s',
    type: 'Restaurant',
    goodToGo: true,
    spend: '$75'
  },
  {
    title: 'DSW',
    type: 'Shoe store',
    goodToGo: false,
    spend: '$10'
  },
];

const FindAPlace = (props) => {
  const [region, setRegion] = useState('');
  const mapRef = React.createRef();
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true)
  const [marker, setMarker] = useState(null);
  const [isMapReady, setMapReady] = useState(false);


  const success = () => {
    // Alert.alert('Success', 'New envelope has been created');
    // props.navigation.goBack();
  }

  const failure = () => {
    setLoading(false);
  }

  useEffect(() => {
    handleLocationPermission()
  }, [])



  useFocusEffect(

    React.useCallback(() => {
      if(position)
      props.getLocations({
        lat: position.latitude.toString(),
        long: position.longitude.toString(),
        success,
        failure
      })
    }, [])
  );

  const getLocation =()=>{
    Geolocation.getCurrentPosition(
      (pos) => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
  
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
        console.log('TEST',crd);
        if(position=== null){
  
          props.getLocations({
            lat: crd.latitude.toString(),
            long: crd.longitude.toString(),
            success,
            failure
          })
        }      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }

  const handleLocationPermission = async () => {
    let permissionCheck = ""
    if (Platform.OS === "ios") {
      permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        )
        permissionRequest === RESULTS.GRANTED
          ? getLocation()
          : Alert.alert("Info!","Please provide location permission to find places near you");
      }else{
        getLocation();
      }
    }

    if (Platform.OS === "android") {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      if (permissionCheck === RESULTS.DENIED) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        )
        permissionRequest === RESULTS.GRANTED
        ? getLocation()
        : Alert.alert("Info!","Please provide location permission to find places near you");
      }else{
        getLocation();
      }
    }
  }

  const onRegionChange = (region) => {
    setRegion(region);
  }
  
  const changeRegion = (region) => {
    const latitude = region.geometry.location.lat;
    const longitude = region.geometry.location.lng;
    setPosition({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    });
  }
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listStyle}
      onPress={() => {
        setMarker(item);
        changeRegion(item)
        // setPosition({
        //   ...position
        // })
      }}
    >
      <View style={styles.cardIcon}>
        <Image
          resizeMode={'contain'}
          style={styles.cardImage}
          source={{ uri: item.icon }}
          height={30}
          width={30}
        />
      </View>
      <LinearGradient colors={["#41AD8E", "#66E0C7"]}
        start={{ x: 0.0, y: 1.6 }} end={{ x: 0.9, y: 1.5 }}
        style={styles.card}>
        <View>
          <Text numberOfLines={1} style={[styles.title, { marginRight: 20 }]}>{item.name}</Text>
          <Text numberOfLines={1} style={styles.type}>{item.types[0]}</Text>
          <View style={styles.spendContainer}>
            <Text style={styles.spendText}> {"you can spend"}</Text>
            <Text style={styles.spendAmount}>{'$100'}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={isMapReady?styles.map:{}}
          region={position}
          ref={mapRef}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onMapReady={()=>{
            setMapReady(true);
          }}
        
                  // onRegionChange={onRegionChange}
        >
          {marker ?
            <Marker
              coordinate={{
                latitude: marker.geometry.location.lat,
                longitude: marker.geometry.location.lng
              }}
              // title={marker.name}
              description={marker.name}

            /> : null
          }
        </MapView>
    
      <View style={styles.listContainer}>
        <FlatList
          horizontal={true}
          style={{ flex: 1 }}
          data={props.places}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  places: state.transaction.places,
  envelopes: state.envelope.envelopes,
  essentials: state.envelope.essentials
});

const mapDispatchToProps = dispatch => ({
  getLocations: (payload) => dispatch(actionCreators.getLocations(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindAPlace);
