import { View, Text ,StyleSheet,Image} from 'react-native'

import React from 'react'
import { Icon } from 'react-native-elements'
const Position = ({Img}) => {
  return (
    <View style={styles.container}>
      <View style={styles.positionImg}>
        <Image source={Img}/> 
      </View>
      <View style={styles.positionContext}>
            <Text style={{fontSize:17, fontWeight:'bold'}}> 268 Tạ Quang Bửu,Q.10</Text>
            <View style={{flexDirection:'row'}}>
                <Icon name='home'></Icon>
                <Text>Tạ Quang Bửu,Thủ Đức</Text>
            </View>
            
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'90%',height:60 ,flexDirection:'row', 
        borderRadius:20,
        borderColor:'black',
        borderWidth:1,
        margin:10
        
    },
    positionImg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    positionContext:{
        flex:5,
    }
})
export default Position