import { View, Text ,StyleSheet, Pressable, Alert} from 'react-native'
import React from 'react'

const ButtonConfirm = ({setModalVisible,setSuitableVisible,setIsMapFull}) => {
  return (
    <Pressable style={styles.container}
        onPress={()=>{setModalVisible(false); //tat history modal
                setSuitableVisible(true);  //hien cac chuyen xe phu hop
                setIsMapFull(false); //tắt map full màn hình
                console.log('nhan');
                }}>
      <Text style={{color:'white', fontSize: 14, fontWeight: '700'}}>Xác Nhận</Text>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        height:60,
        width:'90%',
        backgroundColor:"#1A1528",
        borderRadius:16,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 16,
    }
})

export default ButtonConfirm