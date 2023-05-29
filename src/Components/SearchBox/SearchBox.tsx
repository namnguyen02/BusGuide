import { View, Text ,StyleSheet, TextInput,Keyboard,Image,Dimensions} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import * as FeatherIcon from 'react-native-feather';
const SearchBox = ({setModalHistoryVisible}) => {

  return (



      <View style={styles.box}>

        <View style={styles.sectionStyle}>
        <Icon name='location-pin' color={'white'} size={20} style={{marginHorizontal: 12}}/>
        <TextInput
            style={{flex:1, color: '#fff'}}

            placeholder="Vị trí của bạn"
            onSubmitEditing={Keyboard.dismiss}
            placeholderTextColor='white'
            cursorColor={'white'}
            onPressIn={()=>setModalHistoryVisible(true)}

          />
          <FeatherIcon.X stroke='#fff' width={20} height={20} style={{marginHorizontal: 12}}/>

        </View>

        <View style={styles.sectionStyle}>
        <FeatherIcon.Search stroke='#fff' width={20} height={20} style={{marginHorizontal: 12}}/>
          <TextInput
            style={{flex: 1, color: '#fff'}}
            placeholder="Bạn muốn đi đâu?"
            underlineColorAndroid="transparent"
            placeholderTextColor={'white'}
            onPressIn={()=>setModalHistoryVisible(true)}
          />
          <FeatherIcon.Shuffle stroke='#fff' width={20} height={20} style={{marginHorizontal: 12}}/>
        </View>

      </View>


  )
}
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles = StyleSheet.create({


  box:{
    backgroundColor:"#1A1528",
    width:windowWidth*0.9,
    height:windowHeight*0.23,
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
    height: '25%',
    width:'80%',
    borderRadius: 10,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,



  },

})
export default SearchBox