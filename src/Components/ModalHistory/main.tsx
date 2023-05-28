import { View, Text,Button,StyleSheet ,ScrollView, Pressable} from 'react-native'
import SearchBox from '../SearchBox/SearchBox'
import React from 'react'
import { Icon } from 'react-native-elements'
import Position from './Position'
import ButtonConfirm from './ButtonConfirm'
import SavedComponent from './SavedComponent'
const ModalHistory = ({setModalVisible,setSuitableVisible,setIsMapFull}) => {
  return (
    <View style={styles.container}>
          <Text style={{fontSize:20, fontWeight:'bold', marginTop: 24, marginBottom: 12}}>Lịch sử tìm kiếm</Text>

          <SearchBox setModalHistoryVisible={setModalVisible}></SearchBox>

          <View style={{width:'90%',height:25 ,flexDirection:'row', backgroundColor:'white', marginTop: 12}}>
            <Icon name='history' size={20}  style={{marginRight: 12}}></Icon>

            <Text style={{color: '#9D9D9D', fontSize: 14, fontWeight: '700'}}>Gần đây</Text>
          </View>
          <Position Img={require('../../../assets/PositionImg/img1.png')} setModalVisible={setModalVisible} setSuitableVisible={setSuitableVisible} setIsMapFull={setIsMapFull}></Position>
          <Position Img={require('../../../assets/PositionImg/img2.png')} setModalVisible={setModalVisible} setSuitableVisible={setSuitableVisible} setIsMapFull={setIsMapFull}></Position>
          <Position Img={require('../../../assets/PositionImg/img3.png')} setModalVisible={setModalVisible} setSuitableVisible={setSuitableVisible} setIsMapFull={setIsMapFull}></Position>

          <View style={{width:'90%',height:25 ,flexDirection:'row', backgroundColor:'white', marginTop: 24}}>


            <Text style={{color: '#9D9D9D', fontSize: 14, fontWeight: '700'}}>Đã lưu</Text>

          </View>
          <ScrollView style={styles.saved} horizontal={true} showsHorizontalScrollIndicator={false}>
            <SavedComponent Type={1} setModalVisible={setModalVisible} setSuitableVisible={setSuitableVisible} setIsMapFull={setIsMapFull}></SavedComponent>
            <SavedComponent Type={2} setModalVisible={setModalVisible} setSuitableVisible={setSuitableVisible} setIsMapFull={setIsMapFull}></SavedComponent>
            <SavedComponent Type={3} setModalVisible={setModalVisible} setSuitableVisible={setSuitableVisible} setIsMapFull={setIsMapFull}></SavedComponent>
          </ScrollView>

          <ButtonConfirm setSuitableVisible={setSuitableVisible}
                          setModalVisible={setModalVisible}
                          setIsMapFull={setIsMapFull}
          ></ButtonConfirm>




        </View>
  )
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:'95%',
        backgroundColor:'white',
        marginTop: '10%',
        borderTopEndRadius:30 ,
        borderTopLeftRadius:30,
        alignContent:'center',
        alignItems:'center'
    },
    saved:{
          flexDirection:'row',
          height:'15%',
          marginHorizontal: 24,
    },

})

export default ModalHistory