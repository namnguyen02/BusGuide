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
    Dimensions
  } from 'react-native';

  const screenWidth = Dimensions.get("window").width;

const introductions = [
    {id: 1, image: {name: '1', uri: require("../../../assets/introduction/1.png")}, title: "Kế hoạch cho chuyến đi", description: "Lập kế hoạch giúp bạn có thể tìm chuyến đi tiếp theo bằng xe buýt một cách nhanh chóng và dễ dàng."},
    {id: 2, image: {name: '2', uri: require("../../../assets/introduction/2.png")}, title: "Xem giao thông lân cận", description: "Với lưu lượng truy cập trực tiếp, bạn sẽ thấy các tùy chọn giao thông trong khoảng cách đi bộ tối đa của mình."},
    {id: 3, image: {name: '3', uri: require("../../../assets/introduction/3.png")}, title: "Thông tin người dùng", description: "Chỉnh sửa thông tin của bạn từ đây, xem các chuyến đi bạn theo dõi, xem trạng thái thẻ và các chuyến đi trước đó."},
    {id: 4, image: {name: '4', uri: require("../../../assets/introduction/4.png")}, title: "Tích hợp thanh toán", description: "Mua vé theo chuyến đi. Sử dụng Mastercard, Visa và Google Wallet làm phương thức thanh toán."},
]

export const IntroductionScreen = ({navigation}) =>  {
    const sliderActive = {
        backgroundColor: '#FF8811',
        borderColor: '#FFD89F',
        borderWidth: 5,
        width: 30,
        height: 20,
    }

    const sliderNotActive = {
        backgroundColor: '#F5F5F5',
    }
    const [slide, setSlide] = useState({
        1: true,
        2: false,
        3: false,
        4: false,
    })
    // const resetSlider = () => {setSlider([false, false, false, false])}
    // const changeState = (slider) => {setSlider(...slider, ['1']: true)}
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.imageSlide}>
                {introductions.map(({id, image }, index) => {return (
                    <Image key={id}
                        style={[styles.image, slide[id]?{}:{display:'none'}]}
                        source={image.uri}
                    />
                )})}
            </View>

            {introductions.map(({ id, title, description }, index) => {
                return (
                    <View style={styles.textWrapper} key={id}>
                        <View style={[styles.guideWrapper, slide[id]?{}:{display:'none'}]}>
                            <Text style={{marginBottom: 28, fontSize: 24, fontWeight: '600'}}>{title}</Text>
                            <Text style={{marginBottom: 18, fontSize: 16, fontWeight: '400', lineHeight: 27}}>{description}</Text>
                        </View>
                    </View>
            );
            })}
            <View style={styles.sliderBtnList}>
                {introductions.map(({ id }, index) => {
                    return (
                        <View key={id} style={[styles.sliderBtn, slide[id]?sliderActive:{}]}></View>
                    )
                })}
            </View>
            <View style={styles.sliderBtnList}>
                {introductions.map(({ id }, index) => {
                    return (
                        <Pressable key={id}
                            style={[styles.nextBtn, slide[id]?{}:{display:'none'}]}
                            onPress={() => {id+1==5?setSlide({...slide, [id]: false, [1]: true}):setSlide({...slide, [id]: false, [id+1]: true})}}
                            >
                            <Text style={{color: '#fff'}}>Tiếp tục</Text>
                        </Pressable>
                    )
                })}
            </View>

        </View>

      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    wrapper: {
        alignItems: 'center',
    },
    imageSlide: {
        display: 'flex',
    },
    image: {
        // position: 'absolute',
        // left:0,
        // top:0,
        // flex: 1,
        height: 340,
        width: screenWidth,
        resizeMode: 'stretch',
    },
    textWrapper: {
        // width: 260,
        marginHorizontal: 24,
    },
    guideWrapper: {
        alignItems: 'center',
        marginTop: 36,
        // position: 'absolute',
        height: 133,
    },
    sliderBtnList: {
        width: 140,
        marginHorizontal: 24,
        marginTop: 18,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderBtn: {
        width: 30,
        height: 12,
        backgroundColor: "#F5F5F5",
        borderRadius: 9999,
        marginHorizontal: 5,
        flex: 1,
    },
    nextBtn: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 44,
        width: 100,
        backgroundColor: "#1A1528",
        borderRadius: 16,
        marginHorizontal:24,
        marginVertical: 12,
        zIndex: 0.5,
    },
})