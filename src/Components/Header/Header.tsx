import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'
import Brand from '../../../assets/brand.png'

import { Avatar, Icon } from 'react-native-elements';
import {Notification} from '../../../assets/icons/notification.png'
const Header = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.brandBox}>

        
          <Image source={Brand} resizeMode='center' ></Image>
        
        
      </View>
      <View style={styles.notification}>
        <Icon name='home' color={'white'}></Icon>
      </View> 

      <View style={styles.avt}>
      <Avatar size='medium'
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
      />
        
      </View>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
      
        
        width:'100%',
        height:'50%',
        flexDirection:'row',
        alignItems:'center'
      
    },
    brandBox:{
      
      
      flex :3,
      marginRight:30,
     
      alignItems:'center'
      
    },
   
    notification:
    {
      
      flex:1,
      
      
    },
    avt:{

      flex:1,
      
    },
    imgBrandBox:{
      height:'100%',
      width:'80%',
      backgroundColor:'black'

    }
})
export default Header



