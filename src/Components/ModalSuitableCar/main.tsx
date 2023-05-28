import { View, Text ,StyleSheet,Pressable,ScrollView, Modal} from 'react-native'
import React,{useState} from 'react'
import SuitableCar from './SuitableCar'
import  ModalCarInformation from '../ModalCarInformation/ModalCarInformation'
const ModalSuitableCar = ({setModalSuitableVisible,setModalCarInformationVisible}) => {
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Chuyến xe phù hợp</Text>
      
      <Pressable onPress={()=>setModalSuitableVisible(false)}>
          <Text> Nhan no di</Text>
      </Pressable>
      <ScrollView style={styles.listbox} contentContainerStyle={{  alignItems:'center' }}>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
          <SuitableCar setModalCarInformation={setModalCarInformationVisible}></SuitableCar>
      
      </ScrollView>
      
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    width:'100%', 
    
    backgroundColor:'white', 
     
    borderTopEndRadius:30 ,
    borderTopLeftRadius:30,
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