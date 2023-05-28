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
  TextInput,
  Pressable
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Profile = () => {
    const [username, setUsername] = useState('BatOnTeam22')
    const [fullname, setFullname] = useState('Bình Nguyên Bất Ổn')
    const [phone, setPhone] = useState('+84 522 205 272')
    const [email, setEmail] = useState('batonteam22@gmail.com')

    return (
        <SafeAreaView style={{backgroundColor: '#FFF'}}>
            <ScrollView>
                {/* <Toast
                    type='ticket'
                    title='Vé đã mua'
                    time='14.04'
                    description='Tuyến đường bắt đầu từ trạm Đại học Bách Khoa bị chậm 5 phút.'/> */}
                <View style={styles.header}>
                    <View style={styles.imageBorder}>
                        <View style={styles.imageWrapper}>
                            <Image
                                style={{resizeMode: 'stretch',}}
                                source={require('../../../assets/avatar-sample.png')}
                            />

                        </View>
                        <Pressable
                            style={styles.iconWrapper}
                            onPress={()=>{}}>
                            <FeatherIcon
                                // color="#616161"
                                name="camera"
                                color="#fff"
                                size={16}
                                style={{}}
                                // size={22}
                            />
                        </Pressable>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: '600', color: '#1F1F1F'}}>Chỉnh sửa hồ sơ</Text>
                </View>

                <View style={styles.editForm}>
                    <Text style={{fontSize: 14, color: '#404040', fontWeight: '400', marginBottom: 16}}>Tên đăng nhập</Text>
                    <View style={styles.inputArea}>
                        <FeatherIcon
                            // color="#616161"
                            name="user"
                            color="#000"
                            size={20}
                            style={styles.inputIcon}
                            // size={22}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setUsername}
                            value={username}
                            placeholder="Tên đăng nhập"
                            keyboardType="default"
                        />
                    </View>
                    <Text style={{fontSize: 14, color: '#404040', fontWeight: '400', marginBottom: 16}}>Họ và tên</Text>
                    <View style={styles.inputArea}>
                        <FeatherIcon
                            // color="#616161"
                            name="user"
                            color="#000"
                            size={20}
                            style={styles.inputIcon}
                            // size={22}
                          />
                        <TextInput
                            style={styles.input}
                            onChangeText={setFullname}
                            value={fullname}
                            placeholder="Nguyễn Văn A"
                            keyboardType="default"
                        />
                    </View>
                    <Text style={{fontSize: 14, color: '#404040', fontWeight: '400', marginBottom: 16}}>Số điện thoại</Text>
                    <View style={styles.inputArea}>
                        <FeatherIcon
                            // color="#616161"
                            name="smartphone"
                            color="#000"
                            size={20}
                            style={styles.inputIcon}
                            // size={22}
                          />
                        <TextInput
                            style={styles.input}
                            onChangeText={setPhone}
                            value={phone}
                            placeholder="+84 123 456 789"
                            keyboardType="default"
                        />
                    </View>
                    <Text style={{fontSize: 14, color: '#404040', fontWeight: '400', marginBottom: 16}}>Email</Text>
                    <View style={styles.inputArea}>
                        <FeatherIcon
                            // color="#616161"
                            name="mail"
                            color="#000"
                            size={20}
                            style={styles.inputIcon}
                            // size={22}
                          />
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="abc@gmail.com"
                            keyboardType="default"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 300,
        backgroundColor: '#FFCE48',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBorder: {
        backgroundColor: '#FFC286',
        padding: 5,
        borderColor: '#FF9F40',
        borderWidth: 5,
        borderRadius: 9999,
        alignItems: 'center',
        marginBottom: 36

    },
    imageWrapper: {
        borderRadius: 9999,
        backgroundColor: '#FAFAFA',
        width: 128,
        height: 128,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editForm: {
        marginVertical: 36,
        marginHorizontal: 24,
    },
    inputArea: {
        position: 'relative',
        height: 60,
        display: 'flex',
        marginBottom: 28,
    },
    input: {
        height: 60,
        flex: 1,
        backgroundColor: '#FAFAFA',
        padding: 16,
        paddingLeft: 80,
        color: '#1F1F1F',
    },
    inputIcon: {
        position: 'absolute',
        zIndex: 1,
        left: 16,
        top: '30%',
    },
    iconWrapper: {
        borderRadius:9999,
        backgroundColor:'#1A1528',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: -20,
    },
})