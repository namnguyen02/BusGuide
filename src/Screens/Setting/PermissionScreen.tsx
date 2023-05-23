import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

const PERMISSIONS = [
  { id: 'statistic', icon: 'globe', label: 'Truy cập dữ liệu sử dụng', description:'Thống kê về việc bạn sử dụng ứng dụng.'},
  { id: 'location', icon: 'moon', label: 'Vị trí', description:'Cho phép truy cập vị trí của thiết bị.'},
  { id: 'phone', icon: 'wifi', label: 'Danh bạ', description:'Sử dụng địa chỉ liên hệ của bạn trong danh bạ.'},
  { id: 'calendar', icon: 'flag', label: 'Lịch', description:'Lưu các tuyến đường đã lên kế hoạch vào lịch.'},
  { id: 'camera', icon: 'mail', label: 'Máy ảnh', description:'Chụp ảnh các tuyến đường yêu thích.'},
  { id: 'photo_video', icon: 'mail', label: 'Ảnh và video', description:'Tải lên hình ảnh các tuyến đường yêu thích.'},
];


export const PermissionScreen = ({navigation}) =>  {
  const [form, setForm] = useState({
    statistic: false,
    location: false,
    phone: false,
    calendar: false,
    camera: false,
    photo_video: false,
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Quyền</Text>
          <Text style={styles.description}>Chúng tôi sử dụng quyền của ứng dụng để giúp bạn tránh gặp trở ngại khi sử dụng</Text>
        {PERMISSIONS.map(({ id, label, icon, description }, index) => {
          return (
            <View
              key={id}
              style={[
                styles.rowWrapper,
                index === 0 && { borderTopWidth: 0 },
              ]}>
              <TouchableOpacity>
                <View style={styles.row}>
                  <View style={styles.rowText}>
                    <Text style={styles.rowLabel}>{label}</Text>
                    <Text style={styles.rowDescription}>{description}</Text>
                  </View>

                  <View style={styles.rowSpacer} />

                  {(
                    <Switch
                      // value={form[id as keyof typeof form]}
                      value={form[id]}
                      onValueChange={value => setForm({ ...form, [id]: value })}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  title: {
    marginHorizontal: 24,
    fontSize: 26,
    paddingBottom: 10,
    fontWeight: '500',
  },
  description: {
    marginHorizontal: 24,
    fontSize: 13,
    paddingBottom: 40,
  },
  row: {
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
    color: '#000',
    paddingBottom: 6,
  },
  rowDescription: {
    fontSize: 12,
    fontWeight: '300',
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
});