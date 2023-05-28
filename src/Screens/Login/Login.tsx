import React, { useState } from "react";

import { StyleSheet, View, Text, TextInput, Pressable,Image } from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Login'





export const Login = (props: {
  onNavigate: (string: RootScreens) => void;

}) => {
  const [checkboxchecked, setCheckboxchecked] = useState(true);
  const navigation = useNavigation<StackParamList>();



  return (
    <View style={styles.login}>
      <View style={styles.loginInner}>
        <View style={styles.frameParent}>
          <View style={styles.maskGroupParent}>
            <Image
              style={[styles.maskGroupIcon, styles.groupPosition]}
              source={require("../../../assets/images/Login/background.png")}
            />
            <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
              <View style={[styles.logosWrapper, styles.iconsFlexBox]}>
                <Image
                  style={styles.logosIcon}
                  source={require("../../../assets/images/Login/logo.png")}
                />
              </View>
              <View style={styles.welcomeBackParent}>
                <Text style={[styles.welcomeBack, styles.ngNhpVoFlexBox]}>
                  Welcome back
                </Text>
                <Text style={[styles.ngNhpVo, styles.ngNhpVoFlexBox]}>
                  Đăng nhập vào tài khoản
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
            <View style={styles.loginInner}>
              <View style={styles.frameView}>
                <View style={styles.frameView}>
                  <Text style={[styles.tnNgNhp, styles.nhpTypo]}>
                    Tên đăng nhập
                  </Text>
                  <View
                    style={[styles.frameParent1, styles.frameParentFlexBox]}
                  >
                    <View style={styles.iconsWrapper}>
                      <View style={[styles.icons, styles.iconsFlexBox]}>
                        <Image
                          style={[styles.userIcon, styles.userIconLayout]}
                          source={require("../../../assets/images/Login/username.png")}
                        />
                      </View>
                    </View>
                    <Image
                      style={[styles.frameChild, styles.userIconLayout]}
                      source={require("../../../assets/images/Login/vector1.png")}
                    />
                    <TextInput
                      style={[styles.frameItem, styles.frameTextinput]}
                      placeholder="Tên đăng nhập"
                      keyboardType="default"
                    />
                  </View>
                </View>
                <View style={styles.mtKhuParent}>
                  <Text style={[styles.tnNgNhp, styles.nhpTypo]}>Mật khẩu</Text>
                  <View style={styles.frameParent2}>
                    <View style={styles.frameParentFlexBox}>
                      <View style={styles.iconsWrapper}>
                        <View style={[styles.icons, styles.iconsFlexBox]}>
                          <Image
                            style={[styles.userIcon, styles.userIconLayout]}
                            source={require("../../../assets/images/Login/password.png")}
                          />
                        </View>
                      </View>
                      <Image
                        style={[styles.frameChild, styles.userIconLayout]}
                        source={require("../../../assets/images/Login/vector1.png")}
                      />
                      <TextInput
                        style={[styles.frameTextinput, styles.frameFlexBox]}
                        placeholder="Mật khẩu"
                        keyboardType="default"
                      />
                    </View>
                    <View style={[styles.frameParent4, styles.frameFlexBox]}>
                      <View style={styles.checkboxParent}>
                        <View>
                          <RNPCheckbox
                            status={checkboxchecked ? "checked" : "unchecked"}
                            onPress={() => setCheckboxchecked(!checkboxchecked)}
                            color="#ff8811"
                          />
                        </View>
                        <View style={styles.nhMtKhuWrapper}>
                          <Text style={[styles.nhMtKhu, styles.nhpTypo]}>
                            Nhớ mật khẩu
                          </Text>
                        </View>
                      </View>
                      <Pressable onPress={() => navigation.navigate('ForgotPasswordPhoneNumber')}>
                        <View style={styles.qunMtKhuWrapper}>
                          <Text style={[styles.nhMtKhu, styles.nhpTypo]}>
                            Quên mật khẩu?
                          </Text>
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameParent5}>
              <Pressable
                style={[styles.ngNhpWrapper, styles.ngNhpWrapperFlexBox]}
                onPress={() => props.onNavigate(RootScreens.MAIN)}
              >
                <Text style={[styles.ngNhp, styles.ngNhpTypo]}>Đăng nhập</Text>
              </Pressable>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.vectorIconLayout}
                  source={require("../../../assets/images/Login/vector2.png")}
                />
                <Text style={[styles.hocNgNhp, styles.nhpTypo]}>
                  Hoặc đăng nhập bằng
                </Text>
                <Image
                  style={[styles.frameChild1, styles.vectorIconLayout]}
                  source={require("../../../assets/images/Login/vector2.png")}
                />
              </View>
              <Pressable
                style={[styles.googleIconParent, styles.ngNhpWrapperFlexBox]}
              >
                <Image
                  style={styles.googleIcon}
                  source={require("../../../assets/images/Login/google.png")}
                />
                <Text style={[styles.google, styles.ngNhpTypo]}>Google</Text>
              </Pressable>
            </View>
          </View>
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
    alignItems: "center",
  },
  iconsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  ngNhpVoFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  nhpTypo: {
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
  },
  frameParentFlexBox: {
    backgroundColor: "#fafafa",
    borderRadius: 16,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  userIconLayout: {
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ngNhpWrapperFlexBox: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ngNhpTypo: {
    fontWeight: "700",
    letterSpacing: 0.4,
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
  },
  vectorIconLayout: {
    height: 1,
    borderRadius: 1,
    maxWidth: "100%",
    overflow: "hidden",
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
    alignSelf: "stretch",
  },
  welcomeBack: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "600",
    color: "#1f1f1f",
  },
  ngNhpVo: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 27,
    marginTop: 12,
    color: "#404040",
  },
  welcomeBackParent: {
    width: 342,
    marginTop: 16,
    alignItems: "center",
  },
  frameGroup: {
    // width: 430,
    paddingTop: 96,
    left: 0,
    top: 0,
    position: "absolute",
  },
  maskGroupParent: {
    height: 297,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  tnNgNhp: {
    letterSpacing: 0.3,
    fontWeight: "500",
    color: "#404040",
    alignSelf: "stretch",
  },
  userIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  icons: {
    width: 28,
    height: 28,
  },
  iconsWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 3,
  },
  frameItem: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent1: {
    marginTop: 16,
  },
  frameView: {
    alignSelf: "stretch",
  },
  frameTextinput: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  nhMtKhu: {
    color: "#404040",
  },
  nhMtKhuWrapper: {
    marginLeft: 12,
    flexDirection: "row",
  },
  checkboxParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  qunMtKhuWrapper: {
    flexDirection: "row",
  },
  frameParent4: {
    marginTop: 16,
  },
  frameParent2: {
    alignItems: "flex-end",
    marginTop: 16,
    alignSelf: "stretch",
  },
  mtKhuParent: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  loginInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  ngNhp: {
    color: "#fff",
  },
  ngNhpWrapper: {
    backgroundColor: "#1a1528",
  },
  hocNgNhp: {
    color: "#404040",
    marginLeft: 16,
  },
  frameChild1: {
    marginLeft: 16,
  },
  vectorParent: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  google: {
    marginLeft: 10,
    color: "#404040",
  },
  googleIconParent: {
    borderStyle: "solid",
    borderColor: "#efeded",
    borderWidth: 1,
    height: 60,
    marginTop: 28,
  },
  frameParent5: {
    marginTop: 28,
    alignSelf: "stretch",
  },
  frameContainer: {
    marginTop: 36,
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  login: {
    backgroundColor: "#fff",
    height: 955,
    width: "100%",
    flex: 1,
  },
});

// export default Login;
