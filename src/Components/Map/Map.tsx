import { View, Text,StyleSheet } from 'react-native'
import React ,{useState} from 'react'
import MapView ,{Marker}from 'react-native-maps'


const Map = () => {

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
                initialRegion={{
                  latitude: 51.5079145,
                  longitude: -0.0899163,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                onRegionChange={x=>{ console.log(x);}
                }
                onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={region} />

        </MapView>
    </View>
  )
}
const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'40%'
      },
      map: {
        width: '100%',
        height: '100%',
      },

})

export default Map