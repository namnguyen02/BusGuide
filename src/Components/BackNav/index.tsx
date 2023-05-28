import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

import Feather from 'react-native-vector-icons/Feather';

const BackNav = ({navigation}) => {

  return (
    <Pressable onPress={()=>(navigation.goBack())} style={styles.container}>
      <View style={{backgroundColor: '#FFF8F0', borderRadius: 12, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
        <Feather style={{}} name="chevron-left" color='#000' size={16} />
      </View>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        zIndex: 1,
        width: 60,
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-start'

    },
})


export default BackNav;
