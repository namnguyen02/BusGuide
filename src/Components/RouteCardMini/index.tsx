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

export const RouteCardMini = ({time, station}) => {
    const [icon, setIcon] = useState(false)

    return (
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image source={require('../../../assets/card/map.png')}/>
            </View>
            <View style={styles.messageWrapper}>
                <View style={styles.header}>
                    <Text style={{color: '#1F1F1F', fontSize: 18, fontWeight: '800', marginRight: 6}}>{time}</Text>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Text style={{color: '#9D9D9D', fontSize: 13, fontWeight: '500'}}>57 </Text>
                        <Text style={{color: '#9D9D9D', fontSize: 13, fontWeight: '500'}}>phút</Text>
                    </View>
                </View>
                <View style={styles.message}>
                    <Text style={{color: '#9D9D9D', fontSize: 13, fontWeight: '500', marginRight: 6}}>Từ trạm</Text>
                    <Text style={{color: '#1F1F1F', fontSize: 13, fontWeight: '500'}}>{station}</Text>
                </View>
            </View>
            <View style={styles.rowSpacer} />

            <Pressable style={styles.iconWrapper} onPress={()=>{setIcon(!icon)}}>
                {icon &&
                    <FeatherIcon
                    color="#9D9D9D"
                    name="bell-off"
                    // color="#fafafa"
                    size={16}
                    style={{}}
                    // size={22}
                />}
                {!icon &&
                    <FeatherIcon
                    color="#9D9D9D"
                    name="bell"
                    // color="#fafafa"
                    size={16}
                    style={{}}
                    // size={22}
                />}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',

        height: 74,
        padding: 12,
        borderRadius: 24,
        width: 320,
        // backgroundColor: '#000'
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 1,
            },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 12,
        marginVertical: 2,
        overflow: 'hidden',

    },
    imageWrapper: {
        width: 50,
        height: 50,
        margin: 12,
    },
    messageWrapper: {

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 12
    },
    message: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconWrapper: {
        width: 32,
        height: 32,
        padding: 8,
        margin: 12,
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },

})