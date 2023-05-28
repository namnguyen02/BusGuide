import React, { useState } from "react";

import { StyleSheet, View, Text, Pressable ,Image, ScrollView} from "react-native";
import {
  TextInput as RNPTextInput,
  Checkbox as RNPCheckbox,
} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { RootScreens } from "..";
import {StackParamList} from '@/Navigation/Register'


export const Register1 = (props: {
  onNavigate: (string: RootScreens) => void;

}) => {
  const [checkboxchecked, setCheckboxchecked] = useState(true);
  const navigation = useNavigation<StackParamList>();

  return (
    <View style={styles.register1}>
      <View style={styles.frameParent}>
        <View style={styles.maskGroupParent}>
          <Image
            style={[styles.maskGroupIcon, styles.groupPosition]}
            source={require("../../../assets/images/Register1/background.png")}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.frameLayout]} />
              <View style={[styles.frameItem, styles.frameLayout]} />
              <View style={[styles.frameItem, styles.frameLayout]} />
              <View style={[styles.frameItem, styles.frameLayout]} />
            </View>
            <View style={styles.thngTinTiKhonParent}>
              <Text style={[styles.thngTinTi, styles.inMtSFlexBox]}>
                Thông tin tài khoản
              </Text>
              <Text style={[styles.inMtS, styles.ngClr]}>
                Điền một số thông tin để tạo tài khoản mới
              </Text>
            </View>
          </View>

        </View>
        <View style={styles.frameWrapper}>
          <ScrollView style={styles.frameContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.frameContainer}>
              <View style={styles.frameContainer}>
                <Text style={[styles.tnNgNhp, styles.mtKhuTypo]}>
                  Tên đăng nhập
                </Text>
                <RNPTextInput
                  style={[styles.frameChild3, styles.frameChild3FlexBox]}
                  placeholder="Tên đăng nhập"

                  mode="flat"
                  theme={{ colors: { background: "#fafafa" } }}
                />
                {/* <View style={[styles.frameChild3, styles.frameChild3FlexBox]} /> */}
              </View>
              <View style={styles.mtKhuParent}>
                <Text style={[styles.mtKhu, styles.mtKhuTypo]}>Mật khẩu</Text>
                <RNPTextInput
                  style={[styles.frameChild3, styles.frameChild3FlexBox]}
                  placeholder="Mật khẩu"

                  mode="flat"
                  theme={{ colors: { background: "#fafafa" } }}
                />
              </View>
              <View style={styles.mtKhuParent}>
                <Text style={[styles.mtKhu, styles.mtKhuTypo]}>
                  Số điện thoại
                </Text>
                <RNPTextInput
                  style={[styles.frameChild3, styles.frameChild3FlexBox]}
                  placeholder="Số điện thoại"

                  mode="flat"
                  placeholderTextColor="#1f1f1f"
                  theme={{ colors: { text: "#1f1f1f", background: "#fafafa" } }}
                />
              </View>
            </View>
            <View style={styles.checkboxParent}>
              <View>
                <RNPCheckbox
                  status={checkboxchecked ? "checked" : "unchecked"}
                  onPress={() => setCheckboxchecked(!checkboxchecked)}
                  color="#ff8811"
                />
              </View>
              <View style={styles.ngIuKhonVChnhSchWrapper}>
                <Text style={[styles.ngIuContainer, styles.mtKhuTypo]}>
                  <Text style={styles.ngClr}>{`Đồng ý `}</Text>
                  <Text style={[styles.iuKhon, styles.iuKhonTypo]}>
                    điều khoản
                  </Text>
                  <Text style={styles.ngClr}>{` và `}</Text>
                  <Text style={[styles.iuKhon, styles.iuKhonTypo]}>
                    chính sách riêng tư
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.shadow}>
          <View style={[styles.shadowChild, styles.childPosition]} />
        </View>
        <View style={[styles.frameWrapper1, styles.frameSpaceBlock]}>
          <Pressable style={[styles.tipTcWrapper, styles.frameChild3FlexBox]} onPress={() => navigation.navigate('Register2')}>
            <Text style={[styles.tipTc, styles.mtKhuTypo]}>Tiếp tục</Text>
          </Pressable>
        </View>
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
    borderRadius: 9999,
  },
  inMtSFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  ngClr: {
    color: "#404040",

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
  mtKhuTypo: {
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
  },
  frameChild3FlexBox: {
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  iuKhonTypo: {
    color: "#1f1f1f",

    fontWeight: "600",
  },
  maskGroupIcon: {
    width: 544,
    height: 363,
  },
  frameChild: {
    backgroundColor: "#ff8811",
    borderColor: "#ffd89f",
    borderWidth: 5,
    height: 20,
    borderStyle: "solid",
    width: 30,
    borderRadius: 9999,
  },
  frameItem: {
    backgroundColor: "#f5f5f5",
    marginLeft: 10,
    height: 12,
    width: 30,
    borderRadius: 9999,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  thngTinTi: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 39,
    color: "#1f1f1f",

    fontWeight: "600",
  },
  inMtS: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 27,
    marginTop: 12,
    textAlign: "center",
    alignSelf: "stretch",
  },
  thngTinTiKhonParent: {
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
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    width: 430,
  },
  maskGroupParent: {
    height: 240,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  tnNgNhp: {

    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
    color: "#404040",
  },
  frameChild3: {
    backgroundColor: "#fafafa",
    height: 60,
    marginTop: 16,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  mtKhu: {
    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
    color: "#404040",
    alignSelf: "stretch",
  },
  mtKhuParent: {
    marginTop: 36,
    alignSelf: "stretch",
  },
  iuKhon: {
    letterSpacing: 0.3,
  },
  ngIuContainer: {
    lineHeight: 14,
    fontSize: 14,
    textAlign: "left",
  },
  ngIuKhonVChnhSchWrapper: {
    marginLeft: 12,
    flexDirection: "row",
  },
  checkboxParent: {
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    paddingLeft: 24,
    paddingTop: 36,
    paddingRight:36,
    paddingBottom: 36,
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
  tipTc: {
    letterSpacing: 0.4,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 14,
    fontSize: 14,
    textAlign: "left",
  },
  tipTcWrapper: {
    backgroundColor: "#1a1528",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
  },
  frameWrapper1: {
    paddingTop: 20,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  register1: {
    height: 955,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

// export default Register1;
