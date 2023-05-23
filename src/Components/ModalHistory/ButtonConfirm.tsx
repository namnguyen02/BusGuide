import { View, Text ,StyleSheet, Pressable, Alert} from 'react-native'
import React from 'react'

const ButtonConfirm = ({setModalVisible,setModalSuitableVisible}) => {
  return (
    <Pressable style={styles.container} 
        onPress={()=>{setModalVisible(false) //tat history modal
                setModalSuitableVisible(true)  //hien cac chuyen xe phu hop
                }}>
      <Text style={{color:'white'}}>Xác Nhận</Text>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        height:60,
        width:'90%',
        backgroundColor:"#1A1528",
        borderRadius:30,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ButtonConfirm