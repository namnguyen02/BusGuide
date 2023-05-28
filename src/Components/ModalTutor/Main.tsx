import { View, Text ,Dimensions,StyleSheet,ScrollView,Pressable} from 'react-native'
import React from 'react'
import * as icon from 'react-native-feather'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Step from './Step';
import { ChevronDown } from 'react-native-feather';

const countries = [
  'Vé thường',
  'Vé sinh viên',
  'Vé trẻ em',


];


const ModalTutor= ({setModalTutorVisible,setModalHeaderTutorVisible}) => {
  return (
    <View style={styles.constainer}>
    <ChevronDown color={'black'} width={windowWidth*0.13} height={windowWidth*0.13}
          onPress={()=>{setModalTutorVisible(false); setModalHeaderTutorVisible(true)}}

  />
    <Text style={{fontSize:18, fontWeight:'bold', marginVertical: 12}}> Chi tiết chuyến đi</Text>
    <ScrollView  contentContainerStyle={{  alignItems:'center' }} showsVerticalScrollIndicator={false}>
      <View style={styles.title}>
            <View style={{flex:3, justifyContent:'flex-start',alignItems:'center'}}>
                <Text style={{fontSize:40, fontWeight:'bold'}}>14:05</Text>
            </View>
            <View style={{flex:4, justifyContent:'flex-end'}}>
                <Text style={{color: '#9D9D9D', fontWeight: '700', fontSize: 14}}>52 phút</Text>
            </View>
            <View style={{flex:1, justifyContent:'center', borderRadius: 12, backgroundColor: '#FF8811', alignItems: 'center'}}>
                  <icon.Bell stroke='black' height={20} width={20}/>
            </View>




      </View>
      <View style={styles.re_des} >
          <View style={{flex:5,justifyContent:'flex-end'}}>
              <Text style={{color: '#9D9D9D', fontWeight: '700', fontSize: 14}}>Q.10</Text>
              <Text style={{fontWeight:'bold', marginTop: 6}}>268 Lý Thường Kiệt</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-end', alignItems:'center'}}>
                <Text>đến</Text>
          </View>
          <View style={{flex:5,justifyContent:'flex-end',alignItems:'flex-end'}}>
              <Text style={{color: '#9D9D9D', fontWeight: '700', fontSize: 14}}>Tp.Thủ Đức</Text>
              <Text style={{fontWeight:'bold', marginTop: 6}}> Tạ Quang Bửu</Text>
          </View>
      </View>
      <View style={styles.ticket_view}>


          <View style={{flex:5,alignItems:'flex-start'}}>
          <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              // defaultValue={'Egypt'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Chọn vé'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}

              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />

          </View>


          <View style={{flex:5,alignItems:'flex-end'}}>
                  <Pressable style={{
                            borderRadius:10,
                            height:windowHeight*0.05,
                            width:windowWidth*0.2,
                            borderColor:'black',
                            backgroundColor:'black',
                            borderWidth:0.5,
                            alignItems:'center',
                            justifyContent:'center'

                      }} >
                            <Text style={{color: '#fff'}}>Mua vé</Text>
                      </Pressable>
          </View>



      </View>
      <View style={styles.khoi_hanh}>
            <icon.Map stroke='black' height={20} width={20} style={{marginHorizontal: 8}} />
            <Text style={{color: '#9D9D9D', fontWeight: '700', fontSize: 14}}>Khởi hành</Text>
      </View>
      <Step location={'268 Lý Thường Kiệt'} icon_name={'Map-pin'} action={'Vị trí của tôi'} time={'14:05'}></Step>
      <Step location={'Khoảng 1 phút'} icon_name={'User'} action={'Đi bộ 50m'} time={''}></Step>
      <Step location={'Đại học Bách Khoa'} icon_name={'Truck'} action={'Trạm dừng'} time={'14.05'}></Step>
      <Step location={'KTX Khu A ĐHQG'} icon_name={'Truck'} action={'Trạm dừng'} time={'14:51'}></Step>
      <Step location={'Khoảng 6 phút'} icon_name={'User'} action={'Đi bộ 300m'} time={''}></Step>
      <Step location={'Tạ Quang Bửu,TP.Thủ Đức'} icon_name={'Target'} action={'KTX Khu A ĐHQG'} time={'14:57'}></Step>
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
      alignItems:'center',


  },
  title:{
    height:windowHeight*0.07,
    flexDirection:'row',
    paddingVertical:4,
    width:windowWidth*0.9,



  },
  re_des:{
    height:windowHeight*0.1,
    flexDirection:'row',
    marginBottom: 24,
    width:windowWidth*0.9

  },
  ticket_view:{
    flexDirection:'row',
    width:windowWidth*0.9,
    height:windowHeight*0.1

  },
  khoi_hanh:{
    flexDirection:'row',
    width:windowWidth*0.9,
    height:windowHeight*0.05,
  }
  ,

  tutor:{


  },




  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width:40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width:30, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: '90%',
    height: windowHeight*0.05,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},




})

export default ModalTutor
