import { View, Text,StyleSheet, Pressable } from 'react-native'
import React ,{useState} from 'react'
import MapView ,{Marker,Polygon}from 'react-native-maps'
// import MapViewDirections from 'react-native-maps-directions';

const Map = ({setIsMapFull}) => {

  const [region, setRegion] = useState({
    latitude: 37.3318456, longitude: -122.0296002,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [des, setDes] = useState({
    latitude: 51.0079145,
    longitude: -0.0899173,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

  return (
    <Pressable style={styles.container} onPress={()=>setIsMapFull(true)}>
      <MapView style={styles.map}
                initialRegion={region}

      >
        {/* <Marker coordinate={origin} />
        <Marker coordinate={destination} />

        <Polygon
        coordinates={[origin,destination]}
        strokeColor='black'
        strokeWidth={3}
        /> */}

        </MapView>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container: {
        width:'100%',
        height: '30%',
      },
      map: {
        width: '100%',
        height: '100%',
      },

})

export default Map