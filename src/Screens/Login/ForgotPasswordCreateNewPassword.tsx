import * as React from "react";

import { StyleSheet, View, Text, TextInput, Pressable,Image } from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Login'

export const ForgotPasswordCreateNewPassword = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const navigation = useNavigation<StackParamList>();
  return (
    <View style={[styles.forgotPasswordCreateNewC, styles.lockIconLayout1]}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.maskGroupParent}>
            <Image
              style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
              source={require("../../../assets/images/ForgotPasswordCreateNewPassword/background.png")}
            />
            <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
              <View style={[styles.logosWrapper, styles.iconsWrapperFlexBox]}>
                <Image
                  style={styles.logosIcon}
                  source={require("../../../assets/images/ForgotPasswordCreateNewPassword/logo.png")}
                />
              </View>
              <View style={styles.toMtKhuParent}>
                <Text style={styles.toMtKhu}>Tạo mật khẩu</Text>
                <Text style={[styles.toMtKhu1, styles.khuClr]}>
                  Tạo mật khẩu mới cho tài khoản của bạn
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frameView}>
              <View style={styles.frameParent1}>
                <View style={styles.frameParent1}>
                  <View style={styles.frameParent1}>
                    <Text style={[styles.mtKhuMi, styles.xcNhnTypo]}>
                      Mật khẩu mới
                    </Text>
                    <View style={styles.frameWrapper2}>
                      <View
                        style={[
                          styles.frameParent2,
                          styles.frameParent2FlexBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.iconsWrapper,
                            styles.iconsWrapperFlexBox,
                          ]}
                        >
                          <View
                            style={[styles.icons, styles.iconsWrapperFlexBox]}
                          >
                            <Image
                              style={[styles.lockIcon, styles.lockIconLayout]}
                              source={require("../../../assets/images/ForgotPasswordCreateNewPassword/lock.png")}
                            />
                          </View>
                        </View>
                        <Image
                          style={[styles.frameChild, styles.lockIconLayout]}
                          source={require("../../../assets/images/ForgotPasswordCreateNewPassword/vector.png")}
                        />
                        <TextInput
                          style={[styles.frameItem, styles.iconsWrapperFlexBox]}
                          placeholder="Placeholder text"
                          keyboardType="default"
                        />
                      </View>
                    </View>
                    <Text style={[styles.tiThiu8, styles.xcNhnTypo]}>
                      Tối thiểu 8 ký tự, gồm chữ hoa, chữ thường, ký tự và số
                    </Text>
                  </View>
                </View>
                <View style={styles.frameWrapper3}>
                  <View style={styles.frameParent1}>
                    <Text style={[styles.mtKhuMi, styles.xcNhnTypo]}>
                      Nhập lại mật khẩu mới
                    </Text>
                    <View style={styles.frameWrapper2}>
                      <View
                        style={[
                          styles.frameParent2,
                          styles.frameParent2FlexBox,
                        ]}
                      >
                        <View
                          style={[
                            styles.iconsWrapper,
                            styles.iconsWrapperFlexBox,
                          ]}
                        >
                          <View
                            style={[styles.icons, styles.iconsWrapperFlexBox]}
                          >
                            <Image
                              style={[styles.lockIcon, styles.lockIconLayout]}
                              source={require("../../../assets/images/ForgotPasswordCreateNewPassword/lock.png")}
                            />
                          </View>
                        </View>
                        <Image
                          style={[styles.frameChild, styles.lockIconLayout]}
                          source={require("../../../assets/images/ForgotPasswordCreateNewPassword/vector.png")}
                        />
                        <TextInput
                          style={[styles.frameItem, styles.iconsWrapperFlexBox]}
                          placeholder="Placeholder text"
                          keyboardType="default"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.shadow}>
          <View style={styles.shadowChild} />
        </View>
        <View style={[styles.frameWrapper5, styles.frameSpaceBlock]}>
          <Pressable style={[styles.xcNhnWrapper, styles.frameParent2FlexBox]} onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[styles.xcNhn, styles.xcNhnTypo]}>Xác nhận</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lockIconLayout1: {
    width: "100%",
    flex: 1,
  },
  frameFlexBox: {
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
  iconsWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  khuClr: {
    color: "#404040",
    alignSelf: "stretch",
  },
  xcNhnTypo: {
    textAlign: "left",
    fontSize: 14,
  },
  frameParent2FlexBox: {
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  lockIconLayout: {
    maxHeight: "100%",
    alignSelf: "stretch",
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
    alignSelf: "stretch",
  },
  toMtKhu: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "600",
    color: "#1f1f1f",
    textAlign: "center",
    alignSelf: "stretch",
  },
  toMtKhu1: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 27,
    marginTop: 12,
    color: "#404040",
    textAlign: "center",
  },
  toMtKhuParent: {
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
    height: 297,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  mtKhuMi: {
    letterSpacing: 0.3,
    fontWeight: "500",
    lineHeight: 14,
    textAlign: "left",
    fontSize: 14,
    color: "#404040",
    alignSelf: "stretch",
  },
  lockIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  icons: {
    width: 28,
    height: 28,
    justifyContent: "center",
  },
  iconsWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 3,
  },
  frameItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent2: {
    backgroundColor: "#fafafa",
    height: 60,
  },
  frameWrapper2: {
    alignItems: "flex-end",
    marginTop: 16,
    alignSelf: "stretch",
  },
  tiThiu8: {
    lineHeight: 20,
    color: "#9d9d9d",
    textAlign: "left",
    fontSize: 14,
    marginTop: 16,
    alignSelf: "stretch",
  },
  frameParent1: {
    alignSelf: "stretch",
  },
  frameWrapper3: {
    marginTop: 36,
    alignSelf: "stretch",
  },
  frameView: {
    height: 453,
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingBottom: 28,
    marginTop: 48,
    paddingHorizontal: 24,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    alignItems: "center",
    alignSelf: "stretch",
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
    letterSpacing: 0.4,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 14,
    textAlign: "left",
    fontSize: 14,
  },
  xcNhnWrapper: {
    backgroundColor: "#1a1528",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
  },
  frameWrapper5: {
    paddingTop: 24,
    alignSelf: "stretch",
    backgroundColor: "#fff",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  forgotPasswordCreateNewC: {
    height: 955,
    backgroundColor: "#fff",
  },
});

// export default ForgotPasswordCreateNewPassword;
