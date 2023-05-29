import * as React from "react";

import { StyleSheet, View, Text, Pressable, TextInput,Image } from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Register'


export const Register3 = (props: {
  onNavigate: (string: RootScreens) => void;

}) => {
  const navigation = useNavigation<StackParamList>();

  return (
    <View style={styles.register2}>
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View style={styles.maskGroupParent}>
            <Image
              style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
              source={require("../../../assets/images/Register3/background.png")}
            />
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={styles.rectangleParent}>
                <View style={styles.frameChild} />
                <View style={[styles.frameItem, styles.frameLayout]} />
                <View style={[styles.frameInner, styles.frameLayout]} />
                <View style={[styles.frameItem, styles.frameLayout]} />
              </View>
              <View style={styles.phngThcThanhTonParent}>
                <Text style={styles.phngThcThanh}>Phương thức thanh toán</Text>
                <Text style={styles.linKtV}>
                  Liên kết ví điện tử hoặc thêm thẻ tín dụng
                </Text>
              </View>
            </View>

          </View>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon}
              source={require("../../../assets/images/Register3/vector.png")}
            />
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.frameWrapper}>
                <View>
                  <Image
                    style={styles.momoLogoIcon}
                    source={require("../../../assets/images/Register3/google_wallet.png")}
                  />
                </View>
              </View>
              <Pressable style={styles.framePressable}>
                <View style={styles.wrapperSpaceBlock}>
                  <Text style={[styles.linKt, styles.bQuaTypo]}>Liên kết</Text>
                </View>
              </Pressable>
            </View>
            <Image
              style={styles.vectorIcon}
              source={require("../../../assets/images/Register3/vector.png")}
            />
            <View style={styles.frameParent1}>
              <View style={styles.mcSymbol1Wrapper}>
                <View style={styles.rectangleParent}>
                  <Image
                    style={styles.groupIcon}
                    source={require("../../../assets/images/Register3/mastercard.png")}
                  />
                  <Image
                    style={styles.visaBrandmarkBlueRgb20211Icon}
                    source={require("../../../assets/images/Register3/visa.png")}
                  />
                </View>
              </View>
              <View style={styles.frameParent2}>
                <TextInput
                  style={[styles.frameTextinput, styles.frameChildSpaceBlock]}
                  placeholder="0000"
                  keyboardType="default"
                  placeholderTextColor="#9d9d9d"
                />
                <View style={styles.frameParent3}>
                  <TextInput
                    style={[styles.frameChild4, styles.frameChildSpaceBlock]}
                    placeholder="MM/YYYY"
                    keyboardType="default"
                    placeholderTextColor="#9d9d9d"
                  />
                  <TextInput
                    style={[styles.frameChild5, styles.frameChildSpaceBlock]}
                    placeholder="XXX"
                    keyboardType="default"
                    placeholderTextColor="#9d9d9d"
                  />
                </View>
              </View>
              <Pressable
                style={[styles.thmThWrapper, styles.wrapperSpaceBlock]}
              >
                <Text style={[styles.linKt, styles.bQuaTypo]}>Thêm thẻ</Text>
              </Pressable>
            </View>
            <Image
              style={styles.vectorIcon}
              source={require("../../../assets/images/Register3/vector.png")}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <View style={[styles.shadowChild, styles.childPosition]} />
        </View>
        <View style={[styles.frameParent4, styles.frameSpaceBlock]}>
          <Pressable style={[styles.bQuaWrapper, styles.wrapperFlexBox]} onPress={() => navigation.navigate('Register4')}>
            <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>
          </Pressable>
          <Pressable style={[styles.tipTcWrapper, styles.wrapperFlexBox]} onPress={() => navigation.navigate('Register4')}>
            <Text style={[styles.linKt, styles.bQuaTypo]}>Tiếp tục</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupIconPosition: {
    left: -50,
    top: -60,
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  frameLayout: {
    marginLeft: 10,
    width: 30,
    borderRadius: 9999,
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
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  bQuaTypo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
  },
  frameChildSpaceBlock: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#fafafa",
    borderRadius: 16,
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperSpaceBlock: {
    paddingVertical: 16,
    backgroundColor: "#1a1528",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  wrapperFlexBox: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  maskGroupIcon: {
    width: 544,
    height: 363,
  },
  frameChild: {
    height: 12,
    width: 30,
    borderRadius: 9999,
    backgroundColor: "#f5f5f5",
  },
  frameItem: {
    height: 12,
    backgroundColor: "#f5f5f5",
    marginLeft: 10,
  },
  frameInner: {
    backgroundColor: "#ff8811",
    borderColor: "#ffd89f",
    borderWidth: 5,
    height: 20,
    borderStyle: "solid",
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  phngThcThanh: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "600",
    textAlign: "center",
    color: "#1f1f1f",
    alignSelf: "stretch",
  },
  linKtV: {
    letterSpacing: 0.2,
    lineHeight: 27,
    color: "#404040",
    marginTop: 12,
    fontSize: 16,
    textAlign: "center",
    alignSelf: "stretch",
  },
  phngThcThanhTonParent: {
    width: 342,
    marginTop: 16,
    alignItems: "center",
  },
  frameContainer: {
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
    height: 68,
    paddingLeft: 36,
    paddingTop: 10,
    paddingRight: 28,
    paddingBottom: 7,
    justifyContent: "center",
    alignItems: "flex-end",
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
  vectorIcon: {
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  momoLogoIcon: {
    width: 123,
    height: 44,
  },
  frameWrapper: {
    width: 147,
    flexDirection: "row",
    alignItems: "center",
  },
  linKt: {
    color: "#fff",
  },
  framePressable: {
    borderRadius: 16,
    flexDirection: "row",
  },
  frameView: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  groupIcon: {
    width: 45,
    height: 32,
  },
  visaBrandmarkBlueRgb20211Icon: {
    width: 56,
    height: 18,
    marginLeft: 12,
    overflow: "hidden",
  },
  mcSymbol1Wrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameTextinput: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameChild4: {
    flex: 1,
  },
  frameChild5: {
    marginLeft: 14,
    flex: 1,
  },
  frameParent3: {
    marginTop: 14,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent2: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  thmThWrapper: {
    marginTop: 24,
  },
  frameParent1: {
    justifyContent: "flex-end",
    padding: 24,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  vectorParent: {
    paddingHorizontal: 0,
    paddingVertical: 36,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
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
  bQua: {
    color: "#1f1f1f",
    fontWeight: "700",
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
  },
  bQuaWrapper: {
    borderColor: "#efeded",
    borderWidth: 1,
    borderStyle: "solid",
  },
  tipTcWrapper: {
    backgroundColor: "#1a1528",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  frameParent4: {
    paddingTop: 20,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#fff",
  },
  register2: {
    height: 955,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

// export default Register3;
