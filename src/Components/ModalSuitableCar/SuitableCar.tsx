import { View, Text,StyleSheet,ScrollView, Touchable, Pressable ,Image,Dimensions} from 'react-native'
import React from 'react'
import * as icon from 'react-native-feather'
import { Icon } from 'react-native-elements';
type GreetingProps = {
  name: string;
};

const windowHeight=Dimensions.get('window').height;
const windowWidth=Dimensions.get('window').width;
const SuitableCar = ( {setModalCarInformation}) => {
  return (
    <Pressable style={styles.container}  onPress={()=>setModalCarInformation(true)}>

      <View style={styles.context}>
          <View style={styles.name}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>Tuyến số 8 </Text>
              <Text style={{color: '#9D9D9D', fontSize: 14, fontWeight: '400', marginTop: 4}}>52 phút</Text>
          </View>
          <View style={styles.posFrom}>
              <Text style={{color: '#9D9D9D', fontSize: 14, fontWeight: '400', marginBottom: 6}}>Từ trạm</Text>
              <Text style={{fontWeight:'bold'}}>Đại Học Bách Khoa</Text>
          </View>
      </View>
      <View style={styles.img}>
          <View style={styles.tutor}>
            <Image source={require('../../../assets/icons/go_to.png')} style={{width: 180}} resizeMode='stretch'></Image>
          </View>
          <View style={styles.price}>
            <View style={styles.ticket}>
            <View style={{flex:1,alignItems:'center'}}>
          <icon.Framer width={15} height={15} color={'black'}></icon.Framer>
          </View>
          <View style={{flex:4}}>
          <Text>7k VNĐ</Text>
          </View>

            </View>



            </View>
      </View>

      </Pressable>


  )
}
const styles=StyleSheet.create({
    container:{
        width:'90%',
        height:120,
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'black',
        padding: 12,
        justifyContent:'center',
        margin:10
    },
    context:{
      height:'65%',
      width:'95%',
      justifyContent:'center',
      flexDirection:'row',
      margin:3,

      flex:4
    },
    name:{
      flex:5
    },
    posFrom:{
      flex:5
    },
    img:{
      flexDirection:'row',
      width:'95%',
      height:'25%',
      margin:5,
      justifyContent:'center',
      alignItems: 'center',

      flex:3
    },
    tutor:{
      flex:3,
    },
    price:{
      flex:2,


    flexDirection:'row'
    },
    ticket:{
        width:0.3*windowWidth,
        height:0.09*windowWidth,
        borderRadius:20,
    backgroundColor:"#FFCE48",
      borderColor:'black',
      borderWidth:0.5,
      justifyContent:'center',
      alignItems:'center',flexDirection:'row'


    }
})
export default SuitableCar