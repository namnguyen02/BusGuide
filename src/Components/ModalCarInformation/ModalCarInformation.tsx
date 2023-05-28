import { View, Text ,StyleSheet,Dimensions,Image,ScrollView} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import NextTravel from './NextTravel'
const ModalCarInformation = ({setModalTutorVisible,
  setModalCarInformationVisible,
  setIsMapFull
            }) => {
  return (
    <View style={styles.constainer}>
      <Text style={{fontSize:20,fontWeight:'bold' , margin:24}}>Thông tin chuyến xe</Text>
      <View style={styles.box}>
          <View style={{flex:5,
                     flexDirection:'row'
                    }}>
                  <View style={styles.box_top_img}>
                      <Image source={require('../../../assets/icons/IconBus.png')}></Image>
                  </View>
                  <View style={styles.box_top_name}>
                     <Text style={{fontSize:50,color:'white',fontWeight:'bold'}}>08</Text>
                  </View>
                  <View style={[styles.box_top_km]}>
                      <View style={[styles.moreinfomation_item,{width:windowWidth*0.25, marginRight: 24}]}>
                      <Text>
                        30 km
                      </Text>
                      <Icon name='home' style={{paddingHorizontal:4}} size={20}></Icon>
                      </View>

                  </View>
          </View>
          <View style={{flex:2,
                        alignItems:'center',
                        alignContent:'flex-end',
                        justifyContent:'center',
                        flexDirection:'row',
                        }}>
                          <View style={[styles.moreinfomation_item,{width:windowWidth*0.25,
                                                                        marginLeft:windowWidth*0.2,
                                                                        marginRight:windowWidth*0.03,


                                                                        }]}>
                            <Icon name='wifi' style={{paddingHorizontal:4}} size={20}></Icon>
                            <Text>Wifi free</Text>

                          </View>
                          <View style={[styles.moreinfomation_item,{width:windowWidth*0.35, marginRight: 10}]}>
                            <Icon name='alarm' style={{paddingHorizontal:4}} size={20}></Icon>
                            <Text>4:30 - 23:30</Text>

                          </View>
          </View>
      </View>
    <View style={{flexDirection:'row',width:'90%', alignItems:'flex-start', marginVertical: 12}}>
        <Icon name='map' size={20} style={{marginHorizontal: 8}}></Icon>
        <Text style={{color: '#9D9D9D', fontWeight: '700', fontSize: 14}}> Chuyến kế tiếp</Text>
    </View>
      <ScrollView style={{width:'100%'}} contentContainerStyle={{  alignItems:'center' }}>
          <NextTravel setModalTutorVisible={setModalTutorVisible}
                        setIsMapFull={setIsMapFull}
                        setModalCarInformationVisible={setModalCarInformationVisible}
                ></NextTravel>
          <NextTravel setModalTutorVisible={setModalTutorVisible}
                        setIsMapFull={setIsMapFull}
                        setModalCarInformationVisible={setModalCarInformationVisible}
                ></NextTravel>
            <NextTravel setModalTutorVisible={setModalTutorVisible}
                        setIsMapFull={setIsMapFull}
                        setModalCarInformationVisible={setModalCarInformationVisible}
                ></NextTravel>

      </ScrollView>


    </View>
  )
}
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const styles=StyleSheet.create({
  constainer:{
      marginTop:0.3*windowHeight,
      height:0.7*windowHeight,
      width:windowWidth,
      backgroundColor:'white',
      borderTopEndRadius:30,
      borderTopLeftRadius:30,
      alignItems:'center'

  },
  box:{
    backgroundColor:"#1A1528",
    width:windowWidth*0.9,
    height:windowHeight*0.23,
    borderRadius:30,
    justifyContent: "center",
    alignItems:'center',
    margin:10,
    paddingVertical: 24
  },
  box_top_img:{
    flex:3,
    alignItems:'center',
    justifyContent:'center'
  },
  box_top_name:{
    flex:4,

    justifyContent:'center'
  },
  box_top_km:{
    flex:3,
    alignItems:'center',
    justifyContent:'center'
  },
  moreinfomation_item:{
    height:windowHeight*0.04,
    borderRadius:10,
    backgroundColor:'white',

    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'

  },


})
export default ModalCarInformation