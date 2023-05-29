import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    useWindowDimensions,
    Button,
    Pressable,
    TextInput,
    Modal,
    Dimensions
  } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width

export const FavoriteAddressScreen = ({navigation}) =>  {
    const [addressList, setAddressList] = useState([
      {id: 0, name: 'Nhà riêng', address: {
        road: 'Tạ Quang Bửu',
        place: 'KTX Khu A ĐHQG, Tạ Quang Bửu',
        district: 'TP. Thủ Đức',
        ward: 'Linh Trung',
      }},
      {id: 1, name: 'Nơi làm việc', address: {
        road: 'Lý Thường Kiệt',
        place: 'Đại học Bách Khoa',
        district: 'Quận 10',
        ward: '',
      }},
      {id: 2, name: 'Trường học', address: {
        road: 'Nguyễn Hữu Cảnh',
        place: 'Nguyễn Hữu Cảnh',
        district: 'Quận 7',
        ward: 'Linh Trung',
      }},
    ]);
    const handleChange = (id, key, value) => {
       const list = [...addressList]
       const item = list.find(
         a => a.id === id
       )

       item.address[key] = value
       setAddressList(list)
    }
    const [newAddress, onChangeNewAddress] = React.useState('');
    const [selectedAddress, setSelectedAddress] = useState([true,false,false,false]);
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={{margin: 24}}>
          <Text style={{marginBottom: 12, fontSize: 24, fontWeight: '500'}}>Địa chỉ của tôi</Text>

          <View style={{marginBottom: 75}}>
            <View style={styles.addressListWrapper}>
              <ScrollView style={styles.addressList} showsHorizontalScrollIndicator={false} horizontal={true}>
                {addressList.map(({id, name}, index) => {
                  return(
                    <Pressable key={id} style={styles.addressItem} onPress={()=>{setSelectedAddress({...[false, false, false, false], [id]: true})}}>
                      <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>{name}</Text>
                    </Pressable>)
                })}
                {/* <View style={styles.addressItem}>
                  <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>Nhà riêng</Text>
                </View>
                <View style={styles.addressItem}>
                  <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>Nơi làm việc</Text>
                </View>
                <View style={styles.addressItem}>
                  <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>Trường học</Text>
                </View> */}
              </ScrollView>
              <View style={{marginLeft: 8}}>
                <Pressable
                 style={styles.newAddressBtn}
                 onPress={() => setModalVisible(true)}>
                  <Text style={{color: '#fff', fontSize: 16}}>+</Text>
                </Pressable>
              </View>
            </View>

            <View>
              {addressList.map(({id, name, address}, index)=>{
                return (
                  <View key={id} style={[styles.addressInfo, selectedAddress[id]?{}:{display:'none'}]}>
                    <View style={styles.infoArea}>
                      <Text style={{fontSize: 14, color: '#404040', fontWeight: '400'}}>Địa chỉ</Text>
                      <TextInput
                          style={styles.input}
                          onChangeText={(value)=>{
                            handleChange(id, 'road', value)
                          }}
                          value={address.road}
                          placeholder="Số nhà, đường"
                          keyboardType="default"
                      />
                      <ScrollView style={styles.infoSuggestList} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.infoSuggest}>
                          <Text style={{fontSize: 12, fontWeight: '400'}}>55 Võ Văn Ngân</Text>
                        </View>
                        <View style={styles.infoSuggest}>
                          <Text style={{fontSize: 12, fontWeight: '400'}}>10 Phạm Hữu Cảnh</Text>
                        </View>
                        <View style={styles.infoSuggest}>
                          <Text style={{fontSize: 12, fontWeight: '400'}}>44 Cống Quỳnh</Text>
                        </View>
                        <View style={styles.infoSuggest}>
                          <Text style={{fontSize: 12, fontWeight: '400'}}>44 Cống Quỳnh</Text>
                        </View>
                      </ScrollView>
                    </View>
                    <View style={styles.infoArea}>
                    <Text style={{fontSize: 14, marginBottom: 12, color: '#404040', fontWeight: '400'}}>Số nhà/tên đường/địa danh</Text>
                    <TextInput
                          style={styles.input}
                          onChangeText={(value)=>{
                            handleChange(id, 'place', value)
                          }}
                          value={address.place}
                          placeholder="Địa danh"
                          keyboardType="default"
                      />
                    </View>
                    <View style={styles.infoArea}>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View style={styles.subArea}>
                          <Text style={{fontSize: 14, marginBottom: 12, color: '#404040', fontWeight: '400'}}>Quận/Huyện</Text>
                          {/* <TextInput
                            style={styles.input}
                            onChangeText={onChangePlace}
                            value={''}
                            placeholder="Địa danh"
                            keyboardType="default"
                          /> */}
                          <View style={{overflow: 'hidden', borderRadius: 16}}>
                            {/* <Picker
                                style={styles.input}
                                selectedValue={address.district}
                                onValueChange={(value)=>{
                                  handleChange(id, 'district', value)
                                }}
                            >
                                <Picker.Item label="TP. Thủ Đức" value="TP. Thủ Đức" />
                                <Picker.Item label="Quận 1" value="Quận 1" />
                                <Picker.Item label="Quận 2" value="Quận 2" />
                                <Picker.Item label="Quận 3" value="Quận 3" />
                                <Picker.Item label="Quận 4" value="Quận 4" />
                                <Picker.Item label="Quận 5" value="Quận 5" />
                                <Picker.Item label="Quận 6" value="Quận 6" />
                                <Picker.Item label="Quận 7" value="Quận 7" />
                                <Picker.Item label="Quận 8" value="Quận 8" />
                                <Picker.Item label="Quận 9" value="Quận 9" />
                                <Picker.Item label="Quận 10" value="Quận 10" />
                            </Picker> */}
                            <SelectDropdown
                              data={["TP. Thủ Đức","Quận 1",
                              "Quận 2",
                              "Quận 3",
                              "Quận 4",
                              "Quận 5",
                              "Quận 6",
                              "Quận 7",
                              "Quận 8",
                              "Quận 9",
                              "Quận 10",]}
                              onSelect={(selectedItem, index) => handleChange(id, 'district', selectedItem)}
                              defaultButtonText={"Chọn Quận"}

                              buttonTextAfterSelection={(selectedItem, index) => {
                                  // text represented after item is selected
                                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                                  return selectedItem
                              }}
                              rowTextForSelection={(item, index) => {
                                  // text represented for each item in dropdown
                                  // if data array is an array of objects then return item.property to represent item in dropdown
                                  return item
                              }}
                              renderDropdownIcon={isOpened => {
                                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                              }}
                              // dropdownIconPosition="left"
                              dropdownIconPosition={'right'}
                              buttonStyle={{height: 60,
                                backgroundColor: "#FAFAFA",
                                borderRadius: 16,
                                width: screenWidth/2 - 30,

                              }}
                              dropdownStyle={{borderRadius: 16}}
                              defaultValue={address.district}
                          />
                          </View>
                        </View>
                        <View style={styles.subArea}>
                          <Text style={{fontSize: 14, marginBottom: 12, color: '#404040', fontWeight: '400'}}>Phường</Text>
                          {/* <TextInput
                            style={styles.input}
                            onChangeText={onChangePlace}
                            value={''}
                            placeholder="Địa danh"
                            keyboardType="default"
                          /> */}
                          <View style={{overflow: 'hidden', borderRadius: 16}}>
                            {/* <Picker
                                style={styles.input}
                                selectedValue={address.ward}
                                onValueChange={(value)=>{
                                  handleChange(id, 'ward', value)
                                }}
                            >
                                <Picker.Item label="Linh Trung" value="Linh Trung"/>
                            </Picker> */}
                            <SelectDropdown
                              data={['Linh Trung']}
                              defaultButtonText={"Chọn phường"}
                              onSelect={(selectedItem, index) => handleChange(id, 'ward', selectedItem)}
                              buttonTextAfterSelection={(selectedItem, index) => {
                                  // text represented after item is selected
                                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                                  return selectedItem
                              }}
                              rowTextForSelection={(item, index) => {
                                  // text represented for each item in dropdown
                                  // if data array is an array of objects then return item.property to represent item in dropdown
                                  return item
                              }}
                              renderDropdownIcon={isOpened => {
                                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                              }}
                              // dropdownIconPosition="left"
                              dropdownIconPosition={'right'}
                              buttonStyle={{height: 60,
                                backgroundColor: "#FAFAFA",
                                borderRadius: 16,
                                width: screenWidth/2 - 30,

                              }}
                              dropdownStyle={{borderRadius: 16}}
                              defaultValue={address.ward}
                          />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Địa chỉ mới của tôi</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNewAddress}
                    value={newAddress}
                    placeholder="Địa chỉ của tôi"
                    keyboardType="default"
                />
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Pressable
                    style={[styles.button, styles.saveNewBtn]}
                    onPress={() => {
                      setAddressList([...addressList, {id: addressList.length, name: newAddress, address: {
                        road: '',
                        place: '',
                        district: '',
                        ward: '',
                      }}])
                      setModalVisible(!modalVisible)
                    }}>
                    <Text style={[styles.textStyle, {color: '#000'}]}>Lưu</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, {backgroundColor: '#FAFAFA',}]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[styles.textStyle, {color: '#9D9D9D', fontWeight: '800'}]}>Hủy</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <Pressable style={styles.saveBtn}>
            <Text style={{color: '#fff'}}>Lưu</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
    // return (
    //     <View>
    //         <Text style={styles.title}>Địa chỉ của tôi</Text>
    //     </View>
    // )

}

