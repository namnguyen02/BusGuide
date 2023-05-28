import { View, Text,StyleSheet,ScrollView, Touchable, Pressable } from 'react-native'
import React from 'react'

type GreetingProps = {
  name: string;
};


const SuitableCar = ( {setModalCarInformation}) => {
  return (
    <Pressable style={styles.container}  onPress={()=>setModalCarInformation(true)}>
      
      <View style={styles.context}>
          <View style={styles.name}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Tuyến số 8 </Text>
              <Text>52 phút</Text>
          </View>
          <View style={styles.posFrom}> 
              <Text>Từ trạm</Text>
              <Text style={{fontWeight:'bold'}}>Đại Học Bách Khoa</Text>
          </View>
      </View>
      <View style={styles.img}>
          <View style={styles.tutor}>
            <Text> img img img</Text>
          </View>
          <View style={styles.price}> 
            <Text>7k VNĐ</Text></View>
      </View>
      
      </Pressable>
      
    
  )
}
const styles=StyleSheet.create({
    container:{
        width:'90%',
        height:120,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'black',
        
        justifyContent:'center',
        margin:10
    },
    context:{
      height:'65%',
      width:'95%',
      justifyContent:'center',
      flexDirection:'row',
      margin:5
    },
    name:{
      flex:5
    },
    posFrom:{
      flex:5
    },
    img:{
      flexDirection:'row',
      width:'95%',
      height:'25%',
      margin:5
    },
    tutor:{
      flex:9,
    },
    price:{
      flex:5,
      borderRadius:20,
      backgroundColor:'yellow',
      borderColor:'black',
      borderWidth:0.5,
      alignItems:'center'
    }
})
export default SuitableCar