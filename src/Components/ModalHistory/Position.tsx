import { View, Text ,StyleSheet,Image,Pressable} from 'react-native'

import React from 'react'
import * as icon  from 'react-native-feather'
const Position = ({Img,setModalVisible,setSuitableVisible,setIsMapFull}) => {
  return (
    <Pressable  onPress={()=>{

      setModalVisible(false); //tat history modal
    setSuitableVisible(true);  //hien cac chuyen xe phu hop
    setIsMapFull(false); //tắt map full màn hình
    console.log('nhan');
    }} style={styles.container}>
      <View style={styles.positionImg}>
        <Image source={Img}/>
      </View>
      <View style={styles.positionContext}>
            <Text style={{fontSize:17, fontWeight:'bold'}}> 268 Tạ Quang Bửu, Q.10</Text>
            <View style={{flexDirection:'row'}}>
                <icon.CornerDownRight height={15} width={15} color={'black'}></icon.CornerDownRight>
                <Text>Tạ Quang Bửu, Thủ Đức</Text>
            </View>

      </View>
    </Pressable>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'90%',height:60 ,flexDirection:'row',
        borderRadius:16,
        // borderColor:'black',
        // borderWidth:1,
        margin:10,

        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

    },
    positionImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    positionContext:{
        flex:5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 6
    }
})
export default Position