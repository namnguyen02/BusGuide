import { View, Text, StyleSheet ,Image, Pressable} from 'react-native'
import React from 'react'
import BackNav from "@/Components/BackNav";

import Feather from 'react-native-vector-icons/Feather';

const HeaderNav = ({back, navigation}) => {

  return (
    <View style={styles.container}>
      {back?<BackNav navigation={navigation}/>:''}
      {/* <Pressable onPress={()=>(navigation.goBack())} style={styles.container}>
        <View style={{backgroundColor: '#FFF8F0', borderRadius: 12, width: 30, height: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Feather style={{}} name="chevron-left" color='#000' size={16} />
        </View>
      </Pressable> */}
      <View style={styles.brandBox}>
          <Image source={require('../../../assets/brand.png')} resizeMode='center' ></Image>
      </View>

      <View style={styles.rowSpacer} />
      <Pressable onPress={()=>{navigation.navigate('Notification')}} style={styles.iconWrapper}>
        <Feather style={styles.notification} name="bell" color='#fff' size={24} />
        <View style={styles.circle}></View>
      </Pressable>

      <View style={styles.avtWrapper}>
          <Feather style={styles.notification} name="user" color='#000' size={24} />

      </View>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-start'

    },
    brandBox:{
      flex :3,
      marginRight:30,
      alignItems:'center'
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    notification: {
    },
    avtWrapper:{
      borderRadius: 9999,
      marginRight: 28,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1f1f1',

    },
    imgBrandBox:{
      height:'100%',
      width:'80%',
      backgroundColor:'black'
    },
    iconWrapper: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1528',
        borderRadius: 16,
        marginRight: 12,
    },
    circle: {
        top: -3,
        left: 24,
        position: 'absolute',
        width: 13,
        height: 13,
        borderRadius: 9999,
        backgroundColor: '#FF8811'
    }
})


export default HeaderNav;
