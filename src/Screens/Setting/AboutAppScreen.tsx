import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const AboutAppScreen = ({navigation}) =>  {


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
              style={{marginBottom: 10}}
              source={require('../../../assets/brandlogo.png')}
          />
          <View style={styles.headerText}>
            <Text style={{fontWeight: '500', fontSize: 24, marginBottom: 10}}>Về chúng tôi</Text>
            <Text style={{width: 342, justifyContent: 'center',fontSize: 14}}>BusGuide là một dịch vụ cung cấp tất cả thông tin về chuyến đi của bạn từ A đến B trên xe bus.</Text>
          </View>


        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={[
              styles.rowWrapper,
              { borderTopWidth: 0, width: 380, marginLeft: 10 },
            ]}>
            <TouchableOpacity>
              <View style={styles.row}>
                <View style={styles.rowText}>
                  <Text style={styles.rowLabel}>Phiên bản</Text>
                </View>

                <View style={styles.rowSpacer} />

                <Text style={styles.rowDescription}>1.0.0</Text>

              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.rowWrapper,
              { borderTopWidth: 1, width: 380, marginLeft: 10 },
            ]}>
            <TouchableOpacity>
              <View style={styles.row}>
                <View style={styles.rowText}>
                  <Text style={styles.rowLabel}>License</Text>
                </View>

                <View style={styles.rowSpacer} />

                <Text style={styles.rowDescription}>Đọc thỏa thuận</Text>

                {(
                  <FeatherIcon
                  color="#ababab"
                  name="chevron-right"
                  size={22}
                />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.rowWrapper,
              { borderTopWidth: 1, width: 380, marginLeft: 10 },
            ]}>
            <TouchableOpacity>
              <View style={styles.row}>
                <View style={styles.rowText}>
                  <Text style={styles.rowLabel}>Báo cáo</Text>
                </View>

                <View style={styles.rowSpacer} />

                <Text style={styles.rowDescription}>Cung cấp phản hổi</Text>

                {(
                  <FeatherIcon
                  color="#ababab"
                  name="chevron-right"
                  size={22}
                />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingVertical: 20,
      order: 2,
      alignSelf: "stretch",
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: 160,
      order: 0,
      alignSelf: "stretch",
      flexGrow: 0
    },
    headerText: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: 80
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingRight: 24,
      height: 70,
    },
    rowWrapper: {
      paddingLeft: 24,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#e3e3e3',
    },
    rowIconWrapper: {
      borderRadius: 16,
      backgroundColor: '#1A1528',
      width: 40,
      height: 40,
      marginRight: 12,
    },
    rowIcon: {
      margin: 10,
    },
    rowText: {
      display: 'flex',
      flexDirection: 'column',
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '500',
      color: '#9D9D9D',
      paddingBottom: 6,
    },
    rowDescription: {
      fontSize: 15,
      fontWeight: '500',
      color: '#000',
    },
    rowValue: {
      fontSize: 17,
      color: '#616161',
      marginRight: 4,
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },

})