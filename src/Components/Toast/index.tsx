import { View, Text, StyleSheet , Image, Pressable} from 'react-native'
import React from 'react'


export const Toast = ({type, title, time, description}) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
                {type=='ticket' &&
                <Image
                    style={{resizeMode: 'stretch', position:'absolute'}}
                    source={require('../../../assets/toast/ticket-icon.png')}
                />}
                {type=='delay' &&
                <Image
                    style={{resizeMode: 'stretch', position:'absolute'}}
                    source={require('../../../assets/toast/delay-icon.png')}
                />}
                {type=='cancel' &&
                <Image
                    style={{resizeMode: 'stretch', position:'absolute'}}
                    source={require('../../../assets/toast/cancel-icon.png')}
                />}
                {type=='payment' &&
                <Image
                    style={{resizeMode: 'stretch', position:'absolute'}}
                    source={require('../../../assets/toast/payment-icon.png')}
                />}
            </View>
            <View style={styles.messageWrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={{color: '#1F1F1F', fontSize: 16, fontWeight: '600'}}>{title}</Text>
                    <View style={styles.rowSpacer} />

                    <Text style={{color: '#404040', fontSize: 14, fontWeight: '400'}}>{time}</Text>
                </View>

                <Text style={{lineHeight: 20, fontSize: 14, color: '#404040', fontWeight: '400'}}>{description}</Text>
                {type==='ticket' &&
                    <Pressable style={styles.showTicketBtn}>
                        <Text style={{color: '#fff', fontSize: 14, fontWeight: '700'}}>Xem vé</Text>
                    </Pressable>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 16,
        margin: 12,
        backgroundColor: '#FAFAFA'
    },
    iconWrapper: {
    },
    messageWrapper: {
        margin: 24,
        marginLeft: 60,
    },
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 12,
    },
    showTicketBtn: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,width: 130,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: '#1A1528',
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
})