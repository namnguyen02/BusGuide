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
  } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const FavoriteAddressScreen = ({navigation}) =>  {
    const [road, onChangeRoad] = React.useState('Tạ Quang Bửu');
    const [place, onChangePlace] = React.useState('KTX Khu A ĐHQG, Tạ Quang Bửu');
    const [district, setDistrict] = useState("newest");
    const [ward, setWard] = useState("all");

    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={{margin: 24}}>
          <Text style={{marginBottom: 12, fontSize: 24, fontWeight: '500'}}>Địa chỉ của tôi</Text>

          <View style={{marginBottom: 75}}>
            <View style={styles.addressListWrapper}>
              <View style={styles.addressList}>
                <View style={styles.addressItem}>
                  <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>Nhà riêng</Text>
                </View>
                <View style={styles.addressItem}>
                  <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>Nơi làm việc</Text>
                </View>
                <View style={styles.addressItem}>
                  <Text style={{fontSize: 14, margin: 6, fontWeight: '400'}}>Trường học</Text>
                </View>
              </View>
              <View style={{marginLeft: 8}}>
                <Pressable style={styles.newAddressBtn}>
                  <Text style={{color: '#fff', fontSize: 16}}>+</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.addressInfo}>
              <View style={styles.infoArea}>
                <Text style={{fontSize: 14, color: '#404040', fontWeight: '400'}}>Địa chỉ</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeRoad}
                    value={road}
                    placeholder="Số nhà, đường"
                    keyboardType="default"
                />
                <View style={styles.infoSuggestList}>
                  <View style={styles.infoSuggest}>
                    <Text style={{fontSize: 12, fontWeight: '400'}}>55 Võ Văn Ngân</Text>
                  </View>
                  <View style={styles.infoSuggest}>
                    <Text style={{fontSize: 12, fontWeight: '400'}}>10 Phạm Hữu Cảnh</Text>
                  </View>
                  <View style={styles.infoSuggest}>
                    <Text style={{fontSize: 12, fontWeight: '400'}}>44 Cống Quỳnh</Text>
                  </View>
                </View>
              </View>
              <View style={styles.infoArea}>
              <Text style={{fontSize: 14, marginBottom: 12, color: '#404040', fontWeight: '400'}}>Số nhà/tên đường/địa danh</Text>
              <TextInput
                    style={styles.input}
                    onChangeText={onChangePlace}
                    value={place}
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
                      <Picker
                          selectedValue={district}
                          style={styles.input}
                          onValueChange={(itemValue, itemIndex) => setDistrict(itemValue)}
                      >
                          <Picker.Item label="TP. Thủ Đức" value="0" />
                          <Picker.Item label="Quận 10" value="10" />
                      </Picker>
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
                      <Picker
                          selectedValue={ward}
                          style={styles.input}
                          onValueChange={(itemValue, itemIndex) => setWard(itemValue)}
                      >
                          <Picker.Item label="Linh Trung" value="newest" />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

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
})