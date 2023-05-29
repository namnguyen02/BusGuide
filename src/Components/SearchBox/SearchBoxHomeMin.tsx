import { View, Text ,StyleSheet, TextInput,Keyboard,Image,Dimensions,Pressable} from 'react-native'
import React from 'react'

import { Center } from 'native-base'
import * as FeatherIcon from 'react-native-feather';
import { Icon } from 'react-native-elements';
const SearchBoxHomeMin = ({setModalHistoryVisible}) => {
  return (
    <View style={styles.box}>

        <Pressable style={styles.sectionStyle}  onPress={()=>setModalHistoryVisible(true)}>
          <View style={{flex:1,justifyContent:'center'}}>
          <Icon name='location-pin' size={20} color={'white'}/>
          </View>
          <View style={{flex:5,justifyContent:'center'}}>
            <TextInput style={{color:'white'}}>Điểm đến?</TextInput>
          </View>
          <View style={{flex:1,justifyContent:'center'}}>

          </View>
          <FeatherIcon.Shuffle stroke='#fff' width={20} height={20} style={{marginHorizontal: 8}}/>
        </Pressable>



      </View>
  )
}
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles = StyleSheet.create({


  box:{
    backgroundColor:"#1A1528",
    width:windowWidth*0.9,
    height:windowHeight*0.11,
    borderRadius:30,
    justifyContent: "center",
    alignItems:'center',
    margin:10
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 0.5,
    borderColor: 'white',
    height: '55%',
    width:'90%',
    borderRadius: 15,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,



  },

})

export default SearchBoxHomeMin