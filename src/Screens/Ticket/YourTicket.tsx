import * as React from "react";
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
export const TicketYourTicket = () => {

  return (
    <View style={styles.ticketsYourTicket}>
      <View style={styles.frameContainer}>
        <Image
          style={[styles.patternsIcon, styles.frameParentPosition]}
          source={require("../../../assets/images/Ticket/pattern.png")}
        />
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.frameGroup}>
            <View style={styles.frameGroup}>
              <View style={styles.vCaBnParent}>
                <Text style={[styles.vCaBn, styles.hClr]}>Vé của bạn</Text>
                <View style={[styles.sinhVinParent, styles.parentSpaceBlock]}>
                  <Text style={styles.sinhVin}>Sinh viên</Text>
                  <View style={[styles.icons, styles.iconsFlexBox]}>
                    <Image
                      style={[styles.manIcon, styles.manIconLayout]}
                      source={require("../../../assets/images/Ticket/man.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.vndWrapper, styles.vndWrapperSpaceBlock]}>
                <Text style={styles.vnd}>7,000 VND</Text>
              </View>
            </View>
            <Pressable
              style={[styles.tickets, styles.ticketsLayout]}
            >
              <View style={styles.ticketsLayout}>
                <Image
                  style={styles.subtractIcon}
                  source={require("../../../assets/images/Ticket/subtract-white.png")}
                />
                <Image
                  style={[styles.frameChild, styles.manIconLayout]}
                  source={require("../../../assets/images/Ticket/vector-yellow.png")}
                />
                <View style={styles.frameParent1}>
                  <View style={styles.frameParent2}>
                    <View style={styles.frameParent3}>
                      <View style={styles.parent}>
                        <Text style={[styles.text, styles.hClr]}>14:02</Text>
                        <Text style={[styles.pht, styles.nTypo]}>52 phút</Text>
                      </View>
                      <View style={styles.frameWrapper}>
                        <View style={styles.frameWrapper}>
                          <View style={styles.indenticationTransportBadge}>
                            <View style={styles.icons1}>
                              <Image
                                style={[styles.manIcon, styles.manIconLayout]}
                                source={require("../../../assets/images/Ticket/bus.png")}
                              />
                            </View>
                            <View style={styles.wrapper}>
                              <Text style={[styles.text1, styles.text1Clr]}>
                                08
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.frameParent4}>
                      <View>
                        <Text style={[styles.q10, styles.nLayout]}>Q.10</Text>
                        <Text style={[styles.lThngKit, styles.lThngKitTypo]}>
                          268 Lý Thường Kiệt
                        </Text>
                      </View>
                      <View>
                        <Text style={[styles.n, styles.nLayout]}>đến</Text>
                      </View>
                      <View style={styles.tpThCParent}>
                        <Text style={[styles.tpThC, styles.nLayout]}>
                          TP. Thủ Đức
                        </Text>
                        <Text style={[styles.tQuangBu, styles.lThngKitTypo]}>
                          Tạ Quang Bửu
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.groupParent}>
                    <Image
                      style={styles.groupIcon}
                      source={require("../../../assets/images/Ticket/qr.png")}
                    />
                    <View
                      style={[
                        styles.htHiuLcTrongParent,
                        styles.vndWrapperSpaceBlock,
                      ]}
                    >
                      <Text style={[styles.htHiuLc, styles.q10Typo]}>
                        Hết hiệu lực trong
                      </Text>
                      <View style={[styles.hParent, styles.parentSpaceBlock]}>
                        <Text style={[styles.h, styles.hClr]}>
                          <Text style={styles.text2}>23</Text>
                          <Text style={[styles.h1, styles.h1Typo]}>h</Text>
                        </Text>
                        <View style={styles.mParent}>
                          <Text style={[styles.h, styles.hClr]}>
                            <Text style={styles.text2}>02</Text>
                            <Text style={[styles.h1, styles.h1Typo]}>m</Text>
                          </Text>
                          <Text style={[styles.s, styles.hClr]}>
                            <Text style={styles.text2}>10</Text>
                            <Text style={[styles.h1, styles.h1Typo]}>s</Text>
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
          <View style={styles.frameWrapper1}>
            <Pressable style={styles.iconsParent}>
              <View style={[styles.icons2, styles.iconsFlexBox]}>
                <Image
                  style={[styles.manIcon, styles.manIconLayout]}
                  source={require("../../../assets/images/Ticket/left-arrow.png")}
                />
              </View>
              <Text style={[styles.vCaTi, styles.h1Typo]}>Vé của tôi</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentPosition: {
    height: 690,
    width: screenWidth,
    left: -7,
    top: 0,
    position: "absolute",
  },
  hClr: {
    color: "#1f1f1f",
    textAlign: "left",
  },
  parentSpaceBlock: {
    marginLeft: 16,
    flexDirection: "row",
  },
  iconsFlexBox: {
    height: 24,
    width: 24,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  manIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vndWrapperSpaceBlock: {
    marginTop: 20,
    flexDirection: "row",
  },
  ticketsLayout: {
    height: 463,
    alignSelf: "stretch",
  },
  nTypo: {
    textAlign: "left",
    color: "#1f1f1f",
  },
  text1Clr: {
    color: "#fff",
    textAlign: "left",
  },
  nLayout: {
    opacity: 0.8,
    lineHeight: 15,
    fontSize: 12,
  },
  lThngKitTypo: {
    marginTop: 10,
    letterSpacing: 0.2,
    lineHeight: 16,
    fontSize: 16,
    color: "#1f1f1f",
    fontWeight: "600",
  },
  q10Typo: {
    color: "#404040",
    fontWeight: "500",
  },
  h1Typo: {
    fontWeight: "700",
  },
  patternsIcon: {
    overflow: "hidden",
  },
  vCaBn: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: "left",
    fontWeight: "600",
    color: "#1f1f1f",
    letterSpacing: -0.2,
    flex: 1,
  },
  sinhVin: {
    lineHeight: 16,
    fontSize: 16,
    textAlign: "left",
    color: "#1f1f1f",
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  manIcon: {
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  icons: {
    marginLeft: 4,
    justifyContent: "center",
  },
  sinhVinParent: {
    borderRadius: 8,
    backgroundColor: "rgba(241, 241, 241, 0.3)",
    paddingLeft: 12,
    paddingTop: 3,
    paddingRight: 6,
    paddingBottom: 3,
    overflow: "hidden",
    alignItems: "center",
  },
  vCaBnParent: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  vnd: {
    lineHeight: 20,
    color: "#694d00",
    opacity: 0.9,
    fontSize: 20,
    textAlign: "left",
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  vndWrapper: {
    alignItems: "center",
  },
  frameGroup: {
    alignSelf: "stretch",
  },
  subtractIcon: {
    width: screenWidth*0.9,
    height: 464,
  },
  frameChild: {
    height: "0.65%",
    width: "86.26%",
    top: "29.27%",
    right: "7.08%",
    bottom: "70.09%",
    left: "6.66%",
    position: "absolute",
  },
  text: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 28,
    width: 100,
    height: 25,
    textAlign: "left",
    fontWeight: "600",
    color: "#1f1f1f",
  },
  pht: {
    width: 60,
    height: 15,
    marginLeft: 6,
    lineHeight: 12,
    fontSize: 12,
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
    fontWeight: "500",
    color: "#fff",
    lineHeight: 12,
    fontSize: 12,
  },
  wrapper: {
    marginLeft: 4,
    alignItems: "center",
  },
  indenticationTransportBadge: {
    borderRadius: 12,
    backgroundColor: "#ff8811",
    width: 58,
    height: 28,
    paddingLeft: 8,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    flexDirection: "row",
  },
  frameParent3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  q10: {
    color: "#404040",
    fontWeight: "500",
    textAlign: "left",
  },
  lThngKit: {
    textAlign: "left",
  },
  n: {
    textAlign: "left",
    color: "#1f1f1f",
  },
  tpThC: {
    textAlign: "right",
    color: "#404040",
    fontWeight: "500",
  },
  tQuangBu: {
    textAlign: "right",
  },
  tpThCParent: {
    alignItems: "flex-end",
  },
  frameParent4: {
    marginTop: 16,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameParent2: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  groupIcon: {
    width: 230,
    height: 230,
  },
  htHiuLc: {
    lineHeight: 12,
    fontSize: 12,
    opacity: 0.9,
    textAlign: "left",
  },
  text2: {
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  h1: {
    letterSpacing: 0.1,
    fontSize: 12,
    fontWeight: "700",
  },
  h: {
    textAlign: "left",
  },
  s: {
    marginLeft: 4,
    textAlign: "left",
  },
  mParent: {
    marginLeft: 6,
    flexDirection: "row",
  },
  hParent: {
    height: 25,
  },
  htHiuLcTrongParent: {
    alignItems: "flex-end",
  },
  groupParent: {
    marginTop: 64,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent1: {
    marginTop: -231.5,
    top: "50%",
    right: "0%",
    left: "0%",
    padding: 28,
    height: 464,
    position: "absolute",
    width: "100%",
  },
  tickets: {
    marginTop: 28,
    alignItems: "center",
  },
  icons2: {
    justifyContent: "center",
  },
  vCaTi: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    marginLeft: 14,
    color: "#fff",
    textAlign: "left",
  },
  iconsParent: {
    borderRadius: 16,
    backgroundColor: "#1a1528",
    height: 54,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 30,
    paddingBottom: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  frameWrapper1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 28,
    justifyContent: "space-between",
  },
  frameContainer: {
    backgroundColor: "#ffce48",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  ticketsYourTicket: {
    backgroundColor: "#fff",
    height: 955,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default TicketYourTicket;
