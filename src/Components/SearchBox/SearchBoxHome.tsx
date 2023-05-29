import { View, Text ,StyleSheet, TextInput,Keyboard,Image,Dimensions,Pressable} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import * as FeatherIcon from 'react-native-feather';

const SearchBoxHome = ({setModalHistoryVisible}) => {
  return (
    <View style={styles.box}>

      <Pressable style={styles.sectionStyle}  onPress={()=>setModalHistoryVisible(true)}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <FeatherIcon.ArrowDownCircle stroke='#fff' width={20} height={20}/>
            </View>
            <View style={{flex:5,justifyContent:'center'}}>
                <TextInput style={{color:'white'}}>268, Lý Thường Kiệt, Quận 10</TextInput>
            </View>
            <FeatherIcon.X stroke='#fff' width={20} height={20} style={{marginHorizontal: 8}}/>

        </Pressable>

        <Pressable style={styles.sectionStyle}  onPress={()=>setModalHistoryVisible(true)}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <FeatherIcon.Search stroke='#fff' width={20} height={20}/>
                </View>
                <View style={{flex:5,justifyContent:'center'}}>
                    <TextInput style={{color:'white'}}>Điểm đến</TextInput>
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
    width:'90%',
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

export default SearchBoxHome