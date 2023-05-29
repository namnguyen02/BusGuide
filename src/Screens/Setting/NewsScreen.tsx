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
import {Picker} from '@react-native-picker/picker';

const NEWS = [
    {id: 0, date: new Date("2023-4-10"), image: {name: "1", uri: require('../../../assets/news/1.png')}, title: 'BusGuide với giao diện mới và tốc độ được cải thiện',},
    {id: 1, date: new Date("2023-4-11"), image: {name: "2", uri: require('../../../assets/news/2.png')}, title: 'Google Wallet hiện là tùy chọn thanh toán trực tiếp trong ứng dụng',},
    {id: 2, date: new Date("2023-4-12"), image: {name: "3", uri: require('../../../assets/news/3.png')}, title: 'Check in/out bằng điện thoại di động trên các chuyến đi',},
    {id: 3, date: new Date("2023-4-13"), image: {name: "4", uri: require('../../../assets/news/1.png')}, title: 'BusGuide với giao diện mới và tốc độ được cải thiện',},
    {id: 4, date: new Date("2023-4-14"), image: {name: "5", uri: require('../../../assets/news/1.png')}, title: 'BusGuide với giao diện mới và tốc độ được cải thiện',},
]

export const NewsScreen = ({navigation}) =>  {
    const [filter1, setfilter1] = useState("newest");
    const [filter2, setfilter2] = useState("all");
    return (
      <SafeAreaView >
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Tin tức</Text>
            <View style={styles.filterWrapper}>
                <View style={styles.dateFilter}>
                    <Picker
                        selectedValue={filter1}
                        style={{ height: 50, width: 140}}
                        onValueChange={(itemValue, itemIndex) => setfilter1(itemValue)}
                    >
                        <Picker.Item label="Gần đây" value="newest" />
                        <Picker.Item label="Cũ nhất" value="oldest" />
                    </Picker>
                </View>
                <View style={styles.dateFilter}>
                    <Picker
                        selectedValue={filter2}
                        style={{ height: 50, width: 130}}
                        onValueChange={(itemValue, itemIndex) => setfilter2(itemValue)}
                    >
                        <Picker.Item label="Tất cả" value="all" />
                    </Picker>
                </View>


            </View>
            <View style={styles.newsArea}>
                {NEWS.map(({ id, date, image, title }, index) => {
                    return (
                        <View
                            key={id}
                            style={[
                                styles.newWrapper,
                                index === 0 && { borderTopWidth: 0 },
                        ]}>
                            {/* <Image
                                // style={styles.tinyLogo}
                                source={
                                    // require(image)
                                    {uri: 'https://reactnative.dev/img/tiny_logo.png',}
                                }
                            /> */}
                            <Image
                                style={styles.newImage}
                                source={image.uri}
                            />
                            <View style={styles.newInfo}>
                                <Text
                                    style={styles.dateInfo}
                                >{date.toLocaleDateString()}</Text>
                                <Text
                                    style={{fontSize: 20,}}
                                >{title}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        backgroundColor: '#FAFAFA',

    },
    title: {
        marginHorizontal: 24,
        fontSize: 26,
        paddingBottom: 20,
        fontWeight: '500',
    },
    filterWrapper: {
        marginHorizontal: 24,
        display: 'flex',
        flexDirection: 'row',
    },
    dateFilter: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // padding: "10px 14px 10px 20px",
        paddingVertical: 10,
        width: 120,
        height: 44,
        border: "1px solid #D9D9D9",
        borderRadius: 16,
        order: 0,
        flexGrow: 0,

        borderColor: "#D9D9D9",
        borderWidth: 1,
        marginRight: 24,
        marginBottom: 24,
        backgroundColor: "#FFF",
    },
    newsArea: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 24,
        position: 'relative',
        // backgroundColor: "#8F877F",

    },
    newWrapper: {
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderRadius: 24,
        width: '100%',
        height: 350,
        background: "#FFFFFF",
        // boxShadow:
        //     "0px 22px 150px rgba(0, 0, 0, 0.04), 0px 9.19107px 62.6664px rgba(0, 0, 0, 0.0143771), 0px 4.91399px 33.5045px rgba(0, 0, 0, 0.0119221), 0px 2.75474px 18.7823px rgba(0, 0, 0, 0.01), 0px 1.46302px 9.97515px rgba(0, 0, 0, 0.00807786), 0px 0.608796px 4.15088px rgba(0, 0, 0, 0.00562291)",
        order: 0,
        alignSelf: "stretch",
        flexGrow: 0,


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
        overflow: 'hidden',
    },
    newImage: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: "40%",
        borderRadius: 24,
        resizeMode: 'stretch',
        width: '100%'

    },
    newInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // padding: "24px 24px 28px",
        paddingVertical: 24,
        paddingRight: 20,
        paddingLeft: 20,
        position: "absolute",
        height: 140,
        left: 1,
        right: 1,
        bottom: 0,
    },

    dateInfo: {
        paddingBottom: 12,
        fontSize: 16,
        color: '#404040',
    },
})