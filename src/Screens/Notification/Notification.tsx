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
  TextInput,
  Pressable
} from 'react-native';
import {Toast} from '@/Components/Toast';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown'


export const Notification = () => {
    const [filter1, setfilter1] = useState('Gần đây')
    return (
        <SafeAreaView style={{backgroundColor: '#FFF'}}>
            <ScrollView>
                {/* <Toast
                    type='ticket'
                    title='Vé đã mua'
                    time='14.04'
                    description='Tuyến đường bắt đầu từ trạm Đại học Bách Khoa bị chậm 5 phút.'/> */}
                <View style={styles.header}>
                    <View style={styles.notifyNumWrapper}>
                        <View style={styles.notifyNum}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight:'800'}}>2</Text>
                        </View>
                     <View style={styles.circle}></View>

                    </View>
                    <Text style={{marginBottom: 28, fontSize: 24, fontWeight: '700'}}>Thông báo mới</Text>
                    {/* <View style={styles.selecter}> */}
                        {/* <Picker
                            selectedValue={filter1}
                            style={{ height: 40, width: 135, margin: -6}}
                            itemStyle={{height: 20, width: 100}}
                            onValueChange={(itemValue, itemIndex) => setfilter1(itemValue)}
                        >
                            <Picker.Item style={{fontSize:14}} label="Gần đây" value="newest" />
                            <Picker.Item style={{fontSize:14}} label="Cũ nhất" value="oldest" />
                        </Picker> */}
                        <SelectDropdown
                            data={['Gần đây', 'Cũ nhất']}
                            onSelect={(selectedItem, index) => setfilter1(selectedItem)}
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
                            buttonStyle={[styles.selecter, {width: 135}]}
                            dropdownStyle={{borderRadius: 16}}
                            defaultValue={filter1}
                        />
                    {/* </View> */}
                </View>

                <View style={styles.notifyList}>
                    <View style={styles.notifyItem}>
                        <Text style={{marginBottom: 28, color: '#9D9D9D', fontSize: 16, fontWeight: '400'}}>Thứ ba, hôm nay</Text>
                        <Toast
                            type='ticket'
                            title='Vé đã mua'
                            time='14:00'
                            description='Cảm ơn bạn đã mua vé với giá 7,000 VND'/>

                        <Toast
                            type='cancel'
                            title='Chuyến đi bị hủy'
                            time='13:50'
                            description='Tuyến đường bạn đang theo dõi từ trạm Đại học Bách Khoa bị hủy.'/>
                        <Toast
                            type='payment'
                            title='Nạp tiền thành công'
                            time='13:50'
                            description='Nạp 200,000 VND cho ví điện tử Google Wallet được hoàn tất'/>
                    </View>
                    <View style={styles.notifyItem}>
                        <Text style={{marginBottom: 28, color: '#9D9D9D', fontSize: 16, fontWeight: '400'}}>Thứ hai, hôm qua</Text>
                        <Toast
                            type='delay'
                            title='Chuyến đi bị trì hoãn'
                            time='13:54'
                            description='Tuyến đường bắt đầu từ trạm Đại học Bách Khoa bị chậm 5 phút.'/>
                        <Toast
                            type='ticket'
                            title='Vé đã mua'
                            time='14:04'
                            description='Cảm ơn bạn đã mua vé với giá 7.000 VND'/>
                    </View>
                    <View style={styles.notifyItem}>
                        <Text style={{marginBottom: 28, color: '#9D9D9D', fontSize: 16, fontWeight: '400'}}>CN, 28/05</Text>
                        <Toast
                            type='ticket'
                            title='Vé đã mua'
                            time='13:24'
                            description='Cảm ơn bạn đã mua vé với giá 7.000 VND'/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notifyNumWrapper: {
        marginBottom: 12,
    },
    notifyNum: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1528',
        borderRadius: 9999,
    },
    editForm: {
        marginVertical: 36,
        marginHorizontal: 24,
    },
    inputArea: {
        position: 'relative',
        height: 60,
        display: 'flex',
        marginBottom: 28,
    },
    input: {
        height: 60,
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 16,
        paddingLeft: 80,
        color: '#1F1F1F',
    },
    inputIcon: {
        position: 'absolute',
        zIndex: 1,
        left: 16,
        top: '30%',
    },
    iconWrapper: {
        borderRadius:9999,
        backgroundColor:'#1A1528',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: -20,
    },
    circle: {
        top: -3,
        left: 24,
        position: 'absolute',
        width: 13,
        height: 13,
        borderRadius: 9999,
        backgroundColor: '#FF8811'
    },
    notifyList: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
    },
    notifyItem: {
        alignItems: 'center',

    },
    selectInput: {
        transform: [
            { scaleX: 0.1 },
            { scaleY: 0.1 },
        ],
    },
    selecter:{
        fontSize: 14, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1,
        borderColor: '#ccc'
    },
})