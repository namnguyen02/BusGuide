import * as React from "react";

import { StyleSheet, View, Text, TextInput, Pressable ,Image} from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Login'


export const ForgotPasswordSecurityCode = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const navigation = useNavigation<StackParamList>();
  return (
    <View style={styles.forgotPasswordSecurityCod}>
      <View style={[styles.frameParent, styles.frameFlexBox1]}>
        <View style={[styles.frameGroup, styles.frameFlexBox1]}>
          <View style={styles.maskGroupParent}>
            <Image
              style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
              source={require("../../../assets/images/ForgotPasswordSecurityCode/background.png")}
            />
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={styles.logosWrapper}>
                <Image
                  style={styles.logosIcon}
                  source={require("../../../assets/images/ForgotPasswordSecurityCode/logo.png")}
                />
              </View>
              <View style={styles.nhpMBoMtParent}>
                <Text style={styles.nhpMBo}>Nhập mã bảo mật</Text>
                <Text style={styles.chngTiContainer}>
                  <Text
                    style={styles.chngTi}
                  >{`Chúng tôi đã gửi cho bạn mã bảo mật đến số điện thoại `}</Text>
                  <Text style={styles.text}>+84 522 205 272</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameGroup, styles.frameFlexBox1]}>
              <View style={styles.frameParent1}>
                <TextInput
                  style={styles.frameFlexBox}
                  keyboardType="default"
                  placeholderTextColor="#1f1f1f"
                />
                <TextInput
                  style={[styles.frameItem, styles.frameFlexBox]}
                  keyboardType="default"
                  placeholderTextColor="#1f1f1f"
                />
                <TextInput
                  style={[styles.frameItem, styles.frameFlexBox]}
                  keyboardType="default"
                  placeholderTextColor="#1f1f1f"
                />
                <TextInput
                  style={[styles.frameItem, styles.frameFlexBox]}
                  keyboardType="default"
                  placeholderTextColor="#1f1f1f"
                />
                <TextInput
                  style={[styles.frameItem, styles.frameFlexBox]}
                  keyboardType="default"
                  placeholderTextColor="#1f1f1f"
                />
              </View>
              <View style={styles.frameParent2}>
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
          <View style={styles.shadowChild} />
        </View>
        <View style={[styles.frameWrapper1, styles.frameSpaceBlock]}>
          <Pressable style={styles.xcNhnWrapper} onPress={() => navigation.navigate('ForgotPasswordCreateNewPassword')}>
            <Text style={styles.xcNhn}>Xác nhận</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    flex: 1,
    alignSelf: "stretch",
  },
  maskGroupIconPosition: {
    left: -50,
    top: -60,
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  frameFlexBox: {
    padding: 16,
    height: 68,
    backgroundColor: "#fafafa",
    borderRadius: 16,
    fontWeight: "600",
    fontSize: 28,
    justifyContent: "center",
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
  logosIcon: {
    width: 60,
    height: 60,
  },
  logosWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  nhpMBo: {
    letterSpacing: -0.3,
    lineHeight: 39,
    textAlign: "center",
    fontSize: 28,
    color: "#1f1f1f",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  chngTi: {
    color: "#1f1f1f",
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
  nhpMBoMtParent: {
    width: 342,
    marginTop: 16,
    alignItems: "center",
  },
  frameContainer: {
    paddingTop: 96,
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  maskGroupParent: {
    height: 323,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameItem: {
    marginLeft: 10,
  },
  frameParent1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  chaNhnC: {
    color: "#9d9d9d",
    textAlign: "left",
  },
  chaNhnCMWrapper: {
    flexDirection: "row",
  },
  giLi: {
    textAlign: "left",
    letterSpacing: 0.2,
    color: "#1f1f1f",
    fontWeight: "600",
    lineHeight: 16,
    marginTop: 16,
  },
  frameParent2: {
    marginTop: 36,
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingBottom: 28,
    marginTop: 48,
    paddingHorizontal: 24,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  shadowChild: {
    height: "100%",
    top: "100%",
    right: "0%",
    bottom: "-100%",
    left: "0%",
    backgroundColor: "#ccc",
    position: "absolute",
    width: "100%",
  },
  shadow: {
    height: 3,
    width: 430,
  },
  xcNhn: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  xcNhnWrapper: {
    backgroundColor: "#1a1528",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameWrapper1: {
    paddingTop: 24,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 48,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  forgotPasswordSecurityCod: {
    height: 955,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

// export default ForgotPasswordSecurityCode;
