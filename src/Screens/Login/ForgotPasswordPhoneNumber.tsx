import * as React from "react";

import { StyleSheet, View, Text, TextInput, Pressable ,Image} from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Login'


export const ForgotPasswordPhoneNumber = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const navigation = useNavigation<StackParamList>();
  return (
    <View style={styles.forgotPasswordPhoneNumber}>
      <View style={styles.frameParent}>
        <View style={styles.maskGroupParent}>
          <Image
            style={[styles.maskGroupIcon, styles.groupPosition]}
            source={require("../../../assets/images/ForgotPasswordPhoneNumber/background.png")}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={[styles.logosWrapper, styles.frameChildFlexBox]}>
              <Image
                style={styles.logosIcon}
                source={require("../../../assets/images/ForgotPasswordPhoneNumber/logo.png")}
              />
            </View>
            <View style={styles.tLiMtKhuParent}>
              <Text style={[styles.tLiMt, styles.tLiMtFlexBox]}>
                Đặt lại mật khẩu
              </Text>
              <Text style={[styles.nhpSIn, styles.textTypo]}>
                Nhập số điện thoại được liên kết với tài khoản của bạn
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <View style={[styles.frameChild, styles.frameChildFlexBox]} />
            <View style={[styles.frameItem, styles.frameItemFlexBox]} />
          </View>
          <View style={[styles.frameParent1, styles.wrapperFlexBox1]}>
            <View style={styles.wrapperFlexBox}>
              <Text style={[styles.text, styles.textTypo]}>+84</Text>
            </View>
            <TextInput
              style={[styles.frameInner, styles.wrapperFlexBox]}
              placeholder="0000"
              keyboardType="default"
              placeholderTextColor="#9d9d9d"
            />
            <TextInput
              style={[styles.frameInner, styles.wrapperFlexBox]}
              placeholder="0000"
              keyboardType="default"
              placeholderTextColor="#9d9d9d"
            />
            <TextInput
              style={[styles.frameInner, styles.wrapperFlexBox]}
              placeholder="0000"
              keyboardType="default"
              placeholderTextColor="#9d9d9d"
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <View style={styles.shadowChild} />
        </View>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <Pressable style={[styles.giMBoMtWrapper, styles.frameItemFlexBox]}
          onPress={() => navigation.navigate('ForgotPasswordSecurityCode')}
          >
            <Text style={styles.giMBo}>Gửi mã bảo mật</Text>
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
  frameChildFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  tLiMtFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  textTypo: {
    fontSize: 16,
  },
  frameItemFlexBox: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperFlexBox1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    padding: 16,
    height: 68,
    backgroundColor: "#fafafa",
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
  logosIcon: {
    width: 60,
    height: 60,
  },
  logosWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tLiMt: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "600",
    color: "#1f1f1f",
  },
  nhpSIn: {
    letterSpacing: 0.2,
    lineHeight: 27,
    color: "#404040",
    marginTop: 12,
    textAlign: "center",
    alignSelf: "stretch",
  },
  tLiMtKhuParent: {
    width: 342,
    marginTop: 16,
    alignItems: "center",
  },
  frameGroup: {
    paddingTop: 96,
    alignItems: "center",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroupParent: {
    height: 323,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: 14,
    flex: 1,
    backgroundColor: "#fff",
  },
  frameItem: {
    marginLeft: 4,
    flex: 1,
  },
  frameView: {
    padding: 3,
    backgroundColor: "#fafafa",
    borderRadius: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  text: {
    lineHeight: 16,
    textAlign: "left",
    color: "#1f1f1f",
  },
  frameInner: {
    marginLeft: 10,
    fontSize: 16,
  },
  frameParent1: {
    marginTop: 48,
  },
  frameContainer: {
    paddingTop: 48,
    paddingHorizontal: 24,
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
  giMBo: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    fontWeight: "700",
    color: "#fff",
    textAlign: "left",
  },
  giMBoMtWrapper: {
    backgroundColor: "#1a1528",
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingTop: 24,
    alignSelf: "stretch",
    backgroundColor: "#fff",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  forgotPasswordPhoneNumber: {
    height: 955,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

// export default ForgotPasswordPhoneNumber;
