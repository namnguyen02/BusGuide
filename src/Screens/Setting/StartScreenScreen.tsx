import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    Pressable,
    Alert,
    Dimensions
  } from 'react-native';
const screenHeight = Dimensions.get("window").height;


export const StartScreenScreen = ({navigation}) =>  {
    const [startScreen, setStartScreen] = useState([false, true, false])
    const [modalVisible, setModalVisible] = useState(false);

    return (
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={{marginHorizontal: 24, marginVertical: 16, height: screenHeight}}>
            <View style={{marginBottom: 24}}>
                <Text style={styles.title}>Màn hình bắt đầu</Text>
                <Text style={styles.description}>Chọn màn hình xuất hiện khi mở ứng dụng</Text>
            </View>

            <View style={styles.wrapper}>
                <View style={styles.startListWrapper}>
                    <View style={styles.startList}>
                        <Pressable
                         style={styles.startItem}
                         onPress={()=>{setStartScreen([true,false,false])}}>
                            <Text style={[styles.label, startScreen[0]?styles.selectedLabel:styles.unSelectedLabel]}>Vé của tôi</Text>
                        </Pressable>
                        <Pressable
                         style={styles.startItem}
                         onPress={()=>{setStartScreen([false,true,false])}}>
                            <Text style={[styles.label, startScreen[1]?styles.selectedLabel:styles.unSelectedLabel]}>Tra cứu</Text>
                        </Pressable>
                        <Pressable
                         style={styles.startItem}
                         onPress={()=>{setStartScreen([false,false,true])}}>
                            <Text style={[styles.label, startScreen[2]?styles.selectedLabel:styles.unSelectedLabel]}>Trang của tôi</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.startScreenSample}>
                    <View style={[styles.startImageWrapper, startScreen[0]?{zIndex: 3}:{zIndex: 1}]}>
                        <Image
                            style={[styles.startImage, {right: '50%'}, startScreen[0]?styles.selectedScreen:styles.unSelectedScreen]}
                            source={require('../../../assets/start/ticket.png')}
                        />
                    </View>
                    <View style={[styles.startImageWrapper, startScreen[1]?{zIndex: 3}:{zIndex: 2}]}>
                        <Image
                            style={[styles.startImage, startScreen[1]?styles.selectedScreen:styles.unSelectedScreen]}
                            source={require('../../../assets/start/initial.png')}
                        />
                    </View>

                    <View style={[styles.startImageWrapper, startScreen[2]?{zIndex: 3}:{zIndex: 1}]}>
                        <Image
                            style={[styles.startImage, {left: '50%'}, startScreen[2]?styles.selectedScreen:styles.unSelectedScreen]}
                            source={require('../../../assets/start/mypage.png')}
                        />
                    </View>


                </View>
            </View>

            <Pressable style={styles.saveBtn} onPress={() => Alert.alert(`BusGuide đã lưu màn hình bắt đầu của bạn`)}>
                <Text style={{color: '#fff'}}>Lưu</Text>
            </Pressable>

        </View>
      </SafeAreaView>
    );
    // return (
        // <View>
        //     <Text style={styles.title}>Màn hình bắt đàu</Text>
        //     <Text style={styles.title}>Chọn màn hình xuất hiện khi mở ứng dụng</Text>
        // </View>
    // )

}

const styles = StyleSheet.create({
    title: {
        marginBottom: 12, fontSize: 24, fontWeight: '500',
    },
    description: {
        marginBottom: 12, fontSize: 14, fontWeight: '400', color: '#404040',
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
        // marginHorizontal:24,
        marginTop: 12,
    },
    wrapper: {
    },
    startListWrapper: {
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',

    },
    startList: {
        display: 'flex',
        flexDirection: 'row',
        height: 44,
        backgroundColor: '#FAFAFA',
        borderRadius: 16,
    },
    startItem: {
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    startScreenSample: {
        backgroundColor: '#FF8811',
        position: 'relative',
        borderRadius: 24,
        height: 380,
        marginBottom: 12,
    },
    startImageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startImage: {
        width: 140,
        height: 280,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#000',
        position: 'absolute',
    },
    selectedScreen: {
    },
    label: {
        fontSize: 14,
        margin: 6,

    },
    unSelectedLabel: {
        fontWeight: '400',
        color: '#9D9D9D',
    },
    selectedLabel: {
        fontWeight: '600',
        color: '#1F1F1F',
    },
    unSelectedScreen: {
        height: 240,
        width: 120,
    },


})