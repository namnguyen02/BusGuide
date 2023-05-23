import { View, Text ,StyleSheet, ScrollView,Modal} from 'react-native'
import  {Icon}  from 'react-native-elements'
import React from 'react'
import HistoryTravel from './HistoryTravel'
import { useState } from 'react'


const History = ({setModalVisible}) => {
  
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.context}>
            <View style={style.bigContext}>
                <Text style={{fontWeight:'bold' ,fontSize:20}}> Lịch sử</Text>
            </View>
            <View style={style.smallContext}>
            <Text style={{fontSize:15}}> Chuyến đi gần nhất</Text>
            </View>
        </View>
        <View style={style.button}>
           <Icon name='arrow-right' color={'black'} onPress={()=>setModalVisible(true)}></Icon>
    
  
        </View>
      </View>


      <ScrollView style={style.main}  horizontal={true}> 
          <HistoryTravel></HistoryTravel>
          <HistoryTravel></HistoryTravel>
          <HistoryTravel></HistoryTravel>
      </ScrollView>
      
      
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    width:'100%',
    height:'30%',
    backgroundColor:'white',
    
  },
  header:{
    width:'100%',
    height:'40%',
    backgroundColor:'white',
    flexDirection:'row'

  },
  context:{
    flex:5
  },
  bigContext:{
    flex:1,

  },
  smallContext:{
    flex:1,
    backgroundColor:'white'
  },
  button:{
    flex:1,
    backgroundColor:'white',
    textAlign:'center',
    justifyContent:'center'
  },
  main:{
    height:'70%',
   
    
  }

  
})
export default History