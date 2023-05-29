import * as React from "react";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput, Dimensions } from "react-native";
import { Navigation } from "react-native-feather";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const TicketPay = ({navigation}) => {
    const [isGoogleWallet, setGoogleWallet] = useState(1);
    function toCredit(event) {
        setGoogleWallet(0);
      }
      function toGoogleWallet(event) {
        setGoogleWallet(1);
      }

  return (
    <View style={[styles.ticketsPay, styles.manIconLayout]}>
      <View style={styles.frameContainer}>
        <View style={styles.frameContainer}>
          <View style={styles.backgroundHeaderParent}>
            <Image
              style={[styles.backgroundHeaderIcon, styles.frameGroupPosition, {resizeMode: 'stretch'}]}
              source={require("../../../assets/images/Ticket/background-header.png")}
            />
            <View style={[styles.frameGroup, styles.frameGroupPosition]}>
              <View style={[styles.thanhTonVParent, styles.parentFlexBox]}>
                <Text style={[styles.thanhTonV, styles.vndTypo]}>
                  Thanh toán vé
                </Text>
                <View style={styles.sinhVinParent}>
                  <Text style={[styles.sinhVin, styles.vndTypo]}>
                    Sinh viên
                  </Text>
                  <View style={[styles.icons, styles.iconsFlexBox]}>
                    <Image
                      style={[styles.manIcon, styles.manIconLayout, {resizeMode:'stretch'}]}
                      source={require("../../../assets/images/Ticket/man.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.vndWrapper}>
                <Text style={[styles.vnd, styles.vndTypo]}>7,000 VND</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameView}>
            <View
              style={[
                styles.phngThcThanhTonWrapper,
                styles.frameParent1SpaceBlock,
              ]}
            >
              <Text style={[styles.phngThcThanh, styles.thanhTypo]}>
                Phương thức thanh toán
              </Text>
            </View>
            <View style={styles.paymentMethods}>
              <View
                style={[styles.frameParent1, styles.frameParent1SpaceBlock]}
              >
                <View
                  style={[styles.frameParent2, styles.frameParent2SpaceBlock]}
                >
                        <Pressable
                            style={[
                            styles.thTnDngWrapper,
                            styles.frameParent7SpaceBlock,
                            styles.frameChild,
                            ]}
                            onPress={toGoogleWallet}

                        >
                            <Text style={[styles.thTnDng, styles.thanhTypo1]}>
                                Google Wallet
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[
                            styles.thTnDngWrapper,
                            styles.frameParent7SpaceBlock,
                            ]}
                            onPress={toCredit}
                        >
                            <Text style={[styles.thTnDng, styles.thanhTypo1]}>
                            Thẻ tín dụng
                            </Text>
                        </Pressable>
                </View>

                {isGoogleWallet ?
                    <GoogleWallet></GoogleWallet>
                    :
                    <Credit></Credit>}

              </View>

              <View
                style={[styles.frameParent7, styles.frameParent7SpaceBlock]}
              >
                <View style={styles.iconsParent}>
                  <View style={styles.icons2}>
                    <Image
                      style={[styles.manIcon, styles.manIconLayout]}
                      source={require("../../../assets/images/Ticket/ticket1.png")}
                    />
                  </View>
                </View>
                <View style={styles.iconsContainer}>
                  <View style={[styles.icons3, styles.iconsLayout]}>
                    <Image
                      style={[styles.manIcon, styles.manIconLayout]}
                      source={require("../../../assets/images/Ticket/question.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.paymentMethodsInner}>
                <Pressable style={styles.thanhTonWrapper} onPress={()=>{navigation.navigate('YourTicket' as never)}}>
                  <Text style={[styles.thanhTon, styles.thanhTypo]}>
                    Thanh toán
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const GoogleWallet =() => {
    return (
        <View style={styles.frameParent3}>
            <View style={styles.frameParent4}>
            <View style={styles.frameParent5}>
                <Image
                style={styles.frameItem}
                source={require("../../../assets/images/Ticket/card.png")}
                />
                <Image
                style={styles.rejsekortLogo2Icon}
                source={require("../../../assets/images/Ticket/googlewallet.png")}
                />
                <Text style={styles.bnhNguynBt}>Bình Nguyên Bất Ổn</Text>
                <Text style={styles.text}>012345 678 900 0007</Text>
            </View>
            <View
                style={[
                styles.iconsWrapper,
                styles.frameParent2SpaceBlock,
                ]}
            >
                <View style={styles.icons1}>
                <Image
                    style={[styles.manIcon, styles.manIconLayout]}
                    source={require("../../../assets/images/Ticket/wave.png")}
                />
                </View>
            </View>
            </View>
            <View style={styles.frameWrapper}>
            <View style={styles.frameParent6}>
                <View>
                <Text style={[styles.giV, styles.thanhTypo]}>
                    Giá vé
                </Text>
                <Text>
                    <Text
                    style={[styles.text1, styles.thanhTypo]}
                    >{`7,000 `}</Text>
                    <Text style={[styles.vnd2, styles.vndTypo]}>VND</Text>
                </Text>
                </View>
                <Text style={[styles.sDCa, styles.sDCaTypo]}>
                Số dư của bạn sau khi mua sẽ là 295,407 VND.
                </Text>
            </View>
            </View>
        </View>
    );

};
const Credit = () => {
    const [checkboxchecked, setCheckboxchecked] = useState(undefined);
    return (
        <View style={styles.xframeParent2}>
            <View style={styles.xparentFlexBox}>
            <Image
                style={styles.xvisaIncSvg}
                source={require("../../../assets/images/Ticket/visa.png")}
            />
            <Image
                style={styles.xmastercardSvgIcon}
                source={require("../../../assets/images/Ticket/mastercard.png")}
            />
            </View>
            <View style={styles.xframeParent3}>
            <View style={styles.xframeParent4}>
                <TextInput
                style={[styles.xframeChild, styles.xframeSpaceBlock]}
                placeholder="0000"
                keyboardType="default"
                placeholderTextColor="#9d9d9d"
                />
                <View style={styles.xframeParent5}>
                <View style={[styles.xframeItem, styles.xframeSpaceBlock]} />
                <View style={[styles.xframeInner, styles.xframeSpaceBlock]} />
                </View>
            </View>
            <View style={[styles.xvndWrapper, styles.xparentFlexBox]}>
                <View>
                <RNPCheckbox
                    disabled
                    status={checkboxchecked ? "checked" : "unchecked"}
                    onPress={() => setCheckboxchecked(!checkboxchecked)}
                    color="#fff"
                />
                </View>
                <View style={styles.xluThngTinWrapper}>
                <Text style={[styles.xluThngTin, styles.xluThngTinTypo]}>
                    Lưu thông tin
                </Text>
                </View>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  manIconLayout: {
    width: "100%",
    flex: 1,
  },
  frameGroupPosition: {
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  vndTypo: {
    fontWeight: "600",
  },
  iconsFlexBox: {
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent1SpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: 24,
    alignSelf: "stretch",
  },
  thanhTypo: {
    fontWeight: "700",
  },
  frameParent2SpaceBlock: {
    padding: 3,
    flexDirection: "row",
  },
  frameParent7SpaceBlock: {
    paddingVertical: 12,
    flexDirection: "row",
  },
  thanhTypo1: {
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "left",
  },
  sDCaTypo: {
    letterSpacing: 0.3,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: 14,
    textAlign: "left",
  },
  iconsLayout: {
    height: 24,
    width: 24,
    flexDirection: "row",
  },
  backgroundHeaderIcon: {
    overflow: "hidden",
    height: 132,
  },
  thanhTonV: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: "left",
    color: "#1f1f1f",
    letterSpacing: -0.2,
    fontWeight: "600",
  },
  sinhVin: {
    fontSize: 16,
    lineHeight: 16,
    textAlign: "left",
    color: "#1f1f1f",
    letterSpacing: -0.2,
    fontWeight: "600",
  },
  manIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  icons: {
    height: 24,
    width: 24,
    flexDirection: "row",
  },
  sinhVinParent: {
    borderRadius: 8,
    backgroundColor: "rgba(241, 241, 241, 0.3)",
    paddingLeft: 12,
    paddingTop: 3,
    paddingRight: 6,
    paddingBottom: 3,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  thanhTonVParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  vnd: {
    fontSize: 20,
    lineHeight: 20,
    color: "#694d00",
    opacity: 0.9,
    textAlign: "left",
    letterSpacing: -0.2,
    fontWeight: "600",
  },
  vndWrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    paddingBottom: 32,
    paddingTop: 36,
    paddingHorizontal: 24,
  },
  backgroundHeaderParent: {
    height: 132,
    alignSelf: "stretch",
  },
  phngThcThanh: {
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "left",
    color: "#1f1f1f",
  },
  phngThcThanhTonWrapper: {
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  thTnDng: {
    color: "#9d9d9d",
    fontWeight: "600",
  },
  thTnDngWrapper: {
    paddingHorizontal: 16,
    borderRadius: 16,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameParent2: {
    // width: 382,
    backgroundColor: "#fafafa",
    borderRadius: 16,
  },
  frameItem: {
    width: 165,
    height: 165,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rejsekortLogo2Icon: {
    top: 13,
    left: 120,
    width: 89,
    height: 15,
    position: "absolute",
  },
  bnhNguynBt: {
    top: 53,
    left: 29,
    textAlign: "center",
    display: "flex",
    width: 157,
    height: 12,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: 12,
    justifyContent: "center",
    color: "#1f1f1f",
    position: "absolute",
    alignItems: "center",
  },
  text: {
    top: 90,
    left: 33,
    textAlign: "right",
    width: 174,
    color: "#404040",
    lineHeight: 12,
    fontSize: 12,
    position: "absolute",
  },
  frameParent5: {
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 33,
    },
    shadowRadius: 213,
    elevation: 213,
    shadowOpacity: 1,
    width: 224,
    height: 117,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  icons1: {
    width: 56,
    height: 56,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  iconsWrapper: {
    borderStyle: "solid",
    borderColor: "#1a1528",
    borderWidth: 2,
    marginLeft: 36,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent4: {
    paddingBottom: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  giV: {
    color: "#404040",
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "left",
  },
  text1: {
    fontSize: 48,
  },
  vnd2: {
    fontSize: 28,
  },
  vnd1: {
    letterSpacing: "-1%",
    width: 358,
    height: 40,
    marginTop: 12,
    textAlign: "left",
    color: "#1f1f1f",
  },
  sDCa: {
    marginTop: 18,
    color: "#9d9d9d",
    alignSelf: "stretch",
  },
  frameParent6: {
    justifyContent: "center",
    flex: 1,
  },
  frameWrapper: {
    paddingRight: 24,
    paddingTop: 16,
    width: 382,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent3: {
    paddingBottom: 28,
    marginTop: 36,
    width: 382,
    alignItems: "center",
  },
  frameParent1: {
    height: 394,
  },
  icons2: {
    width: 36,
    height: 36,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  rejsegarantiInkluderetI: {
    color: "#404040",
  },
  rejsegarantiInkluderetIKbeWrapper: {
    marginLeft: 16,
  },
  iconsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons3: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconsContainer: {
    borderRadius: 10,
    backgroundColor: "#ff8811",
    padding: 4,
    flexDirection: "row",
  },
  frameParent7: {
    alignItems: "flex-end",
    display: "none",
    backgroundColor: "#fafafa",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 24,
  },
  thanhTon: {
    color: "#fff",
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "left",
  },
  thanhTonWrapper: {
    backgroundColor: "#1a1528",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 16,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  paymentMethodsInner: {
    paddingBottom: 8,
    paddingTop: 16,
    paddingHorizontal: 24,
    alignSelf: "stretch",
  },
  paymentMethods: {
    borderRadius: 24,
    marginTop: 20,
  },
  frameView: {
    width: '100%',
    paddingTop: 36,
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#fff",
  },
  frameContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  ticketsPay: {
    height: 955,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  xframeParent2: {
    marginTop: 36,
  },
  xparentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  xvisaIncSvg: {
    width: 49,
    height: 16,
  },
  xmastercardSvgIcon: {
    width: 42,
    height: 30,
    marginLeft: 6,
  },
  xframeChild: {
    fontSize: 16,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  xframeItem: {
    flex: 1,
    paddingHorizontal: 20,
    height: 60,
  },
  xframeInner: {
    marginLeft: 16,
    flex: 1,
    paddingHorizontal: 20,
    height: 60,
  },
  xframeParent5: {
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  xframeParent4: {
    alignSelf: "stretch",
  },
  xluThngTin: {
  },
  xluThngTinWrapper: {
    marginLeft: 12,
    flexDirection: "row",
  },
  xframeParent3: {
    marginTop: 16,
    // width: 382,
  },
  xluThngTinTypo: {
    color: "#404040",
    lineHeight: 14,
    fontSize: 14,
    textAlign: "left",
  },
  xvndWrapper: {
    marginTop: 20,
  },
  xframeSpaceBlock: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#fafafa",
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
  },

});

export default TicketPay;
