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
  } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';


export const PaymentScreen = ({navigation}) =>  {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return (
      <SafeAreaView >
        <View style={styles.Wrapper}>
            <View style={styles.methodWrapper}>
                <View style={styles.methodType}>
                    <Text>Google Wallet</Text>
                </View>
                <View style={styles.methodInfoLink}>
                    <View style={styles.methodRemainder}>
                        <Text>Số dư</Text>
                        <Text>195,00 VND</Text>
                    </View>
                    <Pressable style={styles.unlinkBtn}>
                        <Text style={styles.btnText}>Hủy liên kết</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={styles.methodType}>
                    <Text>VISA</Text>
                </View>
                <View style={styles.methodInfoLink}>
                    <View>
                        <View>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="0000 0000 0000 0000"
                                keyboardType="numeric"
                            />
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={text}
                                placeholder="MM/YYYY"
                                keyboardType="default"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="XXXX"
                                keyboardType="default"
                            />
                        </View>
                    </View>

                </View>
            </View>
        </View>

        <Button
            title="Lưu"
        />
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

    },
    tabs: {
        backgroundColor: '#ccc',
    },
    input: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    Wrapper: {
        marginHorizontal: 24,
        backgroundColor: '#fff',
    },
    methodWrapper: {
        // marginHorizontal: 8,
        // backgroundColor: '#ccc',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,

        width: 362,
        height: 140,

        /* Background Colors/Background Main */

        backgroundColor: '#FFFFFF',
        borderRadius: 16,

        /* Inside auto layout */

        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,

    },
    methodType: {
        marginHorizontal: 16,
    },
    methodInfoLink: {
        // marginHorizontal: 16,
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // margin: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        width: "116px",
        height: "44px",
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0

    },
    methodRemainder: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    unlinkBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 10px",
        width: "382px",
        height: "54px",
        background: "#1A1528",
        borderRadius: 16,
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
    }
})