import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'
import  * as FeatherIcon from 'react-native-feather'
import { Avatar, Icon } from 'react-native-elements';
// import {Notification} from '../../../assets/icons/notification.png'
const Header = () => {

  return (
    <View style={styles.container}>
      <View style={styles.brandBox}>


          <Image source={require('../../../assets/brand.png')} resizeMode='center' ></Image>


      </View>
      <View style={styles.notification}>
        <View style={{width:30,height:30,backgroundColor:'#2A2537',borderRadius:10,justifyContent:'center', alignItems:'center'}}>
        <FeatherIcon.Bell color={'white'} width={23} height={23}></FeatherIcon.Bell>
        </View>

      </View>

      <View style={styles.avt}>
      <Avatar size='medium'
        rounded
        icon={{name: 'user', type: 'font-awesome', color:'black'}}
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


      alignItems:'center',
      justifyContent:'center'


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



