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
    TextInput,
    Pressable,
    Alert,
  } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const PaymentScreen = ({navigation}) =>  {
    const [info, setInfo] = React.useState([true, true]);
    const [validDate, onChangeValidDate] = React.useState('');
    const [code, onChangeCode] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <ScrollView>
        <View style={{marginTop: 10}}>
            <Text style={styles.title}>Phương thức thanh toán</Text>
            <Text style={styles.description}>Thêm phương thức thanh toán và thay đổi thứ tự khi thanh toán vé</Text>
        </View>

        <View style={styles.Wrapper}>
            <View style={styles.methodWrapper}>
                <Pressable onPress={()=> setInfo({...info, [0]: !info[0]})} style={styles.methodType}>
                    {/* <Text>Google Wallet</Text> */}
                    <Image
                        style={{marginRight: 16}}
                        source={require('../../../assets/icons/setting/6_point.png')}
                    />
                    <Image
                        style={{}}
                        source={require('../../../assets/icons/setting/google_wallet.png')}
                    />
                </Pressable>
                <View style={[styles.methodInfoLink, info[0]?{}:{display: 'none'}]}>
                    <View style={styles.methodRemainder}>
                        <Text style={{fontWeight: '700', fontSize: 14, color: "#9D9D9D", marginBottom: 8}}>Số dư</Text>
                        <Text style={{fontWeight: '600', fontSize: 20, color: "#1F1F1F" }}>195,00 VND</Text>
                    </View>
                    <Pressable style={styles.unlinkBtn}>
                        <Text style={styles.btnText}>Hủy liên kết</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.methodWrapper}>
                <Pressable onPress={()=> setInfo({...info, [1]: !info[1]})} style={styles.methodType}>
                    <Image
                        style={{marginRight: 16}}
                        source={require('../../../assets/icons/setting/6_point.png')}
                    />
                    <Image
                        style={{}}
                        source={require('../../../assets/icons/setting/visa.png')}
                    />
                </Pressable>
                <View style={[styles.methodInfoLink, info[1]?{}:{display: 'none'}]}>
                    <View style={{display:'flex', flexDirection: 'column', flex: 1}}>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="0000 0000 0000 0000"
                                keyboardType="numeric"

                            />
                            <MaterialCommunityIcons
                                name='credit-card-scan'
                                color="#000"
                                size={20}
                                style={{position: 'absolute', top: '40%', right: 20}}
                            />
                        </View>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeValidDate}
                                value={validDate}
                                placeholder="MM/YYYY"
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeCode}
                                value={code}
                                placeholder="XXXX"
                                keyboardType="default"
                            />
                        </View>
                    </View>

                </View>
            </View>
        </View>

        <Pressable style={styles.saveBtn} onPress={()=>{Alert.alert('Bạn đã lưu phương thức thanh toán thành công')}}>
            <Text style={{color: '#fff'}}>Lưu</Text>
        </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
    // return (
    //     <View>
    //         <Text style={styles.title}>Phương thức thanh toán</Text>
    //         <Text style={styles.title}>Thêm phương thức thanh toán và thay đổi thứ tự khi thanh toán vé</Text>
    //     </View>
    // )

}

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 24,
        fontSize: 26,
        paddingBottom: 10,
        fontWeight: '500',
      },
    description: {
        marginHorizontal: 24,
        fontSize: 13,
        paddingBottom: 36,
    },
    tabs: {
        backgroundColor: '#ccc',
    },
    inputArea: {
        display: 'flex',
        flexDirection: 'row',
        // // width: 314,
        alignItems: 'stretch',
        flex: 1,
    },

    input: {
        // padding: "14px 20px",
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: "#FAFAFA",
        borderRadius: 16,
        marginHorizontal: 8,
        marginTop: 8,
        flex: 1,
    },
    Wrapper: {
        marginHorizontal: 24,
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
        borderRadius: 24,
        marginBottom: 12,
    },
    methodWrapper: {
        // marginHorizontal: 8,
        // backgroundColor: '#ccc',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 24,
        flexGrow: 1,
        borderRadius: 24,
        backgroundColor: '#fff',
        marginVertical: 12,

    },
    methodType: {
        // marginHorizontal: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        height: 24,
        alignSelf: "stretch",
        flexGrow: 0,
    },
    methodInfoLink: {
        // marginHorizontal: 16,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // margin: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        marginTop: 24,

    },
    methodRemainder: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        height: 44,
        alignSelf: "stretch",
        flexGrow: 0
    },
    unlinkBtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        height: 44,
        backgroundColor: "#F50000",
        borderRadius: 12,
        flexGrow: 0
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
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
        alignSelf: "stretch",
        flexGrow: 0,
        marginHorizontal:24,
    },
})