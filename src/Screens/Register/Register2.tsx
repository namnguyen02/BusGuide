import * as React from "react";

import { StyleSheet, View, Text, Pressable,Image, ScrollView } from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Register'


export const Register2 = (props: {
  onNavigate: (string: RootScreens) => void;

}) => {
  const navigation = useNavigation<StackParamList>();

  return (
    <View style={styles.register1}>
      <View style={styles.frameParent}>
        <View style={styles.maskGroupParent}>
          <Image
            style={[styles.maskGroupIcon, styles.groupPosition]}
            source={require("../../../assets/images/Register2/background.png")}
          />
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.frameLayout]} />
              <View style={styles.frameItem} />
              <View style={[styles.frameInner, styles.frameLayout]} />
              <View style={[styles.frameInner, styles.frameLayout]} />
            </View>
            <View style={styles.nhIDinParent}>
              <Text style={[styles.nhIDin, styles.inMtSFlexBox]}>
                Ảnh đại diện
              </Text>
              <Text style={[styles.inMtS, styles.inMtSFlexBox]}>
                Điền một số thông tin để tạo tài khoản mới
              </Text>
            </View>
          </View>

        </View>
        <View style={styles.frameWrapper}>
          <ScrollView style={styles.frameContainer} showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.frameView}>
                <Image
                  style={[styles.frameIcon, styles.iconLayout]}
                  source={require("../../../assets/images/Register2/image_picker.png")}
                />
              </View>
              <View style={styles.frameParent1}>
                <Pressable style={[styles.iconsWrapper, styles.iconsFlexBox]}>
                  <View style={[styles.icons, styles.iconsFlexBox]}>
                    <Image
                      style={styles.iconLayout}
                      source={require("../../../assets/images/Register2/camera.png")}
                    />
                  </View>
                </Pressable>
                <Pressable style={[styles.chnNhWrapper, styles.wrapperBorder]}>
                  <Text style={[styles.chnNh, styles.bQuaTypo]}>Chọn ảnh</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.shadow}>
          <View style={[styles.shadowChild, styles.childPosition]} />
        </View>
        <View style={[styles.frameParent2, styles.frameSpaceBlock]}>
          <Pressable style={[styles.bQuaWrapper, styles.wrapperFlexBox]} onPress={() => navigation.navigate('Register3')}>
            <Text style={[styles.bQua, styles.bQuaTypo]}>Bỏ qua</Text>
          </Pressable>
          <Pressable style={[styles.tipTcWrapper, styles.wrapperFlexBox]} onPress={() => navigation.navigate('Register3')}>
            <Text style={[styles.tipTc, styles.bQuaTypo]}>Tiếp tục</Text>
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
    backgroundColor: "#f5f5f5",
    height: 12,
    borderRadius: 9999,
  },
  inMtSFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  iconsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  wrapperBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  bQuaTypo: {
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
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
  },
  frameItem: {
    backgroundColor: "#ff8811",
    borderColor: "#ffd89f",
    borderWidth: 5,
    height: 20,
    marginLeft: 10,
    borderStyle: "solid",
    width: 30,
    borderRadius: 9999,
  },
  frameInner: {
    marginLeft: 10,
    height: 12,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  nhIDin: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "600",
    color: "#1f1f1f",
  },
  inMtS: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 27,
    color: "#404040",
    marginTop: 12,
  },
  nhIDinParent: {
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
    height: 68,
    paddingLeft: 36,
    paddingTop: 10,
    paddingRight: 28,
    paddingBottom: 7,
    alignItems: "flex-end",
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
  frameIcon: {
    borderRadius: 9999,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  frameView: {
    borderRadius: 999,
    width: 300,
    height: 300,
    padding: 24,
    flexDirection: "row",
  },
  icons: {
    width: 36,
    height: 36,
    alignItems: "center",
  },
  iconsWrapper: {
    borderRadius: 14,
    padding: 6,
    backgroundColor: "#1a1528",
    alignItems: "center",
  },
  chnNh: {
    color: "#1a1528",
  },
  chnNhWrapper: {
    borderColor: "#1a1528",
    height: 48,
    paddingVertical: 16,
    marginLeft: 16,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  frameParent1: {
    marginTop: 36,
    flexDirection: "row",
  },
  frameContainer: {
    // alignItems: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    paddingVertical: 36,
    paddingHorizontal: 24,
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
  },
  bQuaWrapper: {
    borderColor: "#efeded",
    borderWidth: 1,
    borderStyle: "solid",
  },
  tipTc: {
    color: "#fff",
  },
  tipTcWrapper: {
    backgroundColor: "#1a1528",
    marginLeft: 10,
  },
  frameParent2: {
    paddingTop: 20,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#fff",
    paddingBottom: 48,
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

// export default Register2;
