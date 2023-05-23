import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import  {Icon}  from 'react-native-elements'

const HistoryTravel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.context}>
        <Text style={{fontStyle:'italic', fontSize:27,fontWeight:'bold'}}> 12:20</Text>
        <Text> Q10</Text>
        <Text style={{fontSize:10}}>Số 10, Lý Thường Kiệt</Text>
      </View>
      <View style={styles.context}>
        <Text style={{fontStyle:'italic', fontSize:27,fontWeight:'bold'}}> 12:20</Text>
        <Text> Q10</Text>
        <Text style={{fontSize:10}}>Số 10, Lý Thường Kiệt</Text>
      </View>
      <View style={styles.button}>
      <Icon name='arrow-right' color={'black'}></Icon>
    
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:300,
        height:80,
        margin:20,
        borderRadius:10,
        borderColor:'black',
        borderWidth:1,
        flexDirection:'row'

    },
    context:{
        flex:5

    },
    timeContext:{
        
    },
    locationContext:{

    },
    button:{
        flex:1,
        alignContent:'center',
        alignItems:'center'
    }

})
export default HistoryTravel