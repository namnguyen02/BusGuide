import { View, Text ,StyleSheet,Pressable,ScrollView, Modal} from 'react-native'
import React,{useState} from 'react'
import SuitableCar from './SuitableCar'
import  ModalCarInformation from '../ModalCarInformation/ModalCarInformation'
const ModalSuitableCar = ({setModalSuitableVisible,setModalCarInformationVisible}) => {

  return (
    <View style={{backgroundColor: '#FFCE48'}}>
      <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'bold',marginVertical:26}}>Chuyến xe phù hợp</Text>


      <ScrollView style={styles.listbox} contentContainerStyle={{  alignItems:'center' }}>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>

      </ScrollView>

      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    width:'100%',

    backgroundColor:'white',
    overflow: 'hidden',
    borderTopEndRadius:16 ,
    borderTopLeftRadius:16,
    alignContent:'center',
    alignItems:'center'
},
listbox:
{
  height:400,
  width:'100%',


}

})
export default ModalSuitableCar