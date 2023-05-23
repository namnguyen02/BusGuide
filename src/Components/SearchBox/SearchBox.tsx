import { View, Text ,StyleSheet, TextInput,Keyboard,Image,Dimensions} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const SearchBox = () => {
  
  return (
    

    
      <View style={styles.box}>
      
        <View style={styles.sectionStyle}>
        <Icon name='search'color={'white'}/>
        <TextInput
            style={{flex:1}}
          
            placeholder="Vị trí của bạn"
            onSubmitEditing={Keyboard.dismiss}
            placeholderTextColor='white'
            cursorColor={'white'}
            
          />
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }}
            style={styles.imageStyle}
          />

        </View>
            
        <View style={styles.sectionStyle}>
        <Icon name='location-pin' color={'white'}/>
          <TextInput
            style={{flex: 1}}
            placeholder="Bạn muốn đi đâu?"
            underlineColorAndroid="transparent"
            placeholderTextColor={'white'}
          />
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