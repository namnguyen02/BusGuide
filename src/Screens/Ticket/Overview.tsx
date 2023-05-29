import * as React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const TicketOverview = () => {
    const navigation = useNavigation();
  return (
    <View style={[styles.ticketsOverview, styles.ticketsBg]}>
      <View style={[styles.frameTickets, styles.ticketsBg]}>
        <View style={styles.frameContainer}>
          <View style={styles.frameTitle}>
            <Image
              style={styles.backgroundHeaderIcon}
              source={require("../../../assets/images/Ticket/background-header.png")}
            />
            <View style={styles.vCaTiParent}>
              <Text style={[styles.vCaTi, styles.vCaTiFlexBox]}>
                Vé của tôi
              </Text>
              <View style={styles.frameParent1FlexBox}>
                <Text style={[styles.muaHocXem, styles.phtTypo]}>
                  Mua hoặc xem những vé hiện có.
                </Text>
              </View>
            </View>
            <View style={styles.frameTitleInner}>
              <Pressable style={styles.muaVWrapper}>
                <Text style={[styles.muaV, styles.textClr]}>Mua vé</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.frameMainContainer}>
            <View style={styles.frameMainView}>
              <View style={styles.frameTicketActive}>
                <View style={styles.frameMainTitle}>
                  <View style={[styles.icons, styles.iconsFlexBox]}>
                    <Image
                      style={[styles.ticketIcon, styles.ticketIconLayout]}
                      source={require("../../../assets/images/Ticket/ticket.png")}
                    />
                  </View>
                  <Text style={[styles.kchHot, styles.vCaTiFlexBox]}>
                    Đã kích hoạt
                  </Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Pressable style={styles.ticketsWrapper} onPress={() => navigation.navigate('Pay' as never)}>
                    <View style={styles.tickets}>
                      <View style={styles.subtractParent}>
                        <Image
                          style={styles.subtractIcon}
                          source={require("../../../assets/images/Ticket/subtract.png")}
                        />
                        <Image
                          style={[styles.frameChild, styles.ticketIconLayout]}
                          source={require("../../../assets/images/Ticket/vector.png")}
                        />
                        <View
                          style={[styles.frameParent, styles.frameParentPosition]}
                        >
                          <View style={styles.frameGroup}>
                            <View style={styles.frameView}>
                              <View style={styles.parent}>
                                <Text style={[styles.text, styles.textClr]}>
                                  14:02
                                </Text>
                                <Text style={[styles.pht, styles.phtLayout]}>
                                  52 phút
                                </Text>
                              </View>
                              <View style={styles.frameWrapper}>
                                <View style={styles.frameWrapper}>
                                  <View
                                    style={[
                                      styles.indenticationTransportBadge,
                                      styles.iconsFlexBox,
                                    ]}
                                  >
                                    <View style={styles.icons1}>
                                      <Image
                                        style={[
                                          styles.ticketIcon,
                                          styles.ticketIconLayout,
                                        ]}
                                        source={require("../../../assets/images/Ticket/bus.png")}
                                      />
                                    </View>
                                    <View style={styles.wrapper}>
                                      <Text
                                        style={[styles.text1, styles.th66Typo1]}
                                      >
                                        08
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View
                              style={[
                                styles.frameParent1,
                                styles.frameParent1FlexBox,
                              ]}
                            >
                              <View>
                                <Text style={[styles.q10, styles.q10Typo]}>
                                  Q.10
                                </Text>
                                <Text
                                  style={[styles.lThngKit, styles.lThngKitTypo]}
                                >
                                  268 Lý Thường Kiệt
                                </Text>
                              </View>
                              <View>
                                <Text style={[styles.q10, styles.q10Typo]}>
                                  đến
                                </Text>
                              </View>
                              <View style={styles.tpThCParent}>
                                <Text style={[styles.tpThC, styles.tpThCFlexBox]}>
                                  TP. Thủ Đức
                                </Text>
                                <Text
                                  style={[styles.tQuangBu, styles.tpThCFlexBox]}
                                >
                                  Tạ Quang Bửu
                                </Text>
                              </View>
                            </View>
                          </View>
                          <View style={styles.googleWalletParent}>
                            <Text style={[styles.googleWallet, styles.q10Typo]}>
                              Google Wallet
                            </Text>
                            <Text style={[styles.kVnd, styles.textClr]}>
                              7k VND
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                </ScrollView>
              </View>
              <View style={styles.frameTicketUsed}>
                <View style={styles.frameMainTitle1}>
                  <View style={styles.iconsParent}>
                    <View style={[styles.icons, styles.iconsFlexBox]}>
                      <Image
                        style={[styles.ticketIcon, styles.ticketIconLayout]}
                        source={require("../../../assets/images/Ticket/clock.png")}
                      />
                    </View>
                    <Text style={[styles.kchHot, styles.vCaTiFlexBox]}>
                      Đã dùng
                    </Text>
                  </View>
                  <View style={styles.iconsWrapper}>
                    <View style={styles.icons3}>
                      <Image
                        style={[styles.ticketIcon, styles.ticketIconLayout]}
                        source={require("../../../assets/images/Ticket/right-arrow.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.ticketsParent}>
                  <ScrollView
                    style={styles.tickets1}
                    horizontal={true}
                    // showsVerticalScrollIndicator={false}
                    // contentContainerStyle={styles.ticketsScrollViewContent}
                  >
                    <View style={styles.oldTicket}>
                      <View style={styles.frameMainView}>
                        <View style={styles.excludeParent}>
                          <Image
                            style={styles.excludeIcon}
                            source={require("../../../assets/images/Ticket/exclude.png")}
                          />
                          <View
                            style={[
                              styles.frameParent2,
                              styles.frameParentPosition,
                            ]}
                          >
                            <View style={styles.frameParent3}>
                              <View style={styles.khiHnhParent}>
                                <Text style={[styles.khiHnh, styles.th66Typo]}>
                                  Khởi hành
                                </Text>
                                <View style={styles.group}>
                                  <Text
                                    style={[styles.text2, styles.vCaTiFlexBox]}
                                  >
                                    14:05
                                  </Text>
                                  <Text style={[styles.th66, styles.th66Typo]}>
                                    Thứ 6, 6 tháng 5
                                  </Text>
                                </View>
                              </View>
                              <View style={styles.indenticationTransportBadge1}>
                                <View style={styles.icons4}>
                                  <Image
                                    style={[
                                      styles.ticketIcon,
                                      styles.ticketIconLayout,
                                    ]}
                                    source={require("../../../assets/images/Ticket/bus.png")}
                                  />
                                </View>
                                <View style={styles.container}>
                                  <Text
                                    style={[styles.text1, styles.th66Typo1]}
                                  >
                                    08
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View style={styles.googleWalletParent}>
                              <Text style={[styles.mastercard, styles.q10Typo]}>
                                MasterCard
                              </Text>
                              <Text style={[styles.kVnd1, styles.vndLayout]}>
                                7k VND
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.oldTicket}>
                    <View style={styles.oldTicket}>
                      <View style={styles.frameMainView}>
                        <View style={styles.excludeParent}>
                          <Image
                            style={styles.excludeIcon}
                            source={require("../../../assets/images/Ticket/exclude.png")}
                          />
                          <View
                            style={[
                              styles.frameParent2,
                              styles.frameParentPosition,
                            ]}
                          >
                            <View style={styles.frameParent3}>
                              <View style={styles.khiHnhParent}>
                                <Text style={[styles.khiHnh, styles.th66Typo]}>
                                  Khởi hành
                                </Text>
                                <View style={styles.group}>
                                  <Text
                                    style={[styles.text2, styles.vCaTiFlexBox]}
                                  >
                                    14:05
                                  </Text>
                                  <Text style={[styles.th66, styles.th66Typo]}>
                                    Thứ 6, 6 tháng 5
                                  </Text>
                                </View>
                              </View>
                              <View style={styles.indenticationTransportBadge1}>
                                <View style={styles.icons4}>
                                  <Image
                                    style={[
                                      styles.ticketIcon,
                                      styles.ticketIconLayout,
                                    ]}
                                    source={require("../../../assets/images/Ticket/bus.png")}
                                  />
                                </View>
                                <View style={styles.container}>
                                  <Text
                                    style={[styles.text1, styles.th66Typo1]}
                                  >
                                    08
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View style={styles.googleWalletParent}>
                              <Text style={[styles.mastercard, styles.q10Typo]}>
                                MasterCard
                              </Text>
                              <Text style={[styles.kVnd1, styles.vndLayout]}>
                                7k VND
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    </View>
                    <View style={styles.oldTicket}>
                        <View style={styles.oldTicket}>
                        <View style={styles.frameMainView}>
                            <View style={styles.excludeParent}>
                            <Image
                                style={styles.excludeIcon}
                                source={require("../../../assets/images/Ticket/exclude.png")}
                            />
                            <View
                                style={[
                                styles.frameParent2,
                                styles.frameParentPosition,
                                ]}
                            >
                                <View style={styles.frameParent3}>
                                <View style={styles.khiHnhParent}>
                                    <Text style={[styles.khiHnh, styles.th66Typo]}>
                                    Khởi hành
                                    </Text>
                                    <View style={styles.group}>
                                    <Text
                                        style={[styles.text2, styles.vCaTiFlexBox]}
                                    >
                                        14:05
                                    </Text>
                                    <Text style={[styles.th66, styles.th66Typo]}>
                                        Thứ 6, 6 tháng 5
                                    </Text>
                                    </View>
                                </View>
                                <View style={styles.indenticationTransportBadge1}>
                                    <View style={styles.icons4}>
                                    <Image
                                        style={[
                                        styles.ticketIcon,
                                        styles.ticketIconLayout,
                                        ]}
                                        source={require("../../../assets/images/Ticket/bus.png")}
                                    />
                                    </View>
                                    <View style={styles.container}>
                                    <Text
                                        style={[styles.text1, styles.th66Typo1]}
                                    >
                                        08
                                    </Text>
                                    </View>
                                </View>
                                </View>
                                <View style={styles.googleWalletParent}>
                                <Text style={[styles.mastercard, styles.q10Typo]}>
                                    MasterCard
                                </Text>
                                <Text style={[styles.kVnd1, styles.vndLayout]}>
                                    7k VND
                                </Text>
                                </View>
                            </View>
                            </View>
                        </View>
                        </View>
                    </View>
                  </ScrollView>

                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.shadow}>
        <View style={[styles.shadowChild, styles.frameParentPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketsScrollViewContent: {
    flexDirection: "column",
  },
  ticketsBg: {
    backgroundColor: "#fff",
    flex: 1,
  },
  vCaTiFlexBox: {
    textAlign: "left",
    color: "#1f1f1f",
  },
  phtTypo: {
    opacity: 0.9,
  },
  textClr: {
    color: "#fff",
    textAlign: "left",
  },
  iconsFlexBox: {
    height: 28,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  ticketIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  phtLayout: {
    lineHeight: 12,
    fontSize: 12,
  },
  th66Typo1: {
    fontWeight: "500",
  },
  frameParent1FlexBox: {
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  q10Typo: {
    opacity: 0.8,
  },
  lThngKitTypo: {
    letterSpacing: 0.3,
    marginTop: 10,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: 14,
  },
  tpThCFlexBox: {
    textAlign: "right",
    color: "#fff",
  },
  th66Typo: {
    color: "#404040",
    lineHeight: 15,
    fontSize: 12,
    textAlign: "left",
  },
  vndLayout: {
    lineHeight: 14,
    fontSize: 14,
  },
  backgroundHeaderIcon: {
    height: 148,
    overflow: "hidden",
    width: 430,
    borderBottomLeftRadius: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vCaTi: {
    fontWeight: "600",
    fontSize: 24,
    letterSpacing: -0.2,
    alignSelf: "stretch",
  },
  muaHocXem: {
    fontSize: 16,
    lineHeight: 16,
    textAlign: "left",
    color: "#1f1f1f",
  },
  vCaTiParent: {
    paddingTop: 36,
    paddingBottom: 56,
    paddingHorizontal: 24,
    width: 430,
    borderBottomLeftRadius: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  muaV: {
    fontWeight: "700",
    lineHeight: 14,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  muaVWrapper: {
    paddingVertical: 16,
    backgroundColor: "#1a1528",
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  frameTitleInner: {
    top: 124,
    left: 24,
    width: 342,
    flexDirection: "row",
    position: "absolute",
  },
  frameTitle: {
    borderBottomRightRadius: 24,
    alignSelf: "stretch",
    flex: 1,
  },
  ticketIcon: {
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  icons: {
    width: 28,
    justifyContent: "center",
  },
  kchHot: {
    fontSize: 20,
    lineHeight: 20,
    marginLeft: 10,
    fontWeight: "600",
    letterSpacing: -0.2,
    color: "#1f1f1f",
  },
  frameMainTitle: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  subtractIcon: {
    height: 190,
    width: 382,
    resizeMode: 'stretch',
  },
  frameChild: {
    height: "1.05%",
    width: "86.26%",
    top: "64.21%",
    right: "6.25%",
    bottom: "34.74%",
    left: "7.49%",
    position: "absolute",
  },
  text: {
    width: 80,
    height: 22,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: 24,
    letterSpacing: -0.2,
  },
  pht: {
    marginLeft: 6,
    color: "#fff",
    textAlign: "left",
    opacity: 0.9,
  },
  parent: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  icons1: {
    width: 20,
    height: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    lineHeight: 12,
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
  },
  wrapper: {
    marginLeft: 4,
    alignItems: "center",
  },
  indenticationTransportBadge: {
    backgroundColor: "#ff8811",
    width: 58,
    paddingLeft: 8,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    justifyContent: "center",
    borderRadius: 12,
  },
  frameWrapper: {
    flexDirection: "row",
  },
  frameView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  q10: {
    lineHeight: 12,
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
  },
  lThngKit: {
    marginTop: 10,
    color: "#fff",
    textAlign: "left",
  },
  tpThC: {
    opacity: 0.8,
    lineHeight: 15,
    fontSize: 12,
  },
  tQuangBu: {
    marginTop: 10,
    letterSpacing: 0.3,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: 14,
  },
  tpThCParent: {
    alignItems: "flex-end",
  },
  frameParent1: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frameGroup: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  googleWallet: {
    color: "#fff",
    textAlign: "left",
    lineHeight: 14,
    fontSize: 14,
    opacity: 0.8,
  },
  kVnd: {
    lineHeight: 14,
    fontSize: 14,
    letterSpacing: 0.4,
    fontWeight: "600",
  },
  googleWalletParent: {
    paddingHorizontal: 1,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: "space-between",
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    paddingHorizontal: 24,
  },
  subtractParent: {
    height: 190,
    alignSelf: "stretch",
  },
  tickets: {
    height: 187,
    width: 382,
  },
  ticketsWrapper: {
    marginTop: 12,
    justifyContent: "center",
    width: screenWidth,
    // resizeMode: 'contain'
  },
  frameTicketActive: {
    height: 239,
  },
  iconsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons3: {
    width: 24,
    height: 24,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  iconsWrapper: {
    borderRadius: 14,
    borderStyle: "solid",
    borderColor: "#efeded",
    borderWidth: 1,
    padding: 10,
    marginLeft: 200,
    flexDirection: "row",
    alignItems: "center",
  },
  frameMainTitle1: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  excludeIcon: {
    height: 142,
    width: 322,
  },
  khiHnh: {
    letterSpacing: 0.1,
    fontWeight: "700",
  },
  text2: {
    width: 80,
    height: 21,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: 24,
    letterSpacing: -0.2,
  },
  th66: {
    height: 15,
    fontWeight: "500",
    marginLeft: 10,
    flex: 1,
  },
  group: {
    marginTop: 10,
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  khiHnhParent: {
    flex: 1,
  },
  icons4: {
    width: 18,
    height: 18,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    marginTop: 4,
    alignItems: "center",
  },
  indenticationTransportBadge1: {
    borderRadius: 10,
    width: 40,
    paddingHorizontal: 8,
    paddingTop: 7,
    paddingBottom: 9,
    marginLeft: 10,
    backgroundColor: "#1a1528",
    alignItems: "center",
  },
  frameParent3: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mastercard: {
    lineHeight: 14,
    fontSize: 14,
    opacity: 0.8,
    textAlign: "left",
    color: "#1f1f1f",
  },
  kVnd1: {
    letterSpacing: 0.4,
    lineHeight: 14,
    fontSize: 14,
    textAlign: "left",
    color: "#1f1f1f",
    fontWeight: "600",
  },
  frameParent2: {
    paddingVertical: 20,
    justifyContent: "space-between",
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    paddingHorizontal: 24,
  },
  excludeParent: {
    height: 142,
    alignSelf: "stretch",
  },
  frameMainView: {
    alignSelf: "stretch",
  },
  oldTicket: {
    width: 322,
    marginLeft: 12,
  },
  tickets1: {
    width: "100%",
  },
  tickets2: {
    marginLeft: 12,
  },
  ticketsParent: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameTicketUsed: {
    marginTop: 36,
    alignSelf: "stretch",
  },
  frameMainContainer: {
    paddingTop: 48,
    paddingBottom: 76,
    paddingHorizontal: 24,
    alignSelf: "stretch",
  },
  frameContainer: {
    height: 757,
    alignSelf: "stretch",
  },
  frameTickets: {
    alignSelf: "stretch",
    flex: 1,
  },
  shadowChild: {
    top: "100%",
    bottom: "-100%",
    backgroundColor: "#ccc",
    left: "0%",
    right: "0%",
    height: "100%",
  },
  shadow: {
    height: 3,
    marginTop: -2,
    width: 430,
  },
  ticketsOverview: {
    height: 955,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default TicketOverview;
