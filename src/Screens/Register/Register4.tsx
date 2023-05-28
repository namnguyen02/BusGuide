import * as React from "react";

import { StyleSheet, View, Text, TextInput, Pressable ,Image} from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Register'


export const Register4 = (props: {
  onNavigate: (string: RootScreens) => void;

}) => {
  const navigation = useNavigation<StackParamList>();

  return (
    <View style={styles.register3}>
      <View style={styles.register3Inner}>
        <View style={styles.register3Inner}>
          <View style={styles.maskGroupParent}>
            <Image
              style={[styles.maskGroupIcon, styles.groupPosition]}
              source={require("../../../assets/images/Register4/background.png")}
            />
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={styles.rectangleParent}>
                <View style={[styles.frameChild, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={styles.rectangleView} />
              </View>
              <View style={styles.nhpMXcMinhParent}>
                <Text style={styles.nhpMXc}>Nhập mã xác minh</Text>
                <Text style={styles.chngTiContainer}>
                  <Text
                    style={styles.chngTi}
                  >{`Chúng tôi đã gửi cho bạn mã xác minh đến số điện thoại `}</Text>
                  <Text style={styles.text}>+84 522 205 272</Text>
                </Text>
              </View>
            </View>

          </View>
          <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
            <View style={styles.frameView}>
              <TextInput
                style={styles.frameFlexBox}
                keyboardType="default"
                placeholderTextColor="#1f1f1f"
              />
              <TextInput
                style={[styles.frameChild3, styles.frameFlexBox]}
                keyboardType="default"
                placeholderTextColor="#1f1f1f"
              />
              <TextInput
                style={[styles.frameChild3, styles.frameFlexBox]}
                keyboardType="default"
                placeholderTextColor="#1f1f1f"
              />
              <TextInput
                style={[styles.frameChild3, styles.frameFlexBox]}
                keyboardType="default"
                placeholderTextColor="#1f1f1f"
              />
              <TextInput
                style={[styles.frameChild3, styles.frameFlexBox]}
                keyboardType="default"
                placeholderTextColor="#1f1f1f"
              />
            </View>
            <View style={styles.frameParent1}>
              <View style={styles.chaNhnCMWrapper}>
                <Text style={[styles.chaNhnC, styles.giLiTypo]}>
                  Chưa nhận được mã?
                </Text>
              </View>
              <Text style={[styles.giLi, styles.giLiTypo]}>Gửi lại</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.shadow}>
        <View style={[styles.shadowChild, styles.childPosition]} />
      </View>
      <View style={[styles.register3Child, styles.frameSpaceBlock]}>
        <Pressable style={styles.honThnhWrapper} onPress={() => navigation.navigate('RegisterFinal')}>
          <Text style={styles.honThnh}>Hoàn thành</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: -50,
    top: -60,
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  frameLayout: {
    width: 30,
    backgroundColor: "#f5f5f5",
    borderRadius: 9999,
    height: 12,
  },
  childPosition: {
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frameChildLayout: {
    height: 6,
    width: 6,
    borderWidth: 1.5,
    borderColor: "#211b35",
    borderStyle: "solid",
    borderRadius: 9999,
  },
  frameFlexBox: {
    padding: 16,
    backgroundColor: "#fafafa",
    borderRadius: 16,
    justifyContent: "center",
    height: 68,
    fontWeight: "600",
    fontSize: 28,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  giLiTypo: {
    lineHeight: 16,
    textAlign: "left",
    fontSize: 16,
  },
  maskGroupIcon: {
    width: 544,
    height: 363,
  },
  frameChild: {
    height: 12,
  },
  frameItem: {
    marginLeft: 10,
    height: 12,
  },
  rectangleView: {
    backgroundColor: "#ff8811",
    borderColor: "#ffd89f",
    borderWidth: 5,
    height: 20,
    borderStyle: "solid",
    marginLeft: 10,
    width: 30,
    borderRadius: 9999,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  nhpMXc: {
    letterSpacing: -0.3,
    lineHeight: 39,
    textAlign: "center",
    fontSize: 28,
    color:  "#1f1f1f",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  chngTi: {
    color:  "#1f1f1f",
  },
  text: {
    color: "#1a1528",
  },
  chngTiContainer: {
    lineHeight: 27,
    marginTop: 12,
    letterSpacing: 0.2,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "stretch",
  },
  nhpMXcMinhParent: {
    width: 342,
    marginTop: 16,
    alignItems: "center",
  },
  frameGroup: {
    paddingTop: 96,
    alignItems: "center",
    // width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    width: 32,
    height: 12,
  },
  dynamicIslandChild: {
    top: "0%",
    bottom: "0%",
    borderRadius: 20,
    backgroundColor: "#000",
  },
  frameChild2: {
    marginTop: -2,
  },
  rectangleGroup: {
    height: "27.03%",
    width: "4.8%",
    top: "35.14%",
    right: "8.8%",
    bottom: "37.84%",
    left: "86.4%",
    position: "absolute",
  },
  dynamicIsland: {
    left: 116,
    width: 125,
    display: "none",
    height: 37,
    top: 0,
    position: "absolute",
  },
  mobileSignalIcon: {
    width: 20,
    height: 13,
  },
  wifiIcon: {
    width: 19,
    marginLeft: 5.83,
    height: 13,
  },
  batteryIcon: {
    width: 28,
    height: 15,
    marginLeft: 5.83,
  },
  statusIcons: {
    top: 13,
    left: 289,
    flexDirection: "row",
    position: "absolute",
  },
  parent: {
    height: 37,
    flex: 1,
  },
  iphoneActionBar: {
    paddingLeft: 36,
    paddingTop: 10,
    paddingRight: 28,
    paddingBottom: 7,
    alignItems: "flex-end",
    justifyContent: "center",
    height: 68,
    flexDirection: "row",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroupParent: {
    height: 240,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameChild3: {
    marginLeft: 10,
  },
  frameView: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  chaNhnC: {
    color:  "#9d9d9d",
    textAlign: "left",
  },
  chaNhnCMWrapper: {
    flexDirection: "row",
  },
  giLi: {
    textAlign: "left",
    letterSpacing: 0.2,
    color:  "#1f1f1f",
    fontWeight: "600",
    lineHeight: 16,
    marginTop: 16,
  },
  frameParent1: {
    marginTop: 36,
    alignItems: "center",
  },
  frameContainer: {
    paddingTop: 36,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  register3Inner: {
    alignSelf: "stretch",
    flex: 1,
  },
  shadowChild: {
    top: "100%",
    bottom: "-100%",
    backgroundColor: "#ccc",
  },
  shadow: {
    height: 3,
    width: 430,
  },
  honThnh: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  honThnhWrapper: {
    backgroundColor: "#1a1528",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  register3Child: {
    paddingTop: 20,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  register3: {
    height: 955,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

// export default Register4;
