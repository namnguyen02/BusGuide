import { View, Text ,StyleSheet,Dimensions,Pressable} from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
const NextTravel = ({setModalTutorVisible,
  setModalCarInformationVisible,
  setIsMapFull
            }) => {
  return (
    <Pressable style={styles.cotainer} onPress={()=>{setModalTutorVisible(true)
      setIsMapFull(true); setModalCarInformationVisible(false);
                                                      }
                                                    }>
      <View style={styles.time}>
            <Text style={{fontSize:18 ,fontWeight:'bold'}}>14:05</Text>
            <Text >10 phút</Text>
      </View>
      <View style={styles.busStop}>
            <Text  style={{color: '#9D9D9D', fontWeight: '700', fontSize: 14}}>Trạm dừng</Text>
            <Text style={{fontSize:18 ,fontWeight:'bold'}}>Đại học Bách Khoa</Text>

      </View>
      <View style={styles.arrow}>
            <Icon name='arrow-right'></Icon>
      </View>
    </Pressable>
  )
}
const windowWidth=Dimensions.get('window').height;
const styles=StyleSheet.create({
    cotainer:{
        width:'90%',
        height:0.1*windowWidth,
        borderRadius:20,
        borderColor:'black',
        borderWidth:0.5,
        margin:windowWidth*0.01,
        flexDirection:'row'
    },
    time:{
            flex:2,
            alignItems:'center',
            justifyContent:'center'
    },
    busStop:{
        flex:5,

            justifyContent:'center'
    },
    arrow:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
    }
})
export default NextTravel