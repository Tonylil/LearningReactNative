// this is actually 4 + 5 but with conditional rendering for the "List of saved" component and button 



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from "expo";

const MapScreen = props => {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 0.3
    }
})

export default MapScreen; 