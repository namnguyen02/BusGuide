

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

import { Searchbar } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SECTIONS = [
  {
    header: 'Cài đặt chung',
    items: [
      { id: 'start_screen', screen:'StartScreen', icon_type: 'Feather',icon: 'smartphone', label: 'Màn hình bắt đầu', description:'Chọn màn hình xuất hiện khi mở ứng dụng', type: 'link' },
      { id: 'fav_address', screen:'FavoriteAddress', icon_type: 'Feather',icon: 'star', label: 'Địa chỉ', description:'Lưu địa chỉ quan trọng', type: 'link' },
      { id: 'payment', screen:'Payment', icon_type: 'Feather',icon: 'credit-card', label: 'Phương thức thanh toán', description:'Cài đặt tùy chọn thanh toán', type: 'link' },
    ],
  },
  {
    header: 'Cài đặt dữ liệu',
    items: [
      { id: 'permission', screen:'Permission', icon_type: 'Feather',icon: 'lock', label: 'Quyền ứng dụng', description:'Cài đặt quyền ứng dụng có thể truy cập', type: 'link' },
      { id: 'notify', screen:'', icon_type: 'Feather',icon: 'map', label: 'Thông báo lộ trình', description:'Nhận thông báo về thay đổi tuyến đường', type: 'toggle' },
      { id: 'privacy', screen:'Privacy', icon_type: 'Feather',icon: 'lock', label: 'Chính sách bảo mật', description:'Quy định về bảo mật thông tin', type: 'link' },
    ],
  },
  {
    header: 'Về chúng tôi',
    items: [
      { id: 'news', screen:'News', icon_type: 'MaterialCommunity',icon: 'newspaper-variant-multiple-outline', label: 'Tin tức', description:'Khám phá tin tức về ứng dụng', type: 'link' },
      { id: 'introduction', screen:'Introduction', icon_type: 'MaterialCommunity',icon: 'file-question-outline', label: 'Giới thiệu', description:'Hướng dẫn người dùng mới', type: 'link' },
      { id: 'app_info', screen:'AboutApp', icon_type: 'MaterialCommunity',icon: 'information-outline', label: 'Thông tin ứng dụng', description:'Chi tiết ứng dụng và giấy phép', type: 'link' },
    ],
  },
];

export const SettingScreen = ({navigation}) =>  {
  const [form, setForm] = useState({
    notify: true,
  });

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ backgroundColor: '#f6f6f6' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>

          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </View>

        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />

          <Text style={styles.profileName}>John Doe</Text>

          <Text style={styles.profileEmail}>john.doe@mail.com</Text>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        </View> */}
        {
          <Searchbar
            style = {styles.searchBar}
            placeholder="Tìm kiếm..."
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        }

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles.sectionBody}>
              {items.map(({ id, screen, label, icon_type, icon, description, type }, index) => {
                return (
                  <View
                    key={id}
                    style={[
                      styles.rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {screen!=''?navigation.navigate(screen):{}} }>
                      <View style={styles.row}>
                        <View style={styles.rowIconWrapper}>
                          {icon_type === 'Feather' &&
                          <FeatherIcon
                            // color="#616161"
                            name={icon}
                            color="#fff"
                            size={20}
                            style={styles.rowIcon}
                            // size={22}
                          />}
                          {icon_type === 'MaterialCommunity' &&
                          <MaterialCommunityIcons
                            name={icon}
                            color="#fff"
                            size={20}
                            style={styles.rowIcon}
                          />}
                        </View>

                        <View style={styles.rowText}>
                          <Text style={styles.rowLabel}>{label}</Text>
                          <Text style={styles.rowDescription}>{description}</Text>
                        </View>

                        <View style={styles.rowSpacer} />

                        {type === 'toggle' && (
                          <Switch
                            // value={form[id as keyof typeof form]}
                            value={form[id]}
                            onValueChange={value => setForm({ ...form, [id]: value })}
                            trackColor={{false: '#fafafa', true: '#FF8811'}}
                            thumbColor={form[id] ? '#ffffff' : '#E5F2FE'}
                          />
                        )}

                        {(type === 'link') && (
                          <FeatherIcon
                            color="#ababab"
                            name="chevron-right"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },

  searchBar: {
    backgroundColor: '#fff',
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
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