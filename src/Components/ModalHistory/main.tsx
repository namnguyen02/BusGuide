import { View, Text,Button,StyleSheet ,ScrollView, Pressable} from 'react-native'
import SearchBox from '../SearchBox/SearchBox'
import React from 'react'
import { Icon } from 'react-native-elements'
import Position from './Position'
import PosImg1 from '../../../assets/PositionImg/img1.png'
import PosImg2 from '../../../assets/PositionImg/img2.png'
import PosImg3 from '../../../assets/PositionImg/img3.png'
import ButtonConfirm from './ButtonConfirm'
import SavedComponent from './SavedComponent'
const ModalHistory = ({setModalVisible,setSuitableVisible,setIsMapFull}) => {
  return (
    <View style={styles.container}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Lịch sử tìm kiếm</Text>

          <SearchBox></SearchBox>

          <View style={{width:'90%',height:25 ,flexDirection:'row', backgroundColor:'blue'}}>
            <Icon name='history'></Icon>
            
            <Text>Gần đây</Text>
          </View>
          <Position Img={PosImg1}></Position>
          <Position Img={PosImg2}></Position>
          <Position Img={PosImg3}></Position>

          <View style={{width:'90%',height:25 ,flexDirection:'row', backgroundColor:'blue'}}>
            
            
            <Text>Đã lưu</Text>

          </View>
          <ScrollView style={styles.saved} horizontal={true}>
            <SavedComponent Type={1}></SavedComponent>
            <SavedComponent Type={2}></SavedComponent>
            <SavedComponent Type={3}></SavedComponent>
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
            height:'15%'
    },
    
})

export default ModalHistory