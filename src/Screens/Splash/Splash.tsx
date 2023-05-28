import * as React from "react";

import { StyleSheet, Text, View, Pressable,Image } from "react-native";
import { RootScreens } from "..";



export const SplashScreen = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={[styles.welcomeScreen, styles.dk011ParentBg,]}>
      <View style={styles.welcomeScreenInner}>
        <View style={[styles.dk011Parent, styles.dk011ParentBg]}>
          <Image
            style={styles.dk011Icon}
            source={require("../../../assets/images/Splash/background.png")}
          />
          <View style={[styles.frameParent, styles.framePosition]}>
            <View style={styles.frameWrapper}>
              <View style={[styles.frameContainer, styles.framePosition]}>
                <View style={[styles.logosParent, styles.frameGroupSpaceBlock]}>
                  <Image
                    style={styles.logosIcon}
                    source={require("../../../assets/images/Splash/logo.png")}
                  />
                  <View style={styles.frameWrapper1FlexBox}>
                    <Text style={[styles.lnKHoch, styles.btKBnFlexBox]}>
                      Lên kế hoạch chuyến đi
                    </Text>
                    <Text style={[styles.btKBn, styles.btKBnFlexBox]}>
                      Bất kể bạn đi đâu, chúng tôi sẽ giúp bạn tìm ra tuyến
                      đường tốt nhất.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameGroup]}>
              <View style={styles.frameView}>
                <Pressable onPress={() => props.onNavigate(RootScreens.LOGIN)}>
                  <View style={[styles.ngNhpWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.ngNhp, styles.bQuaTypo]}>Đăng nhập</Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => props.onNavigate(RootScreens.REGISTER)}>

                  <View style={[styles.toTiKhonWrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.toTiKhon, styles.bQuaTypo]}>
                      Tạo tài khoản
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={[styles.frameWrapper1, styles.frameWrapper1FlexBox]}>
                <View style={styles.bQuaWrapper}>
                  <Pressable onPress={() => props.onNavigate(RootScreens.MAIN)}>
                    <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>

                  </Pressable>
                </View>
              </View>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dk011ParentBg: {
    backgroundColor: "#ffce48",
    flex: 1,
  },
  framePosition: {
    // width: 430,
    width: '100%',
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameGroupSpaceBlock: {
    paddingHorizontal: 24,

    alignSelf: "stretch",
  },
  btKBnFlexBox: {
    textAlign: "left",
    color: "#1f1f1f",
  },
  wrapperFlexBox: {
     paddingVertical: 20,
     paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  bQuaTypo: {
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "left",
  },
  frameWrapper1FlexBox: {
    marginTop: 28,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameLayout: {
    height: 6,
    width: 6,
    borderWidth: 1.5,
    borderColor: "#211b35",
    borderStyle: "solid",
    borderRadius: 9999,
  },
  dk011Icon: {

    left: 0,
    top: 0,
    position: "absolute",
    resizeMode: 'stretch'
  },
  logosIcon: {
    width: 184,
    height: 36,
  },
  lnKHoch: {
    fontSize: 48,
    letterSpacing: -0.5,
    lineHeight: 58,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  btKBn: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 27,
    // width: 382,
    marginTop: 16,
  },
  logosParent: {
    paddingTop: 36,
    paddingBottom: 16,
    justifyContent: "center",
  },
  frameContainer: {
    height: 697,
    justifyContent: "flex-end",
  },
  frameWrapper: {
    height: 673,
    alignSelf: "stretch",
  },
  ngNhp: {
    color: "#fff",
    fontWeight: "700",
  },
  ngNhpWrapper: {
    backgroundColor: "#1a1528",
  },
  toTiKhon: {
    color: "#1f1f1f",
    letterSpacing: 0.4,
    fontSize: 14,
    fontWeight: "700",
  },
  toTiKhonWrapper: {
    backgroundColor: "#ff8811",
    marginTop: 16,
  },
  frameView: {
    alignSelf: "stretch",
  },
  bQua: {
    fontWeight: "600",
    color: "#795000",
  },
  bQuaWrapper: {
    flexDirection: "row",
  },
  frameWrapper1: {
    padding: 10,
    alignItems: "center",
  },
  frameGroup: {
    paddingVertical: 36,
    paddingHorizontal: 24,
    marginBottom:150,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
    height: 955,
  },
  icon: {
    width: 32,
    height: 12,
  },
  dynamicIslandChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 20,
    backgroundColor: "#000",
    position: "absolute",
    width: "100%",
  },
  frameItem: {
    marginTop: -2,
  },
  rectangleParent: {
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

  parent: {
    height: 37,
    flex: 1,
  },

  dk011Parent: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  welcomeScreenInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  welcomeScreen: {
    height: 955,
    width: "100%",
    flex: 1,
  },
});

