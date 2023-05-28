import * as React from "react";

import { StyleSheet, Text, View, Pressable,Image } from "react-native";
import { RootScreens } from "..";
import { useNavigation } from '@react-navigation/native';
import {StackParamList} from '@/Navigation/Register'


export const RegisterFinal = (props: {
  onNavigate: (string: RootScreens) => void;

}) => {
  const navigation = useNavigation<StackParamList>();

  return (
    <View style={styles.registerFinal}>
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <View style={[styles.logosParent, styles.btUWrapperFlexBox]}>
            <Image
              style={styles.logosIcon}
              source={require("../../../assets/images/RegisterFinal/logo.png")}
            />
            <View style={[styles.welcomeParent, styles.welcomeParentFlexBox]}>
              <Text style={[styles.welcome, styles.welcomeLayout]}>
                Welcome
              </Text>
              <Text style={[styles.chngTiS, styles.welcomeLayout]}>
                Chúng tôi sẽ đồng hành cùng bạn trên mọi tuyến đường, bất kể bạn
                đi đâu
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.welcomeParentFlexBox]}>
          <Pressable style={[styles.btUWrapper, styles.btUWrapperFlexBox]} onPress={() => props.onNavigate(RootScreens.MAIN)}>
            <Text style={[styles.btU, styles.btUTypo]}>Bắt đầu</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btUWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeParentFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  welcomeLayout: {
    width: 342,
    textAlign: "center",
    color: "#1a1528",
  },
  btUTypo: {
    fontWeight: "700",
  },
  logosIcon: {
    width: 70,
    height: 70,
  },
  welcome: {
    fontSize: 48,
    letterSpacing: -0.5,
    lineHeight: 58,
    fontWeight: "700",
  },
  chngTiS: {
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 27,
    marginTop: 16,
  },
  welcomeParent: {
    marginTop: 36,
  },
  logosParent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 683,
  },
  frameWrapper: {
    alignSelf: "stretch",
    flex: 1,
  },
  btU: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    color: "#fff",
    textAlign: "left",
  },
  btUWrapper: {
    borderRadius: 16,
    backgroundColor: "#1a1528",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignSelf: "stretch",
  },
  frameContainer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  registerFinal: {
    backgroundColor: "#ffce48",
    width: "100%",
    height: 955,
    flex: 1,
  },
});

// export default RegisterFinal;
