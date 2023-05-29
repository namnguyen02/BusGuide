import { View, Text ,StyleSheet, ScrollView,Modal} from 'react-native'
import  {Icon}  from 'react-native-elements'
import React from 'react'
import HistoryTravel from './HistoryTravel'
import { useState } from 'react'
import { RoutePrevious } from '../RoutePrevious'


const History = ({setModalVisible, navigation}) => {

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.context}>
            <View style={style.bigContext}>
                <Text style={{fontWeight:'bold' ,fontSize:20, marginLeft: 24, marginTop: 8}}> Lịch sử</Text>
            </View>
            <View style={style.smallContext}>
            <Text style={{fontSize:15, marginLeft: 24, marginTop: 8}}> Chuyến đi gần nhất</Text>
            </View>
        </View>
        <View style={style.button}>
           <Icon name='arrow-right' color={'black'} onPress={()=>setModalVisible(true)}></Icon>


        </View>
      </View>


      <ScrollView style={style.main}  horizontal={true}  showsHorizontalScrollIndicator={false}>
        <RoutePrevious time={'13:00'} station={'Đại học Bách Khoa'} navigation={navigation}/>
        <RoutePrevious time={'13:30'} station={'KTX Khu A'} navigation={navigation}/>
        <RoutePrevious time={'14:05'} station={'KTX Khu B'} navigation={navigation}/>
        <RoutePrevious time={'15:05'} station={'Bến xe miền Đông'} navigation={navigation}/>
      </ScrollView>


    </View>
  )
}
const style=StyleSheet.create({
  container:{
    width:'100%',
    height: 300,
    backgroundColor:'#fff',

  },
  header:{
    width:'100%',
    height:'30%',
    backgroundColor:'white',
    flexDirection:'row',

  },
  context:{

    width:'90%'

  },
  bigContext:{
    flex:1,

  },
  smallContext:{
    flex:1,
    backgroundColor:'white',

  },
  button:{
    flex:1,
    backgroundColor:'white',
    textAlign:'center',
    justifyContent:'center',

  },
  main:{
    paddingHorizontal: 10, marginVertical: 12,


  }


})
export default History