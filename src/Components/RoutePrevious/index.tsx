import { Hidden } from 'native-base';
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
import { RootScreens } from "@/Screens";

export const RoutePrevious = ({time, station, navigation}) => {
    return (
        <View style={styles.card}>
            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={{display: 'flex', flexDirection: 'column', width: 230, marginLeft: 48}}>
                <View style={styles.header}>
                    <Text style={{color: '#1F1F1F', fontSize: 20, fontWeight: '800'}}>14:05</Text>

                    <View style={styles.imageWrapper}>
                        <Image source={require('../../../assets/card/route.png')}></Image>
                    </View>

                    <Text style={{color: '#1F1F1F', fontSize: 20, fontWeight: '800'}}>14:05</Text>
                </View>
                <View style={styles.message}>
                    <View>
                        <Text style={{color: '#9D9D9D', fontSize: 13, fontWeight: '500'}}>Q.10</Text>
                        <Text style={{color: '#1F1F1F', fontSize: 13, fontWeight: '500'}}>268 Lý Thường Kiệt</Text>
                    </View>
                    <View style={styles.rowSpacer} />

                    <View>
                        <Text style={{color: '#9D9D9D', fontSize: 13, fontWeight: '500'}}>TP. Thủ Đức</Text>
                        <Text style={{color: '#1F1F1F', fontSize: 13, fontWeight: '500'}}>Tạ Quang Bửu</Text>
                    </View>
                </View>
            </View>
            <Pressable onPress={()=>{navigation.navigate(RootScreens.MAIN, {screen:'Vé của tôi'})}} style={styles.btn}>
                <FeatherIcon
                    // color="#616161"
                    name="arrow-right"
                    color="#fafafa"
                    size={16}
                    style={{}}
                    // size={22}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        height: 100,
        padding: 20,
        borderRadius: 24,
        width: 350,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 12,
        marginVertical: 2,
    },
    imageWrapper: {
        marginHorizontal: 8

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    message: {
        display: 'flex',
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#1A1528',
        width: 32,
        height: 66,
        borderRadius:12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    circle1: {
        backgroundColor: '#fff',
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 9999,
        top: -10,
        left: 20,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

    },
    circle2: {
        backgroundColor: '#fff',
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 9999,
        bottom: -10,
        left: 20,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },

})