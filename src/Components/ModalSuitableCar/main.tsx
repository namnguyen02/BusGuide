import { View, Text ,StyleSheet,Pressable,ScrollView} from 'react-native'
import React from 'react'
import SuitableCar from './SuitableCar'

const ModalSuitableCar = ({setModalSuitableVisible}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Chuyến xe phù hợp</Text>
      
      <Pressable onPress={()=>setModalSuitableVisible(false)}>
          <Text> Nhan no di</Text>
      </Pressable>
      <ScrollView style={styles.listbox} contentContainerStyle={{  alignItems:'center' }}>
          <SuitableCar></SuitableCar>
          <SuitableCar></SuitableCar>
          <SuitableCar></SuitableCar>
          <SuitableCar></SuitableCar>
      
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