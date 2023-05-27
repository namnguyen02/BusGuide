import { View, Text ,Dimensions,StyleSheet,ScrollView,Pressable} from 'react-native'
import React from 'react'
import * as icon from 'react-native-feather'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Step from './Step';
import { ChevronUp } from 'react-native-feather';

const countries = [
  'Vé thường',
  'Vé sinh viên',
  'Vé trẻ em',
  
 
];


const ModalTutorHeader= ({setModalTutorVisible,setModalHeaderTutorVisible}) => {
  return (
    <View style={styles.constainer}>
    <ChevronUp color={'black'} width={windowWidth*0.13} height={windowWidth*0.13} 
          onPress={()=>{setModalTutorVisible(true); setModalHeaderTutorVisible(false);}
          }></ChevronUp>
    <Text style={{fontSize:18, fontWeight:'bold'}}> Chi tiết chuyến đi</Text>
    
    
    
    
  </View>
  )
}
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create({
  constainer:{
      marginTop:0.8*windowHeight,
      height:0.2*windowHeight,
      width:windowWidth,
      backgroundColor:'white',
      borderTopEndRadius:30,
      borderTopLeftRadius:30,
      alignItems:'center',
      

  },
  
  
  

})

export default ModalTutorHeader
