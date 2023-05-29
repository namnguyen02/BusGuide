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
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RoutePrevious } from '@/Components/RoutePrevious';
import { RouteCardMini } from '@/Components/RouteCardMini';
export const MyPage = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: '#FFF'}}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.imageBorder}>
                        <View style={styles.imageWrapper}>
                            <Image
                                style={{resizeMode: 'stretch',}}
                                source={require('../../../assets/avatar-sample.png')}
                            />

                        </View>
                        <Pressable
                            style={styles.iconWrapper}
                            onPress={()=>{navigation.navigate('Profile')}}>
                            <FeatherIcon
                                // color="#616161"
                                name="edit-3"
                                color="#fff"
                                size={16}
                                style={{}}
                                // size={22}
                            />
                        </Pressable>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: '600', color: '#1F1F1F'}}>BatOnTeam22</Text>
                    <View style={styles.idWrapper}>
                        <View style={styles.circle}>
                        <FeatherIcon
                                // color="#616161"
                                name="clipboard"
                                color="#000"
                                size={16}
                                style={{}}
                                // size={22}
                            />
                        </View>
                        <Text style={{margin: 8, fontSize: 16, fontWeight: '600', color: '#fff'}}>21585424</Text>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.group}>
                        <View style={styles.groupHeader}>
                            <Text style={{color: '#1F1F1F', fontWeight: '600', fontSize: 20, marginBottom: 12}}>Chuyến đi theo dõi</Text>
                            <Text style={{color: '#404040', fontWeight: '400', fontSize: 12}}>Nhận thông báo thay đổi về tuyến đường</Text>
                        </View>
                        <ScrollView style={{paddingHorizontal: 10, marginVertical: 28}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <RouteCardMini time={'13:00'} station={'Đại học Bách Khoa'}/>
                            <RouteCardMini time={'13:30'} station={'KTX Khu A'}/>
                            <RouteCardMini time={'14:05'} station={'KTX Khu B'}/>
                            <RouteCardMini time={'15:05'} station={'Bến xe miền Đông'}/>
                        </ScrollView>
                    </View>

                    <View style={styles.group}>
                        <View style={styles.groupHeader}>
                            <Text style={{color: '#1F1F1F', fontWeight: '600', fontSize: 20, marginBottom: 12}}>Ví điện tử</Text>
                            <Text style={{color: '#404040', fontWeight: '400', fontSize: 12}}>Thêm ví điện tử có thể được sử dụng để thanh toán vé của bạn</Text>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <View style={styles.creditCard}>
                                    <Image style={{position: 'absolute'}} source={require('../../../assets/card/credit-card.png')}/>
                                    <Image style={{alignSelf:'flex-end'}} source={require('../../../assets/icons/setting/google_wallet.png')}/>
                                    <Text style={{alignSelf:'center', color: '#1F1F1F', fontWeight: '600', fontSize: 14, marginBottom: 12}}>Bình Nguyên Bất Ổn</Text>
                                    <Text style={{alignSelf:'flex-end', color: '#404040', fontWeight: '400', fontSize: 13}}>012345 678 900 0007</Text>
                                </View>
                                <View style={styles.balanceWrapper}>
                                    <View style={styles.balance}>
                                        <View style={styles.balanceIconWrapper}>
                                            <Ionicons
                                                // color="#616161"
                                                name="wallet-outline"
                                                color="#000"
                                                size={18}
                                                style={{}}
                                                // size={22}
                                            />
                                        </View>
                                        <View style={{justifyContent: 'space-between', paddingVertical: 3}}>
                                            <Text style={{fontSize: 12, color: '#9D9D9D', fontWeight: '500'}}>Số dư</Text>
                                            <Text style={{fontSize: 14, color: '#1F1F1F', fontWeight: '800'}}>195,000 VND</Text>
                                        </View>
                                    </View>
                                    <View style={styles.payment}>
                                        <View style={styles.balanceIconWrapper}>
                                        <Ionicons
                                                // color="#616161"
                                                name="wallet-outline"
                                                color="#000"
                                                size={18}
                                                style={{}}
                                                // size={22}
                                            />
                                        </View>
                                        <View style={{justifyContent: 'space-between', paddingVertical: 3}}>
                                            <Text style={{fontSize: 12, color: '#9D9D9D', fontWeight: '500'}}>Đã chi</Text>
                                            <Text style={{fontSize: 14, color: '#1F1F1F', fontWeight: '800'}}>125,000 VND</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.group}>
                        <View style={styles.groupHeader}>
                            <Text style={{color: '#1F1F1F', fontWeight: '600', fontSize: 20, marginBottom: 12}}>Lịch sử</Text>
                            <Text style={{color: '#404040', fontWeight: '400', fontSize: 12}}>Các chuyến gần đây</Text>

                        </View>

                        <ScrollView style={{paddingHorizontal: 10, marginVertical: 28}} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <RoutePrevious time={'13:00'} station={'Đại học Bách Khoa'} navigation={navigation}/>
                            <RoutePrevious time={'13:30'} station={'KTX Khu A'} navigation={navigation}/>
                            <RoutePrevious time={'14:05'} station={'KTX Khu B'} navigation={navigation}/>
                            <RoutePrevious time={'15:05'} station={'Bến xe miền Đông'} navigation={navigation}/>
                        </ScrollView>
                    </View>

                    <View style={styles.group}>
                        <View style={styles.groupHeader}>
                            <Text style={{color: '#1F1F1F', fontWeight: '600', fontSize: 20, marginBottom: 12}}>Thống kê</Text>
                            <Text style={{color: '#404040', fontWeight: '400', fontSize: 12}}>Cái nhìn tổng quan về các chuyến đi của bạn</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 350,
        backgroundColor: '#FFCE48',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBorder: {
        marginVertical: 70,
        backgroundColor: '#FFC286',
        padding: 5,
        borderColor: '#FF9F40',
        borderWidth: 5,
        borderRadius: 9999,
        alignItems: 'center',
        marginBottom: 36

    },
    imageWrapper: {
        borderRadius: 9999,
        backgroundColor: '#FAFAFA',
        width: 128,
        height: 128,
        alignItems: 'center',
        justifyContent: 'center',
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
    idWrapper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#1A1528',
        borderRadius: 9999,
        marginBottom: 48,
        marginTop: 24,
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 9999,
        backgroundColor: '#FF8811',
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        marginVertical: 48,
    },
    group: {

    },
    groupHeader: {
        marginHorizontal: 24,
    },
    groupContent: {

    },
    creditCard: {
        width: 222,
        height: 116,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8,
        marginVertical: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 1,
            },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    balanceWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 8,
    },
    balance: {
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
    },
    payment: {
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',

    },
    balanceIconWrapper: {
        backgroundColor: '#FFCE48',
        width: 40,
        height: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
})