const styles = StyleSheet.create({
    title: {

    },
    saveBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 54,
        backgroundColor: "#1A1528",
        borderRadius: 16,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,
    },
    addressListWrapper: {
      marginBottom: 12,
      display: 'flex',
      flexDirection: 'row',
    },
    addressList: {
      display: 'flex',
      flexDirection: 'row',
      height: 44,
      backgroundColor: '#FAFAFA',
      borderRadius: 16,
    },
    addressItem: {
      marginHorizontal: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    newAddressBtn: {
      borderRadius: 16,
      backgroundColor: '#1A1528',
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addressInfo: {

    },
    infoArea: {
      marginVertical: 12,
    },
    infoSuggestList: {
      display: 'flex',
      flexDirection: 'row',
    },
    infoSuggest: {
      borderRadius: 10,
      flexGrow: 1,
      marginRight: 8,
      backgroundColor: '#FAFAFA',
      marginTop: 8,
      paddingHorizontal: 8,
    },
    subArea: {
      marginRight: 12,
      flexBasis: 165,

    },
    input: {
      height: 60,
      backgroundColor: "#FAFAFA",
      fontSize: 16,
      borderRadius: 16,
      paddingHorizontal: 16,
      // marginVertical: 8,
    },








    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      display: 'flex',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      marginTop: 24,
      marginHorizontal: 12,
      borderRadius: 16,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    saveNewBtn: {
      backgroundColor: '#FFCE48',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: '#1F1F1F',
      fontWeight: '800'
    },
